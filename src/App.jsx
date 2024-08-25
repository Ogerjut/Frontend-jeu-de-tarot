
import { useState } from "react";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer";
import Main from "./components/main/Main";


export default function App () {

    return (

    <div className="flex  min-h-screen flex-col px-12 ">
        
        <Banner />



        {/* si user connecté : afficher Lobby*/}
        {/* <Lobby/> */}

        <Main/>
    
        
       
        
        <Footer/>


   
    </div>

    )    
}

