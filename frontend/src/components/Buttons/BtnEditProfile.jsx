import { useState } from 'react'
import Modal from 'react-modal'
import { ModalEditCustomerInfo } from '../Modals/ModalEditCustomerInfo'
import { FaEdit } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import ModalEditRestaurantProfileInfo from '../Modals/ModalEditRestaurantProfileInfo'

export const BtnEditProfile = ({data}) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { user } = useSelector(state => state?.auth2)

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
        className='bg-greenCustom hover:bg-greenCustom2 duration-75 text-white flex items-center px-6 py-2 text-xl gap-x-1 rounded-md ms-auto '
      >
        <FaEdit className='text-xl' />
        Editar
      </button>

      <div>
        <Modal
          isOpen={isModalOpen} onRequestClose={closeModal} style={customStyles}
        >
          {
            user.role_id === 1
              ? <ModalEditCustomerInfo closeModal={closeModal} data={data} user={user} />
              : <ModalEditRestaurantProfileInfo closeModal={closeModal} data={data} id={data.id} />
          }
        </Modal>
      </div>
    </>
  )
}
