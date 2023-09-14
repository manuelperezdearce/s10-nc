import ListProductsMenu from '../../components/listProductsMenu/ListProductsMenu'

const Category = ({ data }) => {
  return (
    <section className='productsVegan w-[100%] h-[450px] px-[1rem] py-[1rem] flex flex-col gap-2 max-w-[1500px]'>
      <h2 className='font-titulo text-3xl font-bold text-marronCustom text-left '>{data.name || 'Buscando...'}</h2>
      <ListProductsMenu categoryId={data.id} />
    </section>
  )
}
export default Category
