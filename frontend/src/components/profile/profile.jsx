import { USERS } from '../../constants/dbPrueba'
import UserInfo from './components/userInfo'
import OrderList from './components/OrderList'
import OrderFilterSection from './components/OrderFilterSection'

export default function ProfilePage () {
  const { id, createdAt, userID, name, phone, address, photo, email } = USERS[0]

  return (
    <div className='containerRestaurants lg:mt-[130px] w-full my-11 min-h-[400px] flex flex-col justify-start items-center content-center bg-whiteCustom gap-6 border-2 border-r-emerald-200 '>
      <UserInfo
        id={id}
        createdAt={createdAt}
        userID={userID}
        name={name}
        phone={phone}
        address={address}
        photo={photo}
        email={email}
      />
      <OrderFilterSection />
      <OrderList />
    </div>

  )
}
