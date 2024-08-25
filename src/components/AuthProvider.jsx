import { useContext, useState } from "react";
import { createContext } from "react";


const AuthContext = createContext()

export const useAuthContext = () => {
    return useContext(AuthContext);
}

export const AuthProvider = ({children}) =>{
    const [isLogin, setIsLogin] = useState(false)
    const [account, setAccount] = useState({})
    // const [] = useState()

    const login = async (e, user, password) => {
        e.preventDefault()
        const requete = await fetch('http://localhost:3000/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ user, password }),
        });

        const response = await requete.json();

        setIsLogin(true)
        setAccount(response.user)
        console.log('Login attempt:', { user, password });
        console.log(response.user)
      
        

        
    
    }
// prendre un 2eme mdp pour plus tard
    const register = async (e,  newUser, email, password) => {
        e.preventDefault()
        const response = await fetch('http://localhost:3000/auth/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ newUser, email, password }),
        });
        
        const data = await response.json();
        
        console.log(data.account);
    }

    const logout = () => {
        setIsLogin(false)
    }
    

    return (
        <AuthContext.Provider
            value={{
                isLogin,
                login,
                logout,
                register,
                account,
            }}>
            {children}
        </AuthContext.Provider>
    )
}