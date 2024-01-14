import { Amplify } from 'aws-amplify';
import type { WithAuthenticatorProps } from '@aws-amplify/ui-react';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import config from './amplifyconfiguration.json';
import MintComponent from './components/Mint';
import MintDetail from './components/MintDetail';

Amplify.configure(config);

export function App({ signOut, user }: WithAuthenticatorProps) {
  const sendRequest = async () => {
    try {
      // Get the authentication tokens directly from the user object
      // const idToken = typeof user?.signInDetails?.loginId === 'string' ? user?.signInDetails?.loginId : user?.signInDetails?.loginId?.token?.getJwtToken?.();

      console.log("User:", user);
      const headers = {
        Authorization: `Bearer ${test}`,
      };

      // Make a request to your backend with the authentication token
      const response = await fetch('https://your-backend-api-endpoint/resource', {
        method: 'GET',
        headers,
      });

      const data = await response.json();
      console.log('Backend response:', data);
    } catch (error) {
      console.error('Backend request error:', error);
    }
  };

  return (
    <Router>
      <>
        <h1>Hello {user?.username}</h1>
        <MintComponent />
        <Routes>
          <Route path="/mints" element={<MintDetail id={''} />} />
        </Routes>
        <button onClick={signOut}>Sign out</button>
        <button onClick={sendRequest}>Send Request to Backend</button>
      </>
    </Router>
  );
}

export default withAuthenticator(App);
