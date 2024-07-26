import { PlugZap, Database, Info} from "lucide-react";
import { useState } from "react";
import BtnNavBar from "./BtnNavBar";
import Login from "./Login";
import Signup from "./Signup";
import Rules from "./Rules";


export default function HomePageNavBar () {
    const [activeComponent, setActiveComponent] = useState(null)
    const [btns, setBtns] = useState([
        {
            id : 1,
            name : "Se connecter",
            icone : <PlugZap size={32} />,
            component : "login"
        },
        {
            id : 2,
            name : "S'inscrire",
            icone : <Database size={32} />,
            component : "signup",
        },
        {
            id : 3,
            name : "Règles du jeu",
            icone : <Info size={32} />,
            component : "rules",
        },
    ])

    const showComponent =  (componentName) => {
        setActiveComponent(prevComponent => prevComponent === componentName ? null : componentName);
    }


    return (
        <div>
            <ul className="menu menu-horizontal absolute top-0 right-1 bg-sky-200  border-emerald-800 border-4 rounded-xl">
            {btns.map((btn)=> (
                        <BtnNavBar 
                            key={btn.id}
                            btnInfo = {btn}
                            onClick={()=>showComponent(btn.component)}/>
            ))}
            </ul>
            <div className="absolute top-16 right-72"> 
                {activeComponent === "login" && <Login /> }
                {activeComponent === "signup" && <Signup />}
            </div>
            {activeComponent === "rules" && <Rules/> }
        </div>)

}

