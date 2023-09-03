import OrderCard from '../../OrderCard/OrderCard'

export default function OrderList () {
  return (
    <section className='w-[90%] md:w-[80%] lg:w-[90%] max-w-screen-lg  flex flex-wrap justify-start py-10'>
      {
      Array(8).fill(0).map((item) => {
        return (
          <OrderCard key={item} />

        )
      })
}
    </section>
  )
}
