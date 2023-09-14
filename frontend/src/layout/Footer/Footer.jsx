import { AiFillFacebook, AiFillInstagram, AiFillYoutube, AiOutlineTwitter } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import paypal from '../../images/paypal.png'
import visa from '../../images/visa.png'
import masterCard from '../../images/mastercard.png'
import americanExpress from '../../images/americanexpress.png'
import discover from '../../images/discover.png'

const Footer = () => {
  return (
    <footer className='bg-white text-white'>

      <div className='bg-gradient-to-t from-greenCustom to-greenCustom2'>
        <div className='max-w-7xl py-20 px-5 grid grid-cols-2 md:grid-cols-3 grid-rows-2 md:grid-rows-1 gap-x-10 lg:gap-x-16 gap-y-20 mx-auto'>

          <div>
            <p className='text-2xl font-bold mb-2'>Green Eats</p>

            <p className='mb-4'>Nuestra plataforma ofrece una amplia selección de restaurantes de calidad, brindando a los clientes opciones deliciosas y variadas.</p>

            <div className='flex gap-x-2 text-2xl'>
              <Link to='/'><AiFillFacebook /></Link>
              <Link to='/'><AiFillInstagram /></Link>
              <Link to='/'><AiFillYoutube /></Link>
              <Link to='/'><AiOutlineTwitter /></Link>
            </div>
          </div>

          <div>
            <p className='text-2xl font-bold mb-2'>Links útiles</p>
            <div className='grid grid-cols-2'>

              <Link to='/home'>Home</Link>
              <Link to='/restaurant'>Restaurantes</Link>

              <Link to='/menus'>Menus</Link>
              <Link to='/contact'>Contacto</Link>
              <Link to='/login'>Login</Link>
              <Link to='/cart'>Carrito de compra</Link>
            </div>
          </div>

          <div className='col-start-1 col-end-3 md:col-start-3 md:col-end-4'>
            <p className='text-2xl font-bold mb-2'>Suscríbete para recibir novedades</p>
            <p className='mb-5'>Ingresa tu Email para recibir ofertas, novedades en tu correo</p>
            <div className="relative">
              <input type='text' placeholder='Ingresa tu Email' className='w-full bg-white p-2 rounded-md' />
              <button className="absolute inset-y-0 right-0 bg-white text-greenCustom px-4 py-0 mr-1 border-l">Enviar</button>
            </div>
          </div>

        </div>
      </div>

      <div className='lg:flex md:justify-between items-center text-black py-10 px-5 max-w-7xl mx-auto'>
        <div className='flex justify-center gap-x-5 mb-5 lg:mb-0'>
          <Link to='/' className='hover:text-greenCustom duration-75 text-center'>Pagos</Link>
          <Link to='/' className='hover:text-greenCustom duration-75 text-center'>Envíos y devoluciones</Link>
          <Link to='/' className='hover:text-greenCustom duration-75 text-center'>Recuperar cuenta</Link>
          <Link to='/' className='hover:text-greenCustom duration-75 text-center'>Políticas de privacidad</Link>
        </div>
        <div className='flex justify-center items-center gap-x-5'>
          <img src={paypal} alt='' className='h-12' />
          <img src={visa} alt='' className='h-4' />
          <img src={masterCard} alt='' className='h-7' />
          <img src={americanExpress} alt='' className='h-10' />
          <img src={discover} alt='' className='h-10' />
        </div>
      </div>

    </footer>
  )
}

export default Footer
