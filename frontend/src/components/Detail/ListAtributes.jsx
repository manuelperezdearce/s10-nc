import React from 'react'
import { IoCheckmarkSharp, IoCloseSharp } from 'react-icons/io5'
import { useSelector } from 'react-redux'

const ListAtributes = () => {
  const product = useSelector((state) => state.foods?.productByid)

  return (
    <div className='clasesFood flex flex-col justify-start items-start gap-3'>
      <h2 className='text-3xl font-bold text-marronCustom text-left'>{product?.name}</h2>
      <ul className='listAtributes flez flex flex-row justify-start items-center gap-3 '>
        <li className='itemListAtr flex justify-start items-center gap-1 text-marronCustom font-normal text-base'>
          {
            product?.is_vegan
              ? (
                <IoCheckmarkSharp style={{ color: 'green', fontSize: '1.2rem' }} />
                )
              : (
                <IoCloseSharp style={{ color: 'red', fontSize: '1.2rem' }} />
                )
          }
          Vegano
        </li>
        <li className='itemListAtr flex justify-start items-center gap-1 text-marronCustom font-normal text-base'>
          {
            product?.is_proteinplus
              ? (
                <IoCheckmarkSharp style={{ color: 'green', fontSize: '1.2rem' }} />
                )
              : (
                <IoCloseSharp style={{ color: 'red', fontSize: '1.2rem' }} />
                )
          }
          Gluten
        </li>
        <li className='itemListAtr flex justify-start items-center gap-1 text-marronCustom font-normal text-base'>
          {
            product?.is_glutenfree
              ? (
                <IoCheckmarkSharp style={{ color: 'green', fontSize: '1.2rem' }} />
                )
              : (
                <IoCloseSharp style={{ color: 'red', fontSize: '1.2rem' }} />
                )
          }
          Proteinas
        </li>
      </ul>
    </div>
  )
}

export default ListAtributes
