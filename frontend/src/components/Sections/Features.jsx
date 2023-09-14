import { TfiHeadphoneAlt } from 'react-icons/tfi'
import { FaRegMoneyBillAlt } from 'react-icons/fa'
import { LiaPiggyBankSolid } from 'react-icons/lia'
import featureImage from '../../images/feature.png'
import promoImage01 from '../../images/Promo01.png'
import promoImage02 from '../../images/Promo02.jpeg'

export default function Features () {
  const featuresData = [
    {
      icon: <TfiHeadphoneAlt />,

      title: 'Soporte al usuario 24/7',
      body: 'El soporte al usuario 25/7 garantiza ayuda constante, resolviendo problemas y brindando asistencia inigualable en todo momento.'
    },
    {
      icon: <FaRegMoneyBillAlt />,
      title: 'Dinero seguro',
      body: 'Puedes comprar con total confianza, tu dinero está 100% seguro con nosotros en todas tus transacciones.'
    },
    {
      icon: <LiaPiggyBankSolid />,
      title: 'Te regresamos tu dinero',
      body: 'Si decides cancelar tu compra o necesitas devolver un producto, te reembolsaremos tu dinero sin problemas.'

    }
  ]

  return (
    <div className='bg-white text-greyCustom flex flex-col px-5 gap-y-16 py-10 md:pt-28'>

      <div className='flex flex-col md:flex-row   gap-y-5 gap-x-5 mx-auto   max-w-7xl'>
        {featuresData.map((featureData, index) => (
          <div key={index} className='flex flex-col items-center gap-3 md:w-1/3'>
            <p className='text-2xl bg-gray-200 p-3 rounded-full'>{featureData.icon}</p>
            <p className='text-black text-xl'>{featureData.title}</p>
            <p className='text-center text-base'>{featureData.body}</p>
          </div>
        ))}
      </div>

      <div className='flex flex-col md:flex-row items-center  gap-y-10 gap-x-10 mx-auto'>
        <img src={promoImage01} alt='' className='w-full max-w-sm rounded-xl' />
        <img src={promoImage02} alt='' className='w-full max-w-sm rounded-xl' />
      </div>
    </div>
  )
}
