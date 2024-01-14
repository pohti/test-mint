import { Amplify } from 'aws-amplify';
import type { WithAuthenticatorProps } from '@aws-amplify/ui-react';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import config from './amplifyconfiguration.json';
import MintComponent from './components/Mint';
import MintDetail from './components/MintDetail';
import { fetchAuthSession } from 'aws-amplify/auth';
import  { useEffect } from 'react';


Amplify.configure(config);

export function App({ signOut, user }: WithAuthenticatorProps) {
  useEffect(() => {
    const fetchData = async () => {
      const { idToken } = (await fetchAuthSession()).tokens ?? {};
      if (idToken) {
        localStorage.setItem('accessToken', idToken.toString());
        console.log('idToken:', idToken.toString());
      }
    };
    fetchData();
  }, []);

  return (
    <Router>
      <>
        <h1>Hello {user?.username}</h1>
        <MintComponent />
        <Routes>
          <Route path="/mints" element={<MintDetail id={''} />} />
        </Routes>
        <button onClick={signOut}>Sign out</button>
      </>
    </Router>
  );
}

export default withAuthenticator(App);
