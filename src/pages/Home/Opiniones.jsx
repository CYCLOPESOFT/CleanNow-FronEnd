import { IoIosArrowBack } from "react-icons/io";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { RiHomeSmile2Line } from "react-icons/ri";
import { PiStarFourBold } from "react-icons/pi";
import { Link } from "react-router-dom";
import { TiStarFullOutline, TiStarOutline  } from "react-icons/ti";
import image from '../../assets/images/image.jpg'
export default function Opiniones() {
    return (
        <div className="bg-grayHome h-full">
            <div className='bg-purpleHome w-full h-32 rounded-b-xl absolute top-0 z-0'></div>
            <div className="w-full h-36 flex justify-between items-center container mx-auto pt-3 px-8 relative z-10" style={{ marginBottom: '1.5rem' }}>
                <Link to={'/profileassistant'}>
                    <IoIosArrowBack className="text-white w-6 h-6" />
                </Link>
                <span className="text-white text-xl mx-auto">Opiniones</span>
               
            </div>


           

    <div className="flex items-start mx-3 " style={{ marginBottom: '1rem' }}>
        <div className="mr-2">
            <img src={image} alt="camila" className='m-2 rounded-lg w-20 h-24 object-cover'/>
        </div>

        <div className='flex flex-col justify-between mt-3'>
            <span className='font-semibold'>Adalberto Vargas</span>

            <div className="flex items-center gap-2">
            <span className="ml-1 font-semibold text-3xl">4.2</span>
                <TiStarFullOutline className='text-yellow-400 text-2xl'/> 
                <TiStarFullOutline className='text-yellow-400 text-2xl'/> 
                <TiStarFullOutline className='text-yellow-400 text-2xl'/> 
                <TiStarFullOutline className='text-yellow-400 text-2xl'/> 
                <TiStarOutline className='text-yellow-400 text-2xl'/> 
                
            </div>

            <div className="text-gray-500 text-sm">10 calificaciones</div>
        </div>
    </div>

    <div className='bg-white h-min-height w-min-widht mt-2 rounded-xl mx-5 p-8' style={{ marginBottom: '1rem' }}>
        <div className="flex justify-between items-start">
            <span className="text-purple-600 text-ms font-semibold">Juan</span> 
            <span className="text-ms text-gray-400">02 de febrero 2023</span>
        </div>
        <p className="mt-2"> 
            Maria Laura es una genia en la limpieza. Mi casa nunca estuvo tan impecable. ¡La recomiendo a todos mis conocidos!
        </p>
    </div>

    <div className='bg-white h-min-height w-min-widht mt-2 rounded-xl mx-5 p-8' style={{ marginBottom: '1rem' }}>
        <div className="flex justify-between items-start">
            <span className="text-purple-600 text-ms font-semibold">Juan</span> 
            <span className="text-ms text-gray-400">02 de febrero 2023</span> 
        </div>
        <p className="mt-2">
            Maria Laura es una genia en la limpieza. Mi casa nunca estuvo tan impecable. ¡La recomiendo a todos mis conocidos!
        </p>
    </div>

    <div className='bg-white h-min-height w-min-widht mt-2 rounded-xl mx-5 p-8' style={{ marginBottom: '1rem' }}>
        <div className="flex justify-between items-start">
            <span className="text-purple-600 text-ms font-semibold">Juan</span> 
            <span className="text-ms text-gray-400">02 de febrero 2023</span> 
        </div>
        <p className="mt-2"> 
            Maria Laura es una genia en la limpieza. Mi casa nunca estuvo tan impecable. ¡La recomiendo a todos mis conocidos!
        </p>
    </div>

    
            

        <footer className='h-28 sticky bottom-0 z-20 text-sm flex items-center justify-around bg-white py-8'>
                
                <Link to={'/home'} className='flex items-center flex-col'>
                    <RiHomeSmile2Line className='w-10 h-10' />
                    <span>Home</span>
                </Link>
            <Link to={'/requests'} className='flex items-center flex-col'>
                <PiStarFourBold className='w-10 h-10' />
                <span>Solicitudes</span>
            </Link>
            <Link to={'/chatList'} className='flex items-center flex-col'>
                <IoChatbubbleEllipsesOutline className='w-10 h-10' />
                <span>Chat</span>
            </Link>
        </footer>
        </div>
    )
}
