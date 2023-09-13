import { useState } from 'react'
import Modal from 'react-modal'
import { ModalAddMeal } from '../Modals/ModalAddMeal'
import { MdOutlineAddCircle } from 'react-icons/md'

export const BtnAddMeal = ({id}) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const customStyles = {
    content: {
      marginTop: '8%',
      marginInline: 'auto',
      maxWidth: '56rem',
      borderRadius: '1rem',
      zIndex: '20',
      inset: '30px 10px'
    }
  }

  const openModal = () => {
    setIsModalOpen(true)
  }
  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <>
      <button
        onClick={openModal}
        className='bg-greenCustom hover:bg-greenCustom2 duration-75 text-white font-bold flex items-center px-6 py-2 text-base gap-x-1 rounded-md'
      >
        <MdOutlineAddCircle className='text-xl' />
        Añadir platillo
      </button>
      <div>
        <Modal
          isOpen={isModalOpen} onRequestClose={closeModal} style={customStyles}
        >
          <ModalAddMeal closeModal={closeModal} id={id}/>
        </Modal>
      </div>
    </>
  )
}
