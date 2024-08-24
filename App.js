import { UserProvider } from "./appwrite/UserContext";
import Router from "./Router";

export default function App() {
  return (
    <UserProvider>
      <Router />
    </UserProvider>
  );
}
