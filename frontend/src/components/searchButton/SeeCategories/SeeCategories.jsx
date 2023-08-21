import Categories from "./components/Categories"
import { MdArrowForwardIos, MdArrowBackIos } from 'react-icons/md'

const CategoriesArray = [
    {
        id: "001",
        category: "Ensaladas",
        imgUrl: "https://cdn.discordapp.com/attachments/1105248913792979008/1142286481109561454/Amazing_photo_1.jpg"
    },
    {
        id: "002",
        category: "Almuerzos",
        imgUrl: "https://cdn.discordapp.com/attachments/1105248913792979008/1142286451665547284/A_salad_bowl_1.jpg"
    },
    {
        id: "003",
        category: "Postres",
        imgUrl: "https://cdn.discordapp.com/attachments/1105248913792979008/1142286521278419105/Amazing_photo_7.jpg"
    },
    {
        id: "004",
        category: "Libre de gluten",
        imgUrl: "https://cdn.discordapp.com/attachments/1105248913792979008/1142286520565379162/Amazing_photo_5.jpg"
    },
    {
        id: "005",
        category: "Alto en proteínas",
        imgUrl: "https://cdn.discordapp.com/attachments/1105248913792979008/1142286520565379162/Amazing_photo_5.jpg"
    },
]




export default function SeeCategories() {
    return (
        <section className="bg-white text-center text-black flex flex-col items-center gap-4 py-10 px-4 rounded-md">
            <h1 className="text-[3rem] font-semibold">Shop by categories</h1>
            <p className="max-w-[500px] text-[1rem] text-greyCustom font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, voluptatibus!</p>
            <div className="w-full relative">
                <div className="text-white flex justify-between px-8 w-full absolute top-[40%] z-10 [&>*]:p-4 [&>*]:bg-black [&>*]:opacity-60">
                    <button>
                        <MdArrowBackIos />
                    </button>
                    <button>
                        <MdArrowForwardIos />
                    </button>
                </div>
                <article className="my-8 flex justify-between py-4 w-full overflow-hidden">
                    {
                        CategoriesArray.map(({ id, imgUrl, category }) => {
                            return (
                                <Categories
                                    key={id}
                                    imgUrl={imgUrl}
                                    id={id}
                                    category={category}
                                />
                            )
                        })
                    }
                </article>

            </div>

            <button className="rounded-md p-3 text-white text-[1.5rem] bg-greenCustom">Explorar Todas</button>

        </section>
    )
}