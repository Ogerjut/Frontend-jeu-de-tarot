// utiliser context pour savoir quel boutons afficher

import Login2 from "./Login2";
import Logout from "./Logout";
import Signup2 from "./Signup2";
import Account from "./Account";
import { useAuthContext } from "../AuthProvider";

export default function ModAuth ({}) {
    const {isLogin, account} = useAuthContext()


    return (
        <div className="flex flex-col items-center p-2" >
            {isLogin? <Logout/> : <Login2/>}
            {isLogin? <Account/> : <Signup2/>}
        </div>
    )
}