import { ID, Permission, Query, Role } from "react-native-appwrite";
import { createContext, useContext, useEffect, useState } from "react";
import { account, avatars, databases } from "./appwrite";
import Toast from "react-native-toast-message";
import { DATABASE_ID, USER_COLLECTION_ID } from "@env";

const UserContext = createContext();

export function useUser() {
  return useContext(UserContext);
}

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  async function login(email, password) {
    setIsLoading(true);
    try {
      const loggedIn = await account.createEmailPasswordSession(
        email,
        password
      );
      await init();
      Toast.show({
        type: "success",
        text2: "Welcome",
        visibilityTime: 9000,
        autoHide: true,
        topOffset: 30,
        bottomOffset: 40,
      });
    } catch (error) {
      setIsLoading(false);
      setErrorMessage(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  async function logout() {
    try {
      await account.deleteSession("current");
      setUser(null);
      Toast.show({
        type: "success",
        text1: "Bye 👋 ",
        text2: "You are logged out! ",
      });
    } catch (error) {
      setErrorMessage(error.message);
    }
  }

  async function register(email, password, name) {
    setIsLoading(true);
    try {
      const newAccount = await account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (!newAccount) throw Error;
      const avatarUrl = avatars.getInitials(name);

      await login(email, password);
      const newUser = await databases.createDocument(
        DATABASE_ID,
        USER_COLLECTION_ID,
        ID.unique(),
        {
          accountId: newAccount.$id,
          email,
          username: name,
          avatar: avatarUrl,
        }
      );
      await init();
    } catch (error) {
      setIsLoading(false);
      setErrorMessage(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  async function init() {
    try {
      const currentAccount = await account.get();

      if (!currentAccount) throw new Error("No active session found.");

      const currentUser = await databases.listDocuments(
        DATABASE_ID,
        USER_COLLECTION_ID,
        [Query.equal("accountId", currentAccount.$id)]
      );

      if (currentUser.documents.length === 0) {
        throw new Error("User not found in database.");
      }

      setUser(currentUser.documents[0]);
    } catch (error) {}
  }

  useEffect(() => {
    init();
  }, []);

  return (
    <UserContext.Provider
      value={{
        user,
        login,
        logout,
        register,
        errorMessage,
        isLoading,
        setErrorMessage,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
