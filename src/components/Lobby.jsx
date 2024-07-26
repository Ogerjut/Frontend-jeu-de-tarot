// Lobby : joueur y selectionne une table de 4 ou 5j et rejoins la salle d'attente ou lance la partie
// composants : Texte explicatif, liste tables (table 1 : 3/4 j ), bouton rejoindre / créer partie

import { useState } from "react";


export default function Lobby() {

    const [tables, setTables] = useState([
        {
        name : "Table 1",
        id : 1,
        nbPlayer : 3, 
        nbPlayerMax : 4, 
        completed : false
        }, 
        {
        name : "Table 2",
        id : 2, 
        nbPlayer : 0, 
        nbPlayerMax : 5, 
        completed : false
        }
    ])
        
    return (
        <div className="p-5 bg-orange-100 text-center m-2 text-3xl">
            <h1 className="text-5xl  text-emerald-800 py-5 border-4 items-center border-emerald-800 rounded-3xl bg-orange-400">Lobby : choisissez une table </h1>
            <p className="text-4xl text-orange-900 py-5"> </p>
        
            {tables.map((table)=>(
                <ShowTable key={table.id} {...table}/>
            ))}
            <button className="btn btn-disabled text-2xl m-3" >
                Créer une table  
            </button>        
        </div>
    );
}

// ici props est un élément table de tables
const ShowTable = (props) =>{

    return (
        <div className=" relative overflow-x-auto bg-emerald-200 mx-80 border-2 border-black -my-1 px-12 ">
            <table className="table text-2xl ">
            <tbody>
            {/* row 1 */}
            <tr>
                <th className="">{props.name}</th>
                <td>{props.nbPlayer} / {props.nbPlayerMax} joueurs </td>
            </tr>
             </tbody>
            </table>
            
            <button onClick={()=> {
                props.onJoin?.()
            }} 
            className='btn btn-neutral btn-sm absolute bottom-0 right-0 m-3 text-xl ' >
                Rejoindre
            </button>
           
        </div>
    )
}

