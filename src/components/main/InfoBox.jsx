import { useEffect, useState } from "react";

import { useAuthContext } from "../AuthProvider";

export default function InfoBox () {
    const {isLogin} = useAuthContext()
    const [onlinePlayers, setOnlinePlayers] = useState(0)

    useEffect(() => {
       
        const fetchAccounts = async () => { 
            try {
                const response = await fetch("http://localhost:3000/auth/getAccounts", {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                if (!response.ok) {
                    throw new Error('Failed to fetch tables');
                }

                const data = await response.json();
                
                const nbOnline = data.users.filter(user => user.online )
                
                setOnlinePlayers(nbOnline.length)
                
            } catch (error) {
                console.error('Error fetching tables:', error);
            }
        };

        fetchAccounts();
    }, [isLogin]);

    return (
        <div className="absolute h-auto right-0  w-64 flex flex-col justify-center bg-amber-200">
            <span className="p-2"> Nombre de joueurs en ligne : {onlinePlayers} </span>
            
        </div>
    )
}