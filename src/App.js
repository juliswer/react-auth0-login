import "./App.css";
import LoginButton from "./components/LoginButton";
import Profile from "./components/Profile";
import LogoutButton from "./components/LogoutButton";
import Spinner from './components/Spinner';

import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { isAuthenticated, isLoading } = useAuth0();

  if(isLoading) return <Spinner message="Loading Data" />;

  return (
    <div className="App">
      <h1>Application</h1>
      {isAuthenticated ? <LogoutButton /> : <LoginButton />}
      <Profile />
    </div>
  );
}

export default App;
