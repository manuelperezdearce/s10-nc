import { useMealsByCategory } from "../../hooks/useMealsByCategory"

export const MealsByCategory = () => {
  const {id} = useParams(id)
  const {data, isLoading} = useMealsByCategory(id)
  
  return (
    <div>MealsByCategory</div>
  )
}