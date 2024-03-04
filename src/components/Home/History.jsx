import { SlNotebook } from "react-icons/sl";
import { MdChevronRight } from "react-icons/md";
export default function History(){
    return(
        <>
         {/*historial de limpiezas*/}
         <a className='flex justify-between items-center bg-white h-min-height w-min-widht mt-8 rounded-lg mx-6 p-8 mb-8'>
                <div className='rounded-xl'>
                    <SlNotebook  className='w-8 h-8 inline-block mr-2 text-xl text-purpleHome'/>
                    <span className='font-medium'>Historial de limpiezas</span>
                </div>
                <div>
                    <MdChevronRight className='inline-block w-8 h-8 text-purpleHome'/>
                </div>
            </a>
        </>
    )
}