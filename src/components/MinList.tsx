import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAllMints } from '../api/mintAPIs'; // Replace 'yourApiFile' with the correct path

interface Mint {
    mintId : number;
    name: string;
    description: string;
    image:string;
}

interface MintListComponentProps {
    mintItems: Mint[];
}

const MintListComponent: React.FC<MintListComponentProps> = ({mintItems}) => {
    const navigate = useNavigate();
    const [mints, setMints] = useState<Mint[]>([]);

    const handleRowClick = (mintId:number) => {
        navigate(`/mints?uuid=${mintId}`);
        console.log("Clicked on mint with id:", mintId);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getAllMints();
                console.log("Response:", response)
                setMints(response.data); // Assuming your API response is an array of mints
            } catch (error) {
                console.error('Error fetching mints:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1>List of Mints</h1>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {mints.map((mint) => (
                        <tr key={mint.mintId} onClick={() => handleRowClick(mint.mintId)}>
                            <td>
                                <Link to={`/mints?uuid=${mint.mintId}`}>{mint.name}</Link>
                            </td>
                            <td>{mint.description}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default MintListComponent;
