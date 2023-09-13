import { Link } from 'react-router-dom'
import OrderCard from '../../OrderCard/OrderCard'
import OrderFilterSection from './OrderFilterSection'
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function OrderList ({
  userID
}) {
  const [OrderListArray, setOrderListArray] = useState([])
  const getOrders = async () => {
    if (userID !== undefined) {
      const resp = await axios.get(`https://green-eats.onrender.com/order/customer/${userID}`)
        .catch((error) => {
          console.log(error)
        })
      setOrderListArray(resp?.data)
    }
  }

  useEffect(() => {
    getOrders()
  }, [userID])

  return (
    <>
      <OrderFilterSection
        OrderListArray={OrderListArray}
        setOrderListArray={setOrderListArray}
      />
      <section className='w-[90%] md:w-[80%] lg:w-[90%] max-w-screen-lg  flex flex-wrap justify-start py-10 '>
        {
     OrderListArray?.length > 0
       ? OrderListArray.map((item) => {
         return (

           <OrderCard
             key={item.orderID}
             createdAt={item.createdAt}
             totalPrice={item.totalPrice}
             totalQuantity={item.totalQuantity}
             orderID={item.orderID}
           />

         )
       })
       : <span className='m-auto flex flex-col gap-4 font-titulo max-w-xl  text-blackCustom font-semibold text-2xl'>
         <p className=''>Ups! No hay información disponible, ya realizaste tu primer pedido?<Link to='/menus' className='text-greenCustom m-auto'> Prueba aquí</Link></p>
       </span>
}
      </section>
    </>

  )
}
