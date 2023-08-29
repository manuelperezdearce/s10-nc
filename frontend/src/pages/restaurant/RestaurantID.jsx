import React from 'react'
import { IoLocationSharp } from 'react-icons/io5';
import { AiFillTag } from 'react-icons/ai';
import { BsStopwatch, BsTelephoneFill } from 'react-icons/bs';

import RestaurantLogo from '../../images/RestaurantLogo.png'

export default function RestaurantID() {
    return (
        <div className='py-20 md:mt-5 text-black mx-5 flex flex-col gap-y-10'>

            <div className='flex flex-col md:flex-row gap-y-5 md:gap-x-10'>
                <img src={RestaurantLogo} alt="" className='w-full max-w-sm mx-auto'/>

                <div>
                    <p className='text-3xl font-bold'>Nombre del restaurant</p>
                    <p className='text-xl'>Especialidad</p>
                    <div className='mt-4 flex flex-col gap-y-2'>
                        <p className='flex items-center gap-x-2'><span className='text-greenCustom2'><IoLocationSharp/></span>Av. Vegana Springfiels</p>
                        <p className='flex items-center gap-x-2'><span className='text-greenCustom2'><BsTelephoneFill/></span>9676455432</p>
                        <p className='flex items-center gap-x-2'><span className='text-greenCustom2'><BsStopwatch/></span>Desde 09:00 - 19:00</p>
                        <p className='text-base text-greyCustom'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo, corrupti hic. Aliquid laboriosam perspiciatis accusamus?</p>
                    </div>
                    
                </div>
            </div>

            <div>
                <p className='text-3xl font-bold flex gap-x-2'><span className='text-greenCustom2'><AiFillTag/></span>Platillos</p>
                <p>Filtro</p>
                <p>Platillos</p>
            </div>
            
        </div>
    )
}
