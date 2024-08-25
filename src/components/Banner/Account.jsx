import { Info, X } from "lucide-react";
import { useAuthContext } from "../AuthProvider";
import { DialogProvider, DialogTrigger, DialogContent, DialogClose } from "../DialogProvider";

export default function Account () {
    const {account} = useAuthContext()

    return (
        <DialogProvider>
        <DialogTrigger>
            <button className="btn text-xl btn-primary btn-md rounded-2xl m-2"><Info size={32}/> Mon compte </button>
        </DialogTrigger>
        <DialogContent>
            <div className="border-2 bg-emerald-200 border-emerald-400 p-5">
                <h1 className="text-2xl text-orange-600 p-1 m-2"> User : {account.pseudo} </h1>
                 
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