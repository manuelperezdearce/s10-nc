// import { USERS, OrderListDATA } from '../../constants/dbPrueba'
import axios from 'axios'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import { useEffect, useState } from 'react'
import UserInfo from './components/UserInfo'
import OrderList from './components/OrderList'

export default function ProfilePage () {
  const { user } = useSelector(state => state?.auth2)
  const [userData, setUserData] = useState({})

  const getUserData = async () => {
    const res = await axios.get(`https://green-eats.onrender.com/customer/user/${user.user_id}`)
      .catch(error => {
        console.log(error)
      })
    setUserData(res.data)
  }
  console.log(userData)
  useEffect(() => {
    getUserData()
  }, [])

  return (
    <div className='containerRestaurants lg:mt-[130px] w-full my-11 min-h-[400px] flex flex-col justify-start items-center content-center bg-whiteCustom gap-6 border-2 border-r-emerald-200 '>
      <UserInfo
        id={userData.id}
        createdAt={userData.createdAt}
        userID={userData.id}
        name={userData.name === '' ? user.email : userData.name}
        phone={userData.phone_number}
        address={userData.address}
        photo={userData.photo}
        email={user.email}
      />
      <OrderList
        userID={userData?.id}
      />
    </div>

  )
}
