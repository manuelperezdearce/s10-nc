
import Categories from './components/Categories'

import { Link } from 'react-router-dom'

const CategoriesArray = [
  {
    id: 1,
    category: 'Ensaladas',
    imgUrl: 'https://firebasestorage.googleapis.com/v0/b/greeneats-284af.appspot.com/o/categories%2Fensaladas.webp?alt=media&token=472740db-7e16-4bac-974d-e0d83cc055a4'
  },
  {
    id: 2,
    category: 'Bebidas',
    imgUrl: 'https://firebasestorage.googleapis.com/v0/b/greeneats-284af.appspot.com/o/categories%2Fbebidas.webp?alt=media&token=8c75a548-3a92-4def-b6db-70a9a97d8856'
  },
  {
    id: 3,
    category: 'Sopas',
    imgUrl: 'https://firebasestorage.googleapis.com/v0/b/greeneats-284af.appspot.com/o/categories%2Fsopas.webp?alt=media&token=9e11c4b4-88c0-4b7d-8c96-98bb7c0b49ff'
  },
  {
    id: 4,
    category: 'Pastas',
    imgUrl: 'https://firebasestorage.googleapis.com/v0/b/greeneats-284af.appspot.com/o/categories%2Fpastas.webp?alt=media&token=aa587f5b-641b-48bd-82f7-e72498a45bed'
  },
  {
    id: 5,
    category: 'Carnes',
    imgUrl: 'https://firebasestorage.googleapis.com/v0/b/greeneats-284af.appspot.com/o/categories%2Fasadito.webp?alt=media&token=4617286e-2486-450d-95bd-1dcdec5ce2bf'
  }

]


export default function SeeCategories() {
  const renderArray = CategoriesArray;

  // const HandleButton = (e) => {
  //     console.log(e.target.name)
  // }

  return (
    <section className="bg-white text-center text-black flex flex-col items-center gap-4 py-10 px-4 rounded-md shadow-gray-500 shadow-lg">
      <h1 className="text-[3rem] font-semibold">Comprar por categorías</h1>
      <p className="max-w-[500px] text-[1rem] text-greyCustom font-medium">
        Deléitate Explorando Nuestras Categorías Gastronómicas!
      </p>
      <div className="w-full">
        {/* <div className="text-white flex justify-between px-8 w-full absolute top-[40%] z-10 [&>*]:opacity-70 hover:[&>*]:opacity-100 [&>*]:ease-in [&>*]:duration-300 [&>*]:h-16">
                    <button className="z-20" name="back" role="button" onClick={e => HandleButton(e)}>
                        <MdArrowBackIos className="z-0" />
                    </button>
                    <button name="forward" role="button" onClick={HandleButton}>
                        <MdArrowForwardIos />
                    </button>
                </div> */}
        <article className="my-8 justify-start py-4 w-full [&>*]:w-1/2 [&>*]:md:w-1/3 [&>*]:lg:w-1/5 [&>*]:p-4 flex flex-wrap ">
          {renderArray.length > 0 &&
            renderArray.map(({ id, imgUrl, category }) => {
              return (
                <Categories
                  key={id}
                  imgUrl={imgUrl}
                  id={id}
                  category={category}
                />
              );
            })}
        </article>
      </div>

      <Link to='/category' className='rounded-md p-3 text-white text-[1.5rem] bg-greenCustom'>Explorar Todas</Link>


    </section>
  );
}
