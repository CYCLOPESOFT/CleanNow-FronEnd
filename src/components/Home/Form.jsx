import { LuHome } from "react-icons/lu";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { IoBagOutline } from "react-icons/io5";

export default function Form(){
    return(
        <>
        {/*form*/}
        <div className='bg-white h-min-h w-min-w mt-8 rounded-xl mx-6 p-8 relative z-10'>
                    <h1 className='text-xl text-purpleHome font-semibold'>¿Qué necesitás limpiar hoy?</h1>
                    
                    <div className='flex justify-between w-full mt-4 gap-4'>
                       
                        <a href='#' className='flex justify-center items-center flex-col container mx-auto border-solid border-2 border-black rounded-lg w-24 h-28'>
                            <LuHome className='text-purpleHome w-12 h-12'/>
                            <span>Casa</span>
                        </a>

                        <a href='#' className='flex justify-center items-center flex-col container mx-auto border-solid border-2 border-black rounded-lg w-24 h-28'>
                            <HiOutlineBuildingOffice2 className='text-purpleHome w-12 h-12'/>
                            <span>Depto</span>
                        </a>

                        <a href='#' className='flex justify-center items-center flex-col container mx-auto border-solid border-2 border-black rounded-lg w-24 h-28'>
                            <IoBagOutline className='text-purpleHome w-12 h-12'/>
                            <span>Oficina</span>
                        </a>
                    </div>
                    <button className='w-full mt-6 bg-purpleHome text-white p-4 rounded-lg text-xl font-semibold shadow-lg'>Solicitar servicio</button>
             </div>
        </>
    )
}