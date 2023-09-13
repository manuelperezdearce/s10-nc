import React, { useState } from 'react'
import { IoHeartOutline, IoCartOutline, IoSettingsOutline } from 'react-icons/io5'
import './cardMenu.css'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addProductLike } from '../../features/productLike/productLikeSlice'
import { addItemToCar, removeItemFromCar } from '../../features/counter/carSlice'

const CardMenu = ({ object }) => {
  const dispatch = useDispatch()
  const role = useSelector((state) => state.auth2?.user?.role_id)
  const car = useSelector((state) => state?.car?.car)
  const [ishover, setIshover] = useState(false)
  const [activaHeart, setActivaHeart] = useState(false)
  const navigate = useNavigate()
  const [addToCar, setAddTocar] = useState(false)

  const productConLike = car.some((item) => item.meal_id === object.id)
  console.log(productConLike)
  const handleNavigate = (e) => {
    e.preventDefault()
    e.stopPropagation()
    console.log(e)

    navigate(`/detalle/${object.id}`)
  }

  const handleCarClick = (e) => {
    e.stopPropagation()
    console.log('add car')
    setAddTocar(!addToCar)
    console.log(addToCar)

    const { id } = object
    if (!addToCar === true) {
      dispatch(addItemToCar({ meal_id: id, quantity: 1 }))
    } else {
      dispatch(removeItemFromCar({ meal_id: id, quantity: 1 }))
    }
  }

  const handleFavoriteClick = (e) => {
    e.stopPropagation()
    // console.log('add favourite')
    if (!activaHeart === true) {
      dispatch(addProductLike(object))
      setActivaHeart(true)
    } else {
      dispatch(addProductLike(object))
      setActivaHeart(false)
    }
  }

  const handleSettingsClick = (e) => {
    e.stopPropagation()
    // console.log('add settings')
  }

  const handleMoueEnter = () => {
    // console.log('DENTRO de mouse enter')
    setIshover(true)
  }

  const handleMoueLeave = () => {
    // console.log('FUERA de mouse leave')
    setIshover(false)
  }

  return (
    <div
      onMouseEnter={handleMoueEnter} onMouseLeave={handleMoueLeave}
      className='cardCustomer whiteCustom cursor-pointer w-[250px] h-[300px] rounded-md overflow-hidden z-0' style={{ boxShadow: '4px 4px 3px #c4c4c4,-3px -3px 3px #efffe8' }}
    >
      <figure className={`customContent relative w-[100%] h-3/4 overflow-hidden box-border rounded-[4px] ${ishover ? '' : 'hovered'}`} onClick={handleNavigate}>
        <span className='absolute bottom-1 left-1 font-parrafo font-[400] text-marronCustom text-xs bg-white bg-opacity-40 shadow-md backdrop-blur-sm backdrop-filter border rounded-[4px] py-1 px-2'>Restaurant #{object?.restaurant_id}</span>
        <img className='w-[100%] h-[100%] object-cover p-0' src={`${object?.image}`} alt={`${object?.name}`} />

        {/* botonera  carrito y favoritos */}
        <section className={`ContentButtonCardMenu absolute w-9 h-auto flex flex-col justify-center items-center content-center gap-2 z-10 botoneraCard transition-all duration-100 ease-in-out ${ishover ? 'visible top-2 right-1 opacity-1' : 'invicible top-2 -right-10 opacity-0'}`}>
          <button
            onClick={handleCarClick}
            className={`buttonCardMenu  flex w-8 h-8 text-[1.4rem] text-green-500 justify-center items-center rounded-md transition-all duration-150 ease-linear ${addToCar || productConLike ? 'text-red-600' : 'text-green-500'}`}
          >
            <IoCartOutline />
          </button>
          <button
            onClick={handleFavoriteClick}
            className={`buttonCardMenu flex w-8 h-8 text-[1.4rem]  justify-center items-center rounded-md transition-all duration-150 ease-linear ${activaHeart ? 'text-red-500 bg-white opacity-1' : 'text-green-500'}`}
          >
            <IoHeartOutline />
          </button>
          {
            role === 2 &&
              <button
                onClick={handleSettingsClick}
                className='buttonCardMenu flex w-8 h-8 text-[1.4rem] text-green-500 justify-center items-center  rounded-md transition-all duration-150 ease-linear'
              >
                <IoSettingsOutline />
              </button>
          }
        </section>
      </figure>
      <section className=' w-[100%] h-1/4 py-2 px-2'>
        <p className='flex flex-col justify-start items-start  gap-2'>
          <span className='text-sm font-light text-black'>{object?.name}</span>
          <span className='text-lg font-medium text-green-500'>${object?.price}</span>
        </p>
      </section>
    </div>
  )
}

export default CardMenu
