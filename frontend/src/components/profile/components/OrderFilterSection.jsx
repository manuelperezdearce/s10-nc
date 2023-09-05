import { useState } from 'react'
import { AiFillTag } from 'react-icons/ai'
import { OrderFilter } from '../../../methods/filters'
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
    // array temporal contiene objetos con posición y valor de ordenamiento
    const mapped = OrderListArray.sort(function(a, b) {
      if (a.totalPrice) {
        return -1;
      }
      if (a es mayor que b según criterio de ordenamiento) {
        return 1;
      }
      // a debe ser igual b
      return 0;})
    })
  }

  // array temporal contiene objetos con posición y valor de ordenamiento
  const mapped = OrderListArray.map(compare (el, i) {
    return { index: i, value: el.toLowerCase() }
  })

  // ordenando el array mapeado que contiene los valores reducidos
  function compare (a, b) {
    if (a.value > b.value) {
      return 1
    }
    if (a.value < b.value) {
      return -1
    }
    return 0
  }

  // contenedor para el orden resultante
  const result = mapped.map(function (el) {
    console.log(result)
    return setOrderListArray(OrderListArray[el.index])
  })

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
