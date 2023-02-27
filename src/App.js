import logo from './logo.svg';
import './App.css';
import Massanger from './components/Massanger';
import { GoogleOAuthProvider } from '@react-oauth/google';
import UserProvider from './context/UserProvider';

function App() {
  const clientId= '668673245264-ccgcpg9usfj3u4vohiue4l2j85edg5kb.apps.googleusercontent.com';
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <UserProvider>
      <Massanger/>
      </UserProvider>
     
    </GoogleOAuthProvider>
  );
}

export default App;
