import { useParams } from 'react-router-dom'
import { useMealsByCategory } from '../../hooks/useMealsByCategory'
import CardMenu from '../../components/cardMenu/CardMenu'

export const MealsByCategory = () => {
  const { id } = useParams()
  const { data, isLoading } = useMealsByCategory(id)
  console.log(data)
  if (isLoading)<p>Cargando...</p>

  return (
    <section className='w-full flex flex-col justify-center items-center my-[10%]'>
      {/* <div className='w-[100%] max-w-[1600px] p-6 min-h-[500px] flex flex-row flex-wrap justify-center content-start items-start mt-0 lg:mt-[110px] gap-5'> */}
      <div className='w-3/4 mb-8 flex flex-col gap-2'>
        <h2 className='font-titulo text-3xl font-bold text-marronCustom'>Descubre nuestra selección de platos y bebidas.</h2>
        <p className='font-parrafo font-normal text-sm lg:text-base text-marronCustom'>
          Nuestra selección de platos te brinda una experiencia culinaria única, con opciones saludables y deliciosas para cada etapa de tu comida. Desde entradas frescas hasta postres indulgentes, estamos comprometidos con tu bienestar y satisfacción gastronómica.
        </p>
      </div>
      <div className='flex gap-8 flex-wrap w-3/4'>
        {!isLoading &&
      data.map((elem) => (
        <CardMenu key={elem.id} object={elem} />
      ))}
        {data.length === 0 && <p className='text-xl font-bold text-black'>No se han encontrado platillos</p>}
      </div>
    </section>
  )
}
