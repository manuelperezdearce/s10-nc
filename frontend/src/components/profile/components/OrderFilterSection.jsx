import { AiFillTag } from 'react-icons/ai'
import Select from './Select'

const Data = [
  {
    label: 'Precio',
    options: [
      {
        value: '0',
        children: 'Seleccionar orden'

      },
      {
        value: '1',
        children: 'Ascendente'

      },
      {
        value: '2',
        children: 'Descendente'

      }
    ]
  },
  {
    label: 'Fecha',
    options: [
      {
        value: '0',
        children: 'Seleccionar orden'

      },
      {
        value: '1',
        children: 'Más recientes'

      },
      {
        value: '2',
        children: 'Menos recientes'

      }
    ]
  }
]

export default function OrderFilterSection ({ OrderListArray, setOrderListArray }) {
  const Selects = Data

  const HandleSelect = (event) => {
    if (event.target.name === 'Precio') {
      console.log(event.target.selectedIndex)
    }
    if (event.target.name === 'Fecha') {
      console.log(event.target.selectedIndex)
    }
  }

  return (
    <section className='flex flex-col  max-w-screen-lg text-blackCustom gap-5 w-[90%] md:w-[80%] lg:w-[90%] '>
      <article className='flex items-center  text-3xl sm:text-4xl'>
        <AiFillTag className='text-greenCustom' />
        <h3 className='font-bold'>Mis órdenes</h3>
      </article>
      <article className='flex gap-5 flex-wrap'>
        {
        Selects.map(({ label, options }) => {
          return (
            <Select
              key={label}
              label={label}
              options={options}
              HandleSelect={HandleSelect}
            />
          )
        })
      }
      </article>
    </section>
  )
}
