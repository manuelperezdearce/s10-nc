import { AiOutlineCamera } from 'react-icons/ai'

export default function BtnUploadImgProfileRestaurant ({ setImg }) {
  const handleImageUpload = (event) => {
    const file = event.target.files[0]
    if (file) {
      console.log('Imagen seleccionada:', file)
      setImg(file)
    }
  }

  return (
    <>
      <label htmlFor='file-input' className='bg-greenCustom text-white text-3xl p-2 inline-flex rounded-full cursor-pointer'>
        <AiOutlineCamera />
      </label>

      <input
        id='file-input'
        type='file'
        accept='image/*'
        style={{ display: 'none' }}
        onChange={handleImageUpload}
      />
    </>
  )
}
