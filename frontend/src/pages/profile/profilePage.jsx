import { useSelector } from 'react-redux'
import ProfilePage from '../../components/profile/profile'
import RestaurantID from '../restaurant/RestaurantID'

export default function Profile () {
  const { user } = useSelector(state => state?.auth2)
  return (
    <div>
      {user?.role_id === 1
        ? <ProfilePage />
        : <RestaurantID />}
    </div>

  )
}
