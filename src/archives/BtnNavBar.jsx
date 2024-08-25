

export default function BtnNavBar ({btnInfo, onClick}) {
    // console.log({"BtnNav : ": onClick})
    return (
    <li className="text-3xl border-l-2 border-r-2 border-gray-500" >
        <button onClick={onClick} className="flex items-center gap-2 text-orange-900">
            {btnInfo.icone} {btnInfo.name}
        </button>
    </li>
    )
}