import { TfiHeadphoneAlt } from 'react-icons/tfi'
import { FaRegMoneyBillAlt } from 'react-icons/fa'
import { LiaPiggyBankSolid } from 'react-icons/lia'
import featureImage from '../../images/feature.png'

export default function Features () {
  const featuresData = [
    {
      icon: <TfiHeadphoneAlt />,
      title: 'Soporte en línea 24/7',
      body: 'Atención Ininterrumpida para tus Necesidades en Todo Momento'
    },
    {
      icon: <FaRegMoneyBillAlt />,
      title: 'Compra segura',
      body: 'Utilizamos medidas de protección avanzadas para resguardar tu información con total confidencialidad y tranquilidad'
    },
    {
      icon: <LiaPiggyBankSolid />,
      title: 'Obtenga 100% de devolución de dinero',
      body: 'Tu Satisfacción es Nuestra Prioridad. Si tu pedido no llega, te garantizamos la devolución de tu dinero sin preguntas'
    }
  ]

  return (
    <div className='bg-white text-greyCustom flex flex-col px-5 gap-y-10 py-10 md:pt-28'>

      <div className='flex flex-col gap-y-5 md:flex-row md:gap-x-5 max-w-7xl mx-auto'>
        {featuresData.map((featureData, index) => (
          <div key={index} className='flex flex-col items-center gap-3'>
            <p className='text-2xl bg-gray-200 p-3 rounded-full'>{featureData.icon}</p>
            <p className='text-black text-xl'>{featureData.title}</p>
            <p className='text-center text-base'>{featureData.body}</p>
          </div>
        ))}
      </div>

      <div className='flex flex-col md:flex-row items-center md:justify-center gap-y-5 gap-x-5'>
        <img src={featureImage} alt='' className='w-full max-w-lg' />
        <img src={featureImage} alt='' className='w-full max-w-lg' />
      </div>
    </div>
  )
}
