import { useState } from 'react'
import { AiFillTag } from 'react-icons/ai'
import Select from './Select'

const SelectDataConstructor = [
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
  const Selects = SelectDataConstructor
  let count = -1
  const [filteredArray, setFilteredArray] = useState(OrderListArray)

  const [selectedIndex, setSelectedIndex] = useState(['0', '1'])
  const HandleSelect = (event) => {
    console.log(event.target.value, event.target.name)
    event.target.name === 'Precio' && setSelectedIndex([event.target.value, '0'])
    event.target.name === 'Fecha' && setSelectedIndex(['0', event.target.value])
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
          count++

          return (
            <Select
              name={label}
              key={label}
              label={label}
              options={options}
              HandleSelect={HandleSelect}
              selectedIndex={selectedIndex[count]}
              filteredArray={filteredArray}
              setFilteredArray={setFilteredArray}
            />
          )
        })
      }
      </article>
    </section>
  )
}
