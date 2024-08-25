import { useAuthContext } from "../AuthProvider"
import InfoBox from "./InfoBox";
import Lobby from "./Lobby";


export default function Main (){
    const {isLogin, account} = useAuthContext();


    return (
        <main className="border-2 m-2 relative flex flex-col items-center ">
            <h1 className="text-3xl m-12"> {isLogin? `Bon jeu ${account.pseudo}`
            :"Bienvenue sur le site de tarot en ligne multijoueurs a venir "
            }</h1>
            
            <InfoBox/>
            
            <div className="w-full flex justify-center">
                <img className=" my-8 w-3/4 max-w-xl h-auto" src="../../images/table_tarot.png" alt="table jeu" />
                {isLogin && <Lobby/>}
            </div>
            
           

            

        </main>
    )
}