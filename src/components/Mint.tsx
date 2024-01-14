import React, { useEffect, useState } from 'react';
import CreateMint from './CreateMint';
import MintList from './MinList';

interface Mint {
    mintId : number;
    name: string;
    description: string;
    image:string;
}

const MintComponent: React.FC = () => {
    const [mints, setMints] = useState([]);

    // useEffect(() => {
    //     // Call API to fetch mints
    //     fetch('https://api.example.com/mints')
    //         .then(response => response.json())
    //         .then(data => setMints(data))
    //         .catch(error => console.error(error));
    // }, []);

    return (
        <div>
            <CreateMint />
            <MintList mints={[]} />
        </div>
    );
};

export default MintComponent;