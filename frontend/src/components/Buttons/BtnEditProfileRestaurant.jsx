import { AiFillEdit } from "react-icons/ai"
import Modal from 'react-modal'
Modal.setAppElement('#root');
import ModalEditRestaurantProfileInfo from "../Modals/ModalEditRestaurantProfileInfo"
import { useState } from "react";




export default function BtnEditProfileRestaurant() {
    const [modal, setModal] = useState(false)
    const openModal = () => {
        setModal(true)
    }
    const closeModal = () => {
        setModal(false)
    }
    

    return (
        <>
            <button 
                className='bg-greenCustom hover:bg-greenCustom2 duration-75 text-white font-bold flex items-center px-6 py-2 text-base gap-x-1 rounded-md'
                onClick={openModal}
            >
                <div className="text-xl"><AiFillEdit/></div>
                Editar
            </button>
            <div>
                <Modal isOpen={modal} onRequestClose={closeModal} className='my-16 md:mt-40 max-w-4xl mx-5 lg:mx-auto'>
                    <ModalEditRestaurantProfileInfo closeModal={closeModal}/>
                </Modal>
            </div>
        </>
    )
}
