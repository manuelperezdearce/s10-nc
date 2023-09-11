// import { USERS, OrderListDATA } from '../../constants/dbPrueba'
import axios from 'axios'

import UserInfo from './components/UserInfo'
import OrderList from './components/OrderList'

import { useSelector } from 'react-redux/es/hooks/useSelector'

import { useEffect, useState } from 'react'

export default function ProfilePage () {
  // let { id, createdAt, userID = 1, name, phone, address, photo, email } = USERS[0]
  // const [OrderListArray, setOrderListArray] = useState(OrderListDATA.filter(item => item.customerID === id))

  const [userData, setUserData] = useState({})

  const { data } = useSelector(state => state?.auth)
  const registeredAsCustomer = false
  const getUserData = async () => {
    const res = await axios.get(`https://green-eats.onrender.com/customer/user/${data.user_id}`)
    if (res.data.name === '') {
      userData.name = res.data.
    }
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
        userID={userData.userID}
        name={userData.name}
        phone={userData.phone}
        address={userData.address}
        photo={userData.photo}
        email={userData.email}
      />
      <OrderList
        userID=''
        // OrderListArray={OrderListArray}
        // setOrderListArray={setOrderListArray}
      />
    </div>

  )
}
