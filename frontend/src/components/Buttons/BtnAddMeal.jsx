import { useState } from 'react'
import Modal from 'react-modal'
import { AddMeal } from '../Modals/AddMeal'

export const BtnAddMeal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const customStyles = {
    content: {
      margin: '5rem auto 0 auto',
      maxWidth: '56rem',
      borderRadius: '1rem',
      zIndex: '20'
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
        Añadir platillo
      </button>
      <div>
        <Modal isOpen={isModalOpen} onRequestClose={closeModal} style={customStyles}
        // className='max-w-2xl mx-auto text-black bg-white border px-5 py-14 md:p-10 rounded-xl my-40'
        >
          <AddMeal closeModal={closeModal} />
        </Modal>
      </div>
    </>
  )
}
