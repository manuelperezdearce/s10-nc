// import { USERS, OrderListDATA } from '../../constants/dbPrueba'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import UserInfo from './components/UserInfo'
import OrderList from './components/OrderList'
import { useCustomer } from '../../hooks/useCustomer'

export default function ProfilePage () {
  const { user } = useSelector(state => state?.auth2)
  const { data, isLoading } = useCustomer(user.idByRole)

  console.log(data)
  if (isLoading) <p>Cargando...</p>

  return (
    <div className='containerRestaurants lg:mt-[130px] w-full my-11 min-h-[400px] flex flex-col justify-start items-center content-center bg-whiteCustom gap-6 border-2 border-r-emerald-200 '>
      <UserInfo
        data={data}

      />
      <OrderList
        userID={data.id}
      />
    </div>

  )
}
