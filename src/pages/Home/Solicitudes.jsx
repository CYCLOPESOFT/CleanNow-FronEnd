import { IoIosArrowBack } from "react-icons/io";
import { TbPencil } from "react-icons/tb";
import { FaCheck } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { CiCalendar } from "react-icons/ci";
import { CiClock2 } from "react-icons/ci";
import { LuUser2 } from "react-icons/lu";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { RiHomeSmile2Line } from "react-icons/ri";
import { PiStarFourBold } from "react-icons/pi";
import { Link } from "react-router-dom";

export default function Solicitudes(){
    return(
        <div className="bg-grayHome h-full">
            <div className='bg-purpleHome w-full h-32 rounded-b-xl absolute top-0 z-0'></div>
                <div className=" w-full h-36 flex justify-between items-center container mx-auto pt-3 px-8 relative z-10">
                <Link to={'/home'}>
                    <IoIosArrowBack className="text-white w-6 h-6"/>
                </Link>
                     <span className="text-white text-xl font-md ml-8">Solicitudes</span>
                    <Link href="">
                        <TbPencil className="inline-block text-white text-xl mr-1"/> 
                        <span className="text-white ">Editar</span>
                    </Link>
                </div>

            <div className="mt-4 bg-white border-2 p-1 border-gray-400 border-solid mx-12 rounded-xl">
                <button className="p-2 rounded-lg bg-purpleHome text-white w-1/2 inline-block">Activas</button>
                <button className="p-2 rounded-lg bg-white text-purpleHome w-1/2 inline-block font-semibold">Completadas</button>
            </div>

            <div className="p-2 mt-8 mx-6 bg-white rounded-xl flex flex-col mb-56">
                <div className="flex justify-between p-4">
                    <span className="font-semibold">Limpieza departamento</span>  
                    <span className="text-green-500"><FaCheck className="mr-1 inline-block"/>Pagado</span>
                </div>
                    <hr/>
                <div className="p-4">
                <IoLocationOutline className="w-6 h-6 inline-block text-purpleHome"/> <span>Autopista Las Americas, Itla Road</span>
                </div>
                    <hr/>
                <div className="p-4 flex justify-between">
                    <div>
                         <span><CiCalendar className="w-6 h-6 text-purpleHome inline-block"/> 25/04/2024</span>
                    </div>

                    <div>
                    <CiClock2 className="w-6 h-6 inline-block text-purpleHome"/> <span>8:00 AM</span>
                    </div>
                </div>
                    <hr/>
                <div className="p-4">
                <LuUser2 className="w-6 h-6 inline-block text-purpleHome mr-1"/> <span>Roberto Garcia</span>
                </div>
                    <hr/>
                <div className="p-4 flex justify-between">
                    <button className="py-2 px-6 rounded-lg text-purpleHome bg-pinkSolicitudes"> <IoChatbubbleEllipsesOutline className="inline-block w-8 h-8 mr-1"/> <Link to={'/chatList'} className="cursor-pointer font-semibold text-xl">Ir al chat</Link></button>
                    <button className="text-red-500 text-xl">Cancelar</button>
                </div>
            </div>
            
            <footer className='h-28 sticky bottom-0 z-20 flex items-center justify-around bg-white py-8'>
            
                <Link to='/home' className='flex items-center flex-col'>
                    <RiHomeSmile2Line className='w-10 h-10'/>
                    <span>Home</span>
                </Link>
                <Link to={'/requests'} className='flex items-center flex-col text-purpleHome'>
                    <PiStarFourBold  className='w-10 h-10'/>
                    <span>Solicitudes</span>
                </Link>
                
                <Link to={'/chatList'} className='flex items-center flex-col'>
                    <IoChatbubbleEllipsesOutline className='w-10 h-10'/>
                    <span>Chat</span>
                </Link>
            </footer>
            
        </div>
    )
}