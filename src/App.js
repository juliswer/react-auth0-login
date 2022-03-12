import "./App.css";
import LoginButton from './components/LoginButton';
import Profile from './components/Profile';
import LogoutButton from './components/LogoutButton';

function App() {
  return (
    <div className="App">
      <h1>Application</h1>
      <LoginButton />
      <LogoutButton />
      <Profile />
    </div>
  );
}

export default App;
