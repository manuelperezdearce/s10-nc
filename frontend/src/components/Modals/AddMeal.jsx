import { IoCloseSharp } from 'react-icons/io5'
import { MdLocalDining } from 'react-icons/md'

export const AddMeal = ({ closeModal }) => {
  const label = 'font-medium'
  const fieldStyle = 'flex flex-col gap-2'
  const checkboxFieldset = 'flex gap-2'
  const inputStyle = 'bg-white border rounded-md p-2 focus:outline-none focus:border-greenCustom focus:ring-1 focus:ring-greenCustom'
  const checkbox = 'appearance-none cursor-pointer w-6 h-6 border-2 border-greenCustom rounded-sm bg-white checked:bg-greenCustom checked:border-2'

  return (
    <div className='text-black bg-white md:p-10 flex flex-col gap-6'>
      <button onClick={closeModal} className='text-greenCustom text-5xl self-end'>
        <IoCloseSharp />
      </button>
      <h1 className='flex gap-4 font-bold text-2xl'><MdLocalDining className='text-greenCustom text-3xl' /> Añadir nuevo platillo</h1>
      <form className='flex flex-col gap-8 text-lg'>

        <fieldset className={fieldStyle}>
          <label htmlFor='name' className={label}>Nombre</label>
          <input placeholder='Nombre' name='name' className={inputStyle} />
        </fieldset>
        <div className='flex gap-4'>
          <fieldset className={checkboxFieldset}>
            <input type='checkbox' name='is_vegan' className={checkbox} />
            <label htmlFor='is_vegan' className={label}>Vegano</label>
          </fieldset>
          <fieldset className={checkboxFieldset}>
            <input type='checkbox' name='is_glutenfree' className={checkbox} />
            <label htmlFor='is_glutenfree' className={label}>Libre de Gluten</label>
          </fieldset>
          <fieldset className={checkboxFieldset}>
            <input type='checkbox' name='is_proteinplus' className={checkbox} />
            <label htmlFor='is_proteinplus' className={label}>Protein+</label>
          </fieldset>
        </div>

        <div className='flex gap-8'>
          <fieldset className={fieldStyle}>
            <label htmlFor='price' className={label}>Precio</label>
            <input placeholder='Precio' name='price' type='number' min={0} className={inputStyle} />
          </fieldset>
          <fieldset className={fieldStyle}>
            <label htmlFor='category' className={label}>Categoria</label>
            <select placeholder='Categoria' name='category' className={inputStyle}>
              <option>Categoria 1</option>
            </select>
          </fieldset>
        </div>
        <fieldset className={fieldStyle}>
          <label htmlFor='name' className={label}>Descripción</label>

          <textarea placeholder='Descripcion' name='description' className={inputStyle} />
        </fieldset>

        <fieldset className={fieldStyle}>
          <label htmlFor='file' className={label}>Imagen del platillo</label>
          <input type='file' name='file'/>
        </fieldset>

        <button type='submit' className='bg-greenCustom hover:bg-greenCustom2 duration-75 text-white font-medium px-6 py-2 text-base gap-x-1 rounded-md'>Añadir platillo</button>
      </form>
    </div>
  )
}
