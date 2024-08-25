import ModAuth from "./ModAuth";


export default function Banner ({}) {

    return (
        <div className="">
        <img className="h-64 w-full object-cover border-black border-2 rounded-md" src="../../public/images/accueil_tarot.jpg" alt='image accueil' />
        <h1 className="absolute top-0 text-6xl bg-sky-200 bg-opacity-80 my-6 px-10 m-2 rounded-3xl text-orange-700 py-8 border-8 border-orange-600">Jeu de tarot </h1>
        <div className="absolute top-0 right-0 px-10">
            <ModAuth />

        </div>
        
        </div>
        
    )
}