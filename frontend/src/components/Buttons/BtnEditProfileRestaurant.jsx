import { AiFillEdit } from "react-icons/ai"

export default function BtnEditProfileRestaurant() {

    const handleEdit = (e) => {
        e.preventDefault()

        console.log('Editando')
    }

    return (
        <button 
            // className='py-2 bg-greenCustom text-white font-bold rounded-md flex items-center'
            className='bg-greenCustom hover:bg-greenCustom2 duration-75 text-white font-bold flex items-center px-6 py-2 text-base gap-x-1 rounded-md'
            onClick={handleEdit}
        >
            <div className="text-xl"><AiFillEdit/></div>
            Editar
        </button>
    )
}
