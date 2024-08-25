import { AtSign, KeyRound, UserPen } from "lucide-react"
import { useState } from "react"

export default function Signup () {
    const [newUser, setNewUser] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [passwordTest, setPasswordTest] = useState('')

    const handleNewUserChange = (e) => setNewUser(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);
    const handleEmailChange = (e) => setEmail(e.target.value)
    const handlePasswordTestChange = (e) => setPasswordTest(e.target.value);

    const handleSubmit = async (e) => {
        e.preventDefault()
        const response = await fetch('http://localhost:3000/auth/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ newUser, email, password }),
        });
        const data = await response.json();
        console.log(data);
    }
    return (
        <div className="card card-compact card-bordered w-96 items-center border-2 bg-emerald-200 border-emerald-400" >
            <h1 className="card-title text text-3xl  text-orange-600 m-1"> Inscription </h1>
            <form className='card-body items-center' action="submit " onSubmit={(e)=>{handleSubmit(e)}}>
            
            <div className="flex items-center">
            <UserPen size={24} className="mr-2 text-orange-600" />
            <input 
                className="text text-2xl"
                value={newUser}
                type="text" 
                placeholder = "Pseudo"
                onChange={handleNewUserChange}
            />

            </div>
            <div className="flex items-center">
            <AtSign size={24} className="mr-2 text-orange-600"/>
              <input
                className="text text-2xl"
                value={email}
                type="text" 
                placeholder = "Email"
                onChange={handleEmailChange}
            />
            </div>
            <div className="flex items-center">
            <KeyRound size={24} className="mr-2 text-orange-600"/>
                        <input
                            className="text text-2xl"
                            value={password}
                            type="password" 
                            placeholder = "Mot de passe"
                            onChange={handlePasswordChange}
                        />

            </div>
            <div className="flex items-center">
            <KeyRound size={24} className="mr-2 text-orange-600"/>
            <input
                className="text text-2xl"
                value={passwordTest}
                type="password" 
                placeholder = "Resaisir le mot de passe"
                onChange={handlePasswordTestChange}
            />
            </div>
            <button className=" card-cations btn bg-orange-500 m-2 btn-sm w-24 text text-xl border-orange-700"  type="submit">
                Valider

            </button>
            </form>
            
        </div>
    )
}