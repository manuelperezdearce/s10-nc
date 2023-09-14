import React, { useState } from 'react'
import { IoHeartOutline, IoCartOutline, IoSettingsOutline } from 'react-icons/io5'
import './cardMenu.css'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addProductLike } from '../../features/productLike/productLikeSlice'
import { addItemToCar, removeItemFromCar } from '../../features/counter/carSlice'
import { loadAddToCarFromLocalStorage } from './loadAddToCarFromLocalStorage'

const CardMenu = ({ object }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const role = useSelector((state) => state.auth2?.user?.role_id)
  const car = useSelector((state) => state?.car?.car)
  const likeCar = useSelector((state) => state?.productsLikes?.productLikes)

  const [ishover, setIshover] = useState(false)
  const [activaHeart, setActivaHeart] = useState(false)
  const [addToCar, setAddToCar] = useState(loadAddToCarFromLocalStorage() || false)

  const productConLike = car.some((item) => item.meal_id === object.id)
  const productConHeart = likeCar.some((item) => item.id === object.id)

  const handleNavigate = (e) => {
    e.preventDefault()
    e.stopPropagation()

    navigate(`/detalle/${object.id}`)
  }

  // console.log('PRECIO ->', object?.price)

  const handleCarClick = (e) => {
    e.stopPropagation()
    setAddToCar((prevValue) => !prevValue) // Cambia el valor actual

    if (!addToCar === true) {
      dispatch(addItemToCar({ meal_id: object?.id, quantity: 1, price: object?.price }))
    } else {
      dispatch(removeItemFromCar({ meal_id: object?.id, quantity: 1 }))
    }
    const localStorage = window.localStorage
    // guardo el estado en el localStorage
    localStorage.setItem('addToCar', JSON.stringify(!addToCar))
  }

  const handleFavoriteClick = (e) => {
    e.stopPropagation()
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
  }

  const handleMoueEnter = () => {
    setIshover(true)
  }

  const handleMoueLeave = () => {
    setIshover(false)
  }

  return (
    <div
      onMouseEnter={handleMoueEnter} onMouseLeave={handleMoueLeave}
      className='cardCustomer whiteCustom cursor-pointer w-[250px] h-[300px] rounded-md overflow-hidden z-0' style={{ boxShadow: '4px 4px 3px #c4c4c4,-3px -3px 3px #efffe8' }}
    >
      <figure className={`customContent relative w-[100%] h-3/4 overflow-hidden box-border rounded-[4px] ${ishover ? '' : 'hovered'}`} onClick={handleNavigate}>
        <span className='absolute bottom-1 left-1 font-parrafo font-[400] text-marronCustom text-xs bg-white bg-opacity-40 shadow-md backdrop-blur-sm backdrop-filter border rounded-[4px] py-1 px-2'>{object?.Restaurant.name}</span>
        <img className='w-[100%] h-[100%] object-cover p-0' src={`${object?.image}`} alt={`${object?.name}`} />

        {/* botonera  carrito y favoritos */}
        <section className={`ContentButtonCardMenu absolute w-9 h-auto flex flex-col justify-center items-center content-center gap-2 z-10 botoneraCard transition-all duration-100 ease-in-out ${ishover ? 'visible top-2 right-1 opacity-1' : 'invicible top-2 -right-10 opacity-0'}`}>
          <button
            onClick={handleCarClick}
            className={`buttonCardMenu  flex w-8 h-8 text-[1.4rem] text-green-500 justify-center items-center rounded-md transition-all duration-150 ease-linear ${addToCar || productConLike ? 'text-white bg-green-500' : 'text-green-500 bg-white'}`}
          >
            <IoCartOutline />
          </button>
          <button
            onClick={handleFavoriteClick}
            className={`buttonCardMenu flex w-8 h-8 text-[1.4rem]  justify-center items-center rounded-md transition-all duration-150 ease-linear ${activaHeart || productConHeart ? 'text-white bg-green-500 opacity-1' : 'text-green-500 bg-white'}`}
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
