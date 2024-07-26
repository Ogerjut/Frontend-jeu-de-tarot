import { CircleUser, Info, Unplug} from "lucide-react";

export default function LobbyNavBar () {

    const handleDisconnect = () => {
        // Envoyer une requête au backend pour se connecter
        fetch('/api/disconnect', { method: 'POST' })
            .then(response => response.json())
            .then(data => {
                // Traiter la réponse
                console.log(data);
            })
            .catch(error => {
                // Gérer l'erreur
                console.error('Erreur:', error);
            });
    };

    const handleAccount = () => {
        // Envoyer une requête au backend pour s'inscrire
        fetch('/api/account', { method: 'POST' })
            .then(response => response.json())
            .then(data => {
                // Traiter la réponse
                console.log(data);
            })
            .catch(error => {
                // Gérer l'erreur
                console.error('Erreur:', error);
            });
    };

    return (
        <div>

<ul className="menu menu-horizontal absolute top-0 right-1 bg-sky-200  border-emerald-800 border-4 rounded-xl gap-1">
    <li className="text-3xl border-r-2 border-gray-500">
        <button onClick={handleDisconnect} className="flex items-center gap-2 text-orange-900">
            <Unplug size={36}/> Se déconnecter
        </button>
    </li>
    <li className="text-3xl">
        <button onClick={handleAccount} className="flex items-center gap-2 text-orange-900">
            <CircleUser size={36}/> Mon compte 
        </button>
    </li>
</ul>
        </div>)

}