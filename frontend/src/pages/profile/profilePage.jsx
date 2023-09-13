import { useSelector } from 'react-redux'
import ProfilePage from '../../components/profile/profile'
import RestaurantID from '../restaurant/RestaurantID'

export default function Profile () {
  const { data } = useSelector(state => state?.auth)
  // const { user } = useSelector(state => state?.auth2)
  // console.log(user)
  return (
    <div>
      {data?.role_id === 1
        ? <ProfilePage />
        : <RestaurantID />}
    </div>

  )
}
