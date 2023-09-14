import { useEffect, useState } from 'react'
import { getCustomerById } from '../services/api/getCustomer'

export const useCustomer = (id) => {
  const [data, setData] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState({ error: false, message: '' })

  const getCustomer = async () => {
    try {
      const customer = await getCustomerById(id)
      setData(customer)
      setIsLoading(false)
    } catch (err) {
      setIsLoading(false)
      setError({ error: true, message: err.message })
      console.log(err)
    }
  }

  useEffect(() => {
    getCustomer()
  }, [])

  return { data, isLoading, error }
}
