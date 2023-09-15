export const loadAddToCarFromLocalStorage = () => {
  const localStorage = window.localStorage
  try {
    const serializedState = localStorage.getItem('addToCar')
    return serializedState !== null ? JSON.parse(serializedState) : false
  } catch (error) {
    return false
  }
}
