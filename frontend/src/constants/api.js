const api = import.meta.env.VITE_API_URL

export const endpoints = {
  meals: `${api}/meals`,
  restaurants: `${api}/restaurant`,
  categories: `${api}/categories`,
  orders: `${api}/order`
}
