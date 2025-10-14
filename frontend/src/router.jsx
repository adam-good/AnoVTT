import { createBrowserRouter } from "react-router-dom";
import Home from "./components/Home.jsx";
import Signup from "./components/Signup.jsx"; 
import Signin from "./components/Signin.jsx";
import UserProfile from "./components/UserProfile.jsx";
import CharacterSheet from "./components/CharacterSheet.jsx";
import Campaign from "./components/Campaign.jsx";
import GameTable from "./components/GameTable.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/signup",
    element: <Signup />
  },
  {
    path: "/signin",
    element: <Signin />
  },
  {
    path: "/profile",
    element: <UserProfile />
  },
  {
    path: "/character-sheet",
    element: <CharacterSheet />
  },
  {
    path: "/campaign",
    element: <Campaign />
  },
  {
    path: "/table",
    element: <GameTable />
  }
]);

export default router;
