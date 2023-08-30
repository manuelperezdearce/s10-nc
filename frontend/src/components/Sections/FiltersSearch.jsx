import CardProduct from '../cardProduct/cardProduct';
import { AiFillTag } from 'react-icons/ai';
import { FaSearch } from 'react-icons/fa';


export default function FiltersSearch() {
    return (
        <div>


            {/* -------------------- Search & Filters */}
            <div className='flex flex-col mb-12 lg:mb-20'>

                {/* Search */}
                <div className='flex flex-col md:flex-row md:items-center md:justify-between gap-y-7 gap-x-32 mb-5 md:mb-10'>
                    <p className='text-3xl font-bold flex gap-x-2'><span className='text-greenCustom2'><AiFillTag/></span>Platillos</p>
                    {/* <FaSearch /><input type="search" name="" id="" placeholder='Buscar platillo' className='p-2 w-full bg-white border border-gray-400 rounded-md max-w-3xl outline-none'/> */}
                    <div className="flex items-center bg-white border border-gray-400 rounded-md max-w-3xl w-full">
                        <div className="p-2 text-gray-400"><FaSearch/></div>
                        <input type="search" placeholder="Buscar platillo" className="py-2 w-full outline-none bg-white"/>
                    </div>
                </div>


                {/* Filters */}
                <div className='flex flex-col md:flex-row md:justify-between gap-y-4 gap-x-20'>
                    <div className='w-full'>
                        <label htmlFor="filtro1">Filtro 01:</label>
                        <select name="filtro1" id="filtro1" className='p-2 w-full bg-white border border-gray-400 rounded-md'>
                            <option value="opc1">Opcion 1</option>
                            <option value="opc2">Opcion 2</option>
                            <option value="opc3">Opcion 3</option>
                        </select>
                    </div>
                    <div className='w-full'>
                        <label htmlFor="filtro2">Filtro 02:</label>
                        <select name="filtro2" id="filtro2" className='p-2 w-full bg-white border border-gray-400 rounded-md'>
                            <option value="opc1">Opcion 1</option>
                            <option value="opc2">Opcion 2</option>
                            <option value="opc3">Opcion 3</option>
                        </select>
                    </div>
                    <div className='w-full'>
                        <label htmlFor="filtro3">Filtro 03:</label>
                        <select name="filtro3" id="filtro3" className='p-2 w-full bg-white border border-gray-400 rounded-md'>
                            <option value="opc1">Opcion 1</option>
                            <option value="opc2">Opcion 2</option>
                            <option value="opc3">Opcion 3</option>
                        </select>
                    </div>
                </div>
            </div>








            {/* -------------------- Cards Render*/}
            <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5'>
                <CardProduct/>
                <CardProduct/>
                <CardProduct/>
                <CardProduct/>
                <CardProduct/>
            </div>
        </div>
    )
}
