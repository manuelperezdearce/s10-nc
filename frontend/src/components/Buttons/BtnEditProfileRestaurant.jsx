import { AiFillEdit } from 'react-icons/ai'
import Modal from 'react-modal'
import ModalEditRestaurantProfileInfo from '../Modals/ModalEditRestaurantProfileInfo'
import { useState } from 'react'
Modal.setAppElement('#root')

const customStyles = {
<<<<<<< HEAD
    content: {
        margin: '5rem auto 0 auto',
        maxWidth: '56rem',
        borderRadius: '1rem',
        zIndex: '20'
    },
  };


export default function BtnEditProfileRestaurant({data}) {
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
            <div className="">
                <Modal isOpen={modal} onRequestClose={closeModal} style={customStyles}>
                    <ModalEditRestaurantProfileInfo closeModal={closeModal} data={data}/>
                </Modal>
            </div>
        </>
    )
=======
  content: {
    margin: '5rem auto 0 auto',
    maxWidth: '56rem',
    borderRadius: '1rem',
    zIndex: '20'
  }
}

export default function BtnEditProfileRestaurant () {
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
        <div className='text-xl'><AiFillEdit /></div>
        Editar
      </button>
      <div className=''>
        <Modal isOpen={modal} onRequestClose={closeModal} style={customStyles}>
          <ModalEditRestaurantProfileInfo closeModal={closeModal} />
        </Modal>
      </div>
    </>
  )
>>>>>>> 83adc519d8fa905f07eb92c4024219f2fffe84db
}
