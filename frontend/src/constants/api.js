const api = import.meta.env.VITE_API_URL
// const api = 'https://green-eats.onrender.com'

export const endpoints = {
  meals: `${api}/meal`,
  restaurants: `${api}/restaurant`,
  categories: `${api}/categories`,
  orders: `${api}/order`
}
