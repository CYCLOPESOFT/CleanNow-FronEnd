import image from '../../assets/images/image.jpg'
import { IoIosNotificationsOutline } from "react-icons/io";
import { MdChevronRight } from "react-icons/md";
import { LuHome } from "react-icons/lu";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { IoBagOutline } from "react-icons/io5";
import { SlNotebook } from "react-icons/sl";


export default function HomePage(){
    return(
        <div className='bg-grayHome h-screen w-full'>

            {/*header*/}
                <div className="w-full flex justify-between items-center container mx-auto mt-10 px-8">
                
                <div className='flex justify-between w-full mt-4'>
                    <a href="#">
                        <img src={image} alt="" className="inline-block w-16 h-16 rounded-full mr-4 object-cover" />
                        <span className='text-lg'>¡Hola Dan!</span>
                        <MdChevronRight className='inline-block w-6 h-6'/>

                    </a>
                    <div className='flex items-center rounded-lg'>
                    <IoIosNotificationsOutline className='bg-white rounded-lg w-8 h-8 text-purple-400'/>
                    </div>

                </div>
            </div>
            {/*form*/}
                <div className='bg-white h-min-height w-min-widht mt-8 rounded-lg mx-6 p-8'>
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

            {/*historial de limpiezas*/}
            <a className='flex justify-between items-center bg-white h-min-height w-min-widht mt-8 rounded-lg mx-6 p-8'>
                <div>
                    <SlNotebook  className='w-8 h-8 inline-block mr-2 text-xl text-purpleHome'/>
                    <span className='font-medium'>Historial de limpiezas</span>
                </div>
                <div>
                    <MdChevronRight className='inline-block w-8 h-8 text-purpleHome'/>
                </div>
            </a>
                    
        </div>
    )
}