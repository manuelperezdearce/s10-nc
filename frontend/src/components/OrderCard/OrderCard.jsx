import { FaCalendarAlt, FaShoppingCart, FaMoneyBill, FaSearch } from 'react-icons/fa'

const DATA_ORDER = {
  date: '23 de agosto 2023',
  totalPrice: '25000',
  totalQuantity: '4'
}

export default function OrderCard () {
  const ARRAY = Object.entries(DATA_ORDER)

  return (
    <article className='w-full  sm:w-1/2 md:w-1/2 lg:w-1/3 p-2'>
      <div role='button' className='flex flex-col text-xl text-blackCustom border p-4 rounded-2xl  [&_path]:text-greenCustom [&>div]:flex [&>div]:gap-2 [&>div]:items-center relative hover:shadow-md '>
        {
ARRAY.map((item) => {
  return (
    <div key={item}>

      {
      item[0] === 'date'
        ? <FaCalendarAlt />
        : item[0] === 'totalPrice'
          ? <FaMoneyBill />
          : <FaShoppingCart />
     }
      <p>
        {
  item[0] === 'totalPrice' ? `$ ${item[1]}` : `${item[1]}`
}
      </p>
    </div>
  )
})
}
        <div className='absolute end-4 bottom-4 text-base text-greenCustom'>
          <FaSearch />
          <p>ver más</p>
        </div>
      </div>

    </article>
  )
}
