import { TbMail, TbPhoneCall } from 'react-icons/tb'
import { MdPlace } from 'react-icons/md'

export const RestaurantCard = () => {
  return (
    <div className='bg-white border border-gray-300 rounded-lg max-w-[470px]'>
      {/* Header */}
      <div className='flex gap-36 items-center p-5'>
        <div className='flex gap-2'>

          <img className='w-[50px] h-[50px] rounded-md' src='https://picsum.photos/200' alt='Restaurant avatar' />

          <div className='flex flex-col'>
            <h3 className='text-base font-bold'>Vegan Restaurant</h3>
            <span className='text-greyCustom text-base flex gap-1 items-center'><MdPlace className='text-greenCustom text-lg' />Ciudad</span>
          </div>

        </div>

        <button className='bg-greenCustom text-white rounded-md text-base px-4 py-2'>Menu</button>
      </div>
      <hr />
      {/* Body */}
      <div className=' p-5'>
        <h3 className='text-base font-bold'>Especialidad</h3>
        <p className='text-greyCustom text-base'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore esse asperiores quae dicta, deserunt officiis cupiditate debitis tenetur ea et.</p>
      </div>
      <hr />
      {/* Footer */}
      <div className='flex gap-7 p-5'>
        <span className='text-greyCustom text-base flex gap-1 items-center'> <TbPhoneCall className='text-greenCustom text-lg' />+990 343 23443</span>
        <span className='text-greyCustom text-base flex gap-1 items-center'><TbMail className='text-lg' />contact@devid.com</span>
      </div>
    </div>
  )
}
