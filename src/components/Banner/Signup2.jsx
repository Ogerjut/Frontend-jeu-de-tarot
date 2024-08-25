import { AtSign, Database, KeyRound, UserPen, X } from "lucide-react";
import { useState } from "react";
import { DialogProvider, DialogTrigger, DialogContent, DialogClose } from "../DialogProvider";

import { useAuthContext } from "../AuthProvider";

export default function Signup2 () {
    const [newUser, setNewUser] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [passwordTest, setPasswordTest] = useState('')

    const handleNewUserChange = (e) => setNewUser(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);
    const handleEmailChange = (e) => setEmail(e.target.value)
    const handlePasswordTestChange = (e) => setPasswordTest(e.target.value);

    const {register} = useAuthContext()

    

    return (
        <DialogProvider>
            <DialogTrigger>
                <button className="btn text-3xl btn-primary btn-lg rounded-2xl">
                    <Database size={32}/> S'inscrire
                    </button>
            </DialogTrigger>
            <DialogContent>
                <div className="border-2 items-center bg-emerald-200 border-emerald-400 p-5">
                <h1 className="card-title text text-3xl  text-orange-600 m-1"> 
                Inscription </h1>
                <form className='card-body items-center' action="submit " onSubmit={(e)=>{register(e, newUser, email, password)}}>
                
                <div className="flex items-center">
                <UserPen size={32} className="mr-2 text-orange-600" />
                <input 
                    className="text text-2xl"
                    value={newUser}
                    type="text" 
                    placeholder = "Pseudo"
                    onChange={(e)=>handleNewUserChange(e)}
                />

                </div>
                <div className="flex items-center">
                <AtSign size={32} className="mr-2 text-orange-600"/>
                <input
                    className="text text-2xl"
                    value={email}
                    type="text" 
                    placeholder = "Email"
                    onChange={(e)=>handleEmailChange(e)}
                    
                />
                </div>
                <div className="flex items-center">
                <KeyRound size={32} className="mr-2 text-orange-600"/>
                    <input
                        className="text text-2xl"
                        value={password}
                        placeholder = "Mot de passe"
                        onChange={(e)=>handlePasswordChange(e)}
                    />

                </div>
                <div className="flex items-center">
                <KeyRound size={30} className="mr-2 text-orange-600"/>
                <input
                    className="text text-2xl"
                    value={passwordTest}
                    placeholder = "Resaisir le mot de passe"
                    onChange={(e)=>handlePasswordTestChange(e)}
                   
                />
                </div>
                <button className=" card-cations btn bg-orange-500 m-2 btn-sm w-24 text text-xl border-orange-700"  type="submit">
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