import OrderCard from '../../OrderCard/OrderCard'
import OrderFilterSection from './OrderFilterSection'
export default function OrderList ({ OrderListArray, setOrderListArray }) {
  return (
    <>
      <OrderFilterSection
        OrderListArray={OrderListArray}
        setOrderListArray={setOrderListArray}
      />
      <section className='w-[90%] md:w-[80%] lg:w-[90%] max-w-screen-lg  flex flex-wrap justify-start py-10 '>
        {
      OrderListArray.map((item) => {
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
}
      </section>
    </>

  )
}
