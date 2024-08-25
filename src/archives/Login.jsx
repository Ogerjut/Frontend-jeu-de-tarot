import { useState } from "react";
import { User, Lock } from "lucide-react";

export default function Login() {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');

    const handleUserChange = (e) => setUser(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);

    const handleSubmit = async (e) => {
        e.preventDefault()
        const response = await fetch('http://localhost:3000/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ user, password }),
        });

        const data = await response.json();
        console.log(data);
    }

    return (
        <div className="card card-compact w-96 items-center border-2 bg-emerald-200 border-emerald-400">
            <h1 className="card-title text-3xl text-orange-600 m-1">Connexion</h1>
            <form className='card-body items-center' action='submit' onSubmit={handleSubmit}>
                <div className="flex mb-4">
                    <User size={24} className="mr-2 text-orange-600" />
                    <input 
                        className="text text-2xl flex-grow"
                        value={user}
                        type="text" 
                        placeholder="Pseudo"
                        onChange={handleUserChange}
                        required
                    />
                </div>
                <div className="flex items-center">
                    <Lock size={24} className="mr-2 text-orange-600" />
                    <input
                        className="text text-2xl flex-grow"
                        value={password}
                        type="password" 
                        placeholder="Mot de passe"
                        onChange={handlePasswordChange}
                        required
                    />
                </div>
            <button className="btn bg-orange-500 btn-sm w-24 text-xl border-orange-700 m-2" type="submit">
                    Valider
             </button>    
            </form>
            
        </div>
    );
}
