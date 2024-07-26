import HomePageNavBar from "./components/HomePageNavBar";
import accueilTarot from "./assets/accueil_tarot.jpg"


import { useState } from "react";


export default function App () {

    return (
    <div className="relative bg-emerald-100 px-12 p-2">
        <header>  
        <h1 className="text-6xl absolute bg-sky-200 bg-opacity-80 my-6 px-10 m-2 rounded-3xl text-orange-700 py-8 border-8 border-orange-600">Jeu de tarot </h1>
        <img className="h-64 w-full object-cover border-black border-2 rounded-md" src={accueilTarot} alt='image accueil' />
        
        {/* si user connecté : afficher Lobby et LobbyNavBar */}
        <HomePageNavBar />
        {/* <LobbyNavBar/> */}
        {/* <Lobby/> */}
        </header>
        

        
    </div>
    )    
}



