import { Amplify } from 'aws-amplify';
import type { WithAuthenticatorProps } from '@aws-amplify/ui-react';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import config from './amplifyconfiguration.json';

import { fetchAuthSession } from 'aws-amplify/auth';
import  { useEffect, useState } from 'react';


import Box from '@mui/material/Box';

import CustomHeader from './components/CustomHeader';
import CreateMint from './components/CreateMint';
import MintListComponent from './components/MinList';
// import MintComponent from './components/Mint';
// import MintDetail from './components/MintDetail';

Amplify.configure(config);

interface Mint {
  mintId : number;
  name: string;
  description: string;
  image:string;
}

interface MintItems {
  mintItems: Mint[]
}

// export function App({ signOut, user }: WithAuthenticatorProps) {
//   useEffect(() => {
//     const fetchData = async () => {
//       const { idToken } = (await fetchAuthSession()).tokens ?? {};
//       if (idToken) {
//         localStorage.setItem('accessToken', idToken.toString());
//         console.log('idToken:', idToken.toString());
//       }
//     };
//     fetchData();
//   }, []);

//   return (
//     <Router>
//       <>
//         <h1>Hello {user?.username}</h1>
//         <MintComponent />
//         <Routes>
//           <Route path="/mints" element={<MintDetail id={''} />} />
//         </Routes>
//         <button onClick={signOut}>Sign out</button>
//       </>
//     </Router>
//   );
// }

// export default withAuthenticator(App);

export function App() {
  useEffect(() => {
    // const fetchData = async () => {
    //   const { idToken } = (await fetchAuthSession()).tokens ?? {};
    //   if (idToken) {
    //     localStorage.setItem('accessToken', idToken.toString());
    //     console.log('idToken:', idToken.toString());
    //   }
    // };
    // fetchData();
  }, []);

  return (
    <Router>
        <CustomHeader username="John" />
        <Box style={mainBoxStyle}>
          <Routes>
            <Route path="/create"   element={<CreateMint />}  />
            <Route path="/list"     element={<MintListComponent mintItems={mintItems}/>} />
          </Routes>
        </Box>
    </Router>
  );
}

export default App;

const mintItems = [
  {
    mintId : 1,
    name: 'test',
    description: 'test description',
    image: 'img url'
  }
]

const mainBoxStyle = {
  padding: "20px 10px",
  backgroundColor: "#e8e8e8",
  height: "100vh"
}