import { useEffect, useState } from "react";
import Categories from "./components/Categories";
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";
import { render } from "react-dom";

const CategoriesArray = [
  {
    id: "001",
    category: "Ensaladas",
    imgUrl:
      "https://cdn.discordapp.com/attachments/1105248913792979008/1142286481109561454/Amazing_photo_1.jpg",
  },
  {
    id: "002",
    category: "Almuerzos",
    imgUrl:
      "https://cdn.discordapp.com/attachments/1105248913792979008/1142286451665547284/A_salad_bowl_1.jpg",
  },
  {
    id: "003",
    category: "Postres",
    imgUrl:
      "https://cdn.discordapp.com/attachments/1105248913792979008/1142286521278419105/Amazing_photo_7.jpg",
  },
  {
    id: "004",
    category: "Gluten Free",
    imgUrl:
      "https://cdn.discordapp.com/attachments/1105248913792979008/1142286520565379162/Amazing_photo_5.jpg",
  },
  {
    id: "005",
    category: "Proteínas +",
    imgUrl:
      "https://cdn.discordapp.com/attachments/1105248913792979008/1142286520565379162/Amazing_photo_5.jpg",
  },
];

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
      <button className="rounded-md p-3 text-white text-[1.5rem] bg-greenCustom">
        Explorar Todas
      </button>
    </section>
  );
}
