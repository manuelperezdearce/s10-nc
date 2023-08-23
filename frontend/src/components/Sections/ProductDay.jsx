import imagePrincipalDish from '../../../public/Ellipse 2766.png'
import imageSecondaryDish01 from '../../../public/Rectangle 5098.png'
import imageSecondaryDish02 from '../../../public/Rectangle 5099.png'
import imageSecondaryDish03 from '../../../public/Rectangle 5100.png'
import { BsCart4 } from 'react-icons/bs';



export default function ProductDay() {
    return (
        <div className='bg-white text-black'>
            <div className='px-10 py-10 max-w-7xl mx-auto'>
                <h2 className='text-4xl md:text-5xl uppercase font-bold text-center py-14'>Producto Del Día</h2>


                <div className='lg:flex gap-x-20'>
                    <div className='flex justify-center gap-x-5 lg:w-1/2'>
                        <div className='flex flex-col justify-center gap-y-4'>
                            <img src={imageSecondaryDish01} alt="" className=''/>
                            <img src={imageSecondaryDish02} alt="" />
                            <img src={imageSecondaryDish03} alt="" />
                        </div>
                        <div className='flex items-center'>
                            <img src={imagePrincipalDish} alt="" className='max-h-80 xl:max-h-96'/>
                        </div>
                    </div>
                    <div className='border shadow-2xl p-10 flex flex-col gap-y-5 rounded-xl my-20 max-w-xl mx-auto lg:w-1/2'>
                        <h3 className='text-3xl font-bold -mb-4'>Ensalada</h3>
                        <p className='text-greenCustom text-2xl font-bold'>$50</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium delectus aspernatur debitis maiores at nisi ipsa vero laborum inventore recusandae? Laboriosam voluptatibus nobis maxime, tempora doloremque ipsa magnam ullam dolorum.</p>
                        <div>
                            <button className='border border-greenCustom text-greenCustom font-bold px-5 py-2 rounded-md hover:bg-greenCustom hover:text-white transition-all duration-75 flex items-center gap-x-2'><BsCart4/> Agregar al carrito</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
