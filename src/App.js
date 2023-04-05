import logo from './logo.svg';
import './App.css';
import Massanger from './components/Massanger';
import { GoogleOAuthProvider } from '@react-oauth/google';
import UserProvider from './context/UserProvider';

function App() {
  const clientId='505300438431-au4rm5fjm6gj9gea9da5l3t22epu6gt9.apps.googleusercontent.com';
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <UserProvider>
      <Massanger/>
      </UserProvider>
     
    </GoogleOAuthProvider>
  );
}

export default App;
