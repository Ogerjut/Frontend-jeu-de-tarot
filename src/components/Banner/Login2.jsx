import {Lock, PlugZap, User, X } from "lucide-react";
import { useState } from "react";
import { DialogProvider, DialogTrigger, DialogContent, DialogClose } from "../DialogProvider";
import { useAuthContext } from "../AuthProvider";


export default function Login2 ({}){
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');

    const {login} = useAuthContext();

    const handleUserChange = (e) => setUser(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);



    return (
        <DialogProvider>
        <DialogTrigger>
            <button className="btn text-3xl btn-primary btn-lg rounded-2xl m-2"><PlugZap size={32}/> Se connecter</button>
        </DialogTrigger>
        <DialogContent>
            <div className="border-2 bg-emerald-200 border-emerald-400 p-5">
                <h1 className="text-4xl text-orange-600 p-1 m-2">Connexion</h1>
                <form className=' items-center' action='submit' onSubmit={(e)=> login(e, user, password)}>
                    <div className="flex mb-3">
                        <User size={28} className="mr-2 text-orange-600" />
                        <input 
                            className="text text-2xl flex-grow"
                            value = {user}
                            type="text" 
                            placeholder="Pseudo"
                            onChange={(e)=> handleUserChange(e)}
                            required
                        />
                    </div>
                    <div className="flex items-center">
                        <Lock size={28} className="mr-2 text-orange-600" />
                        <input
                            className="text text-2xl flex-grow"
                            type = "password"
                            value = {password}
                            placeholder="Mot de passe"
                            onChange={(e)=> handlePasswordChange(e)}
                            
                            required
                        />
                    </div>
                <button className="btn bg-orange-500 btn-sm w-24 text-xl border-orange-700 m-3" type="submit">
                        Valider
                </button>    
                </form> 
            </div>
            <DialogClose>
                <button className="absolute top-0 right-0 m-2 text-red-600">
                    <X size={28}/> 
                </button>
            </DialogClose>
        </DialogContent>
    </DialogProvider>

    )
}