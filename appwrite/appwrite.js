import { Client, Account, Avatars, Databases } from "react-native-appwrite";
import { APPWRITE_ENDPOINT, APPWRITE_PROJECT_ID, PLATFORM } from "@env";

const client = new Client();
client
  .setEndpoint(APPWRITE_ENDPOINT)
  .setProject(APPWRITE_PROJECT_ID)
  .setPlatform(PLATFORM);

const account = new Account(client);
const avatars = new Avatars(client);
const databases = new Databases(client);

export { account, avatars, databases };
