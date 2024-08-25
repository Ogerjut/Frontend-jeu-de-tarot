import { Info, X } from "lucide-react";
import { DialogProvider, DialogTrigger, DialogContent, DialogClose } from "./DialogProvider";


export default function Footer () {

    return (

        <footer>
            <hr className="border-2 m-2"/>

        <DialogProvider>
                    <DialogTrigger>
                        <button className="btn text-lg btn-primary btn-sm rounded-2xl mx-8">
                            <Info size={24}/> Règles du jeu</button>
                    </DialogTrigger>
                    <DialogContent>
                        <div className="border-2 bg-emerald-200 border-emerald-400 p-5">
                            <h1> Règles du jeu</h1>
                            <p> Retrouvez les règles officielles du jeu de tarot au lien suivant : 
                                <a href="https://www.fftarot.fr/assets/documents/Reglement%20FFT.pdf"> https://www.fftarot.fr/assets/documents/Reglement%20FFT.pdf</a>
                            </p>
                                    
                        </div>
                        <DialogClose>
                            <button className="absolute top-0 right-0 m-2 text-red-600">
                                <X size={28}/> 
                            </button>
                        </DialogClose>
                    </DialogContent>
                </DialogProvider>
                

        </footer>
       
        
    )
}