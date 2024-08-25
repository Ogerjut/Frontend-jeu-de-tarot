import { useAuthContext } from "../AuthProvider"

export default function Logout () {
    const {logout} = useAuthContext()

    return (
        <button className="btn btn-error" onClick={logout}>
            Se déconnecter
        </button>
    )
}