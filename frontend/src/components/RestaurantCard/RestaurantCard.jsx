import { TbMail, TbPhoneCall } from 'react-icons/tb'
import { MdPlace } from 'react-icons/md'
import { Link } from 'react-router-dom'

export const RestaurantCard = ({ object }) => {
  const { name, description, especiality, phone, email, city } = object
  return (
    <div className='bg-white border border-gray-300 rounded-lg max-w-[470px]'>
      {/* Header */}
      <div className='flex gap-36 items-center p-5'>
        <div className='flex gap-2'>

          <img className='w-[50px] h-[50px] rounded-md' src={object.image_url} alt='Restaurant avatar' />

          <div className='flex flex-col'>
            <h3 className='text-base font-bold'>{name}</h3>
            <span className='text-greyCustom text-base flex gap-1 items-center'><MdPlace className='text-greenCustom text-lg' />{city}</span>
          </div>

        </div>

        <Link to={'/restaurant/id'} className='bg-greenCustom text-white rounded-md text-base px-4 py-2'>Menu</Link>
      </div>
      <hr />
      {/* Body */}
      <div className=' p-5'>
        <h3 className='text-base font-bold'>{especiality}</h3>
        <p className='text-greyCustom text-base'>{description}</p>
      </div>
      <hr />
      {/* Footer */}
      <div className='flex gap-7 p-5'>
        <span className='text-greyCustom text-base flex gap-1 items-center'> <TbPhoneCall className='text-greenCustom text-lg' />{phone}</span>
        <span className='text-greyCustom text-base flex gap-1 items-center'><TbMail className='text-lg' />{email}</span>
      </div>
    </div>
  )
}
