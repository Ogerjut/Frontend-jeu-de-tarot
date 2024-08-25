
import { DialogProvider, DialogTrigger, DialogContent, DialogClose } from "../DialogProvider";

import { X } from "lucide-react";
import { useEffect, useState } from "react";

import { useAuthContext } from "../AuthProvider";


export default function Lobby() {
    const {account}= useAuthContext()

    const [tables, setTables] = useState([])

    // onJoin() a faire // verif nombre de joeuur  max (devient completed)
    // trouver table via id 

    useEffect(() => {
        const fetchTables = async () => {
            try {
                const response = await fetch("http://localhost:3000/game/getTables", {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                if (!response.ok) {
                    throw new Error('Failed to fetch tables');
                }

                const data = await response.json();
                setTables(data.tables);
            } catch (error) {
                console.error('Error fetching tables:', error);
            }
        };

        fetchTables();
    }, []);

    const handleCreateTable = async (e, nb)=>{
        e.preventDefault()
        const req = await fetch("http://localhost:3000/game/createTable", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                nbPlyrs : 0,
                nbPlyrsMax : nb,
                plyrsList : [account.pseudo], 
                full : false,
                completed : false,

            }),
        });

        const data = await req.json();
        
        if (data.table) {
            const tablesCopy = [...tables];
            tablesCopy.push(data.table);
            setTables(tablesCopy);
        }
        
    }

    const handleDeleteTable = async (id) => {
        try {
            const response = await fetch(`http://localhost:3000/game/deleteTable/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                throw new Error('Failed to delete table');
            }

            setTables(tables.filter(table => table._id !== id));
        } catch (error) {
            console.error('Error deleting table:', error);
            }
    };

        
    return (
        <div className="absolute top-52 w-auto m-1 bg-green-300 bg-opacity-65 p-1 px-2 border-4 rounded-2xl border-orange-800" >
            <h1 className="text-2xl text-center text-emerald-800 py-3 p-1 m-2 border-4 border-emerald-800 rounded-3xl bg-orange-400">Lobby : choisissez une table </h1>
        
            {tables.map((table)=>(
                <ShowTable key={table._id} {...table} onDelete={()=> handleDeleteTable(table._id)}/>
            ))}
{/* faire simplement 2 boutons jouter table 4 ou 5 j  */}
            <DialogProvider>
                <DialogTrigger>
                <button className="btn btn-primary text-2xl m-3" disabled={false} >
                        Créer une table  
                    </button> 
                </DialogTrigger>
                <DialogContent>
                    <div className="border-2 bg-emerald-200 border-emerald-400 p-5">
                        <h1 className="text-lg font-bold text-black mx-3">Choisir nombre de joueurs</h1>
                        <div className="flex  justify-center m-4">
                            <BtnSetPlayers name={"4 joueurs"} onClick={(e) =>  handleCreateTable(e, e.target.value)} value = {4} />
                            <BtnSetPlayers name={"5 joueurs"} onClick={(e) => handleCreateTable(e, e.target.value)} value = {5}/>

                        </div>
                    </div>
                    <DialogClose>
                        <button className="absolute top-0 right-0 m-2 text-red-600">
                            <X size={32}/> 
                        </button>
                    </DialogClose>
                </DialogContent>
            </DialogProvider>

        </div>
    );
}

// ici props est un élément table de tables
const ShowTable = (props) =>{
   
    return (

            <div className="flex bg-emerald-200 border-2 items-center border-black  px-3 ">
                <table className="table text-2xl ">
                <tbody>
                {/* row 1 */}
                <tr>
                    <th className={ "text-md" + props.completed? "text-green-600" : "text-red-100"}> {props.completed? "Table fermée" : "Table ouverte"}</th>
                    <td>{props.nbPlyrs} / {props.nbPlyrsMax} joueurs </td>
                </tr>
                </tbody>
                </table>
                <button onClick={()=> {
                        props.onJoin?.()
                    }} 
                    className='btn btn-neutral btn-md text-xl m-2' >
                        Rejoindre
                    </button>
                    <button className="btn btn-circle border-4 border-red-800 text-red-800" 
                    onClick={props.onDelete}> 
                    <X size={36}/> </button>
                
            
            </div>

    

        
    )
}

const BtnSetPlayers = (props)=>{
    return (
        <button className="btn btn-circle btn-lg bg-yellow-400 m-3 text-md px-16 border-4" onClick={props.onClick} value={props.value}>
            {props.name}
        </button>
    )
}