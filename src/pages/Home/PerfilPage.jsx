import { IoIosArrowBack } from "react-icons/io";
import { TbPencil } from "react-icons/tb";
import { IoIosInformationCircleOutline } from 'react-icons/io';
import { MdChevronRight } from "react-icons/md";
import { AiOutlineUser } from 'react-icons/ai';
import { IoHeartOutline } from 'react-icons/io5';
import { FiCalendar } from 'react-icons/fi';
import { IoLocationOutline } from "react-icons/io5";
import { IoHelpCircleOutline } from 'react-icons/io5';
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { RiHomeSmile2Line } from "react-icons/ri";
import { PiStarFourBold } from "react-icons/pi";
import { Link } from "react-router-dom";
import image from '../../assets/images/image.jpg'

export default function PerfilPage(){
    return(
    <div className="bg-grayHome h-full">
        <div className='bg-purpleHome w-full h-96 rounded-b-xl absolute top-0 z-25'></div>
        <div className="w-full flex h-36 justify-between items-center container mx-auto pt-3 px-8 relative z-10">
            <a href="">
                <IoIosArrowBack className="text-white w-6 h-6"/>
            </a>
            <span className="text-white text-xl font-md ml-2">Mi perfil</span>
            <a href="">
                <TbPencil className="inline-block text-white text-xl mr-1"/> 
                <span className="text-white ">Editar</span>
            </a>
        </div>                

        <div className="container mx-auto pt-2 px-8 relative z-10" style={{ marginBottom: '5rem' }}>
            <div className="flex justify-center items-center flex-col">                
                <div className='rounded-full overflow-hidden'>
                    <img src={image} alt="camila" className='w-28 h-28 object-cover'/>
                </div>
                <span className="text-white font-bold text-lg mt-4">Adalberto Vargas</span>
                <span className="text-white text-sm">correo@example.com</span>
            </div>
        </div>

        <span className="text-black font-bold text-xl ml-10 justify-center w-full">Tus datos</span>

        <div className='bg-white h-min-height w-min-widht mt-2 rounded-xl mx-6 p-8' style={{ marginBottom: '1rem' }}>
            <div className="flex items-center">
                <AiOutlineUser className='w-8 h-8 text-xl text-purpleHome' />
                <p className="ml-4 text-lg text-gray-800">Datos personales</p>
                <MdChevronRight className='w-8 h-8 text-purpleHome ml-auto' />
            </div>
            <div className="flex items-center mt-4">
                <IoLocationOutline className='w-8 h-8 text-xl text-purpleHome' />
                <p className="ml-4 text-lg text-gray-800">Mis direcciones</p>
                <MdChevronRight className='w-8 h-8 text-purpleHome ml-auto' />
            </div>
        </div> 

        <span className="text-black font-bold text-xl ml-10 justify-center w-full">Servicio</span>      

        <div className='bg-white h-min-height w-min-widht mt-2 rounded-xl mx-6 p-8' style={{ marginBottom: '1rem' }}>
            <div className="flex items-center">
                <PiStarFourBold className='w-8 h-8 text-xl text-purpleHome' />
                <p className="ml-4 text-lg text-gray-800">Estado de solicitudes</p>
                <MdChevronRight className='w-8 h-8 text-purpleHome ml-auto' />
            </div>
            <div className="flex items-center mt-4">
                <FiCalendar  className='w-8 h-8 text-xl text-purpleHome' />
                <p className="ml-4 text-lg text-gray-800">Historial de limpiezas</p>
                <MdChevronRight className='w-8 h-8 text-purpleHome ml-auto' />
            </div>
            <div className="flex items-center mt-4">
                <IoHeartOutline className='w-8 h-8 text-xl text-purpleHome' />
                <p className="ml-4 text-lg text-gray-800">Favoritos</p>
                <MdChevronRight className='w-8 h-8 text-purpleHome ml-auto' />
            </div>
        </div>  

        <span className="text-black font-bold text-xl ml-10 justify-center w-full">Soporte</span>

        <div className='bg-white h-min-height w-min-widht mt-2 rounded-xl mx-6 p-8' style={{ marginBottom: '1rem' }}>
            <div className="flex items-center">
                <IoIosInformationCircleOutline className='w-8 h-8 text-xl text-purpleHome' />
                <p className="ml-4 text-lg text-gray-800">Confianza y seguridad</p>
                <MdChevronRight className='w-8 h-8 text-purpleHome ml-auto' />
            </div>
            <div className="flex items-center mt-4">
                <IoHelpCircleOutline className='w-8 h-8 text-xl text-purpleHome' />
                <p className="ml-4 text-lg text-gray-800">Ayuda</p>
                <MdChevronRight className='w-8 h-8 text-purpleHome ml-auto' />
            </div>
        </div>  

        <span className="text-red-500 font-bold text-xl ml-10 justify-center w-full">Cerrar sesión</span>

        <div className='bg-grayHome h-min-height w-min-widht mt-2 rounded-lg mx-6 p-8' style={{ marginBottom: '1rem' }}></div>

        <footer className='h-28 sticky bottom-0 z-20 text-sm flex items-center justify-around bg-white py-8'>
                <Link to='/'>
                    <a href='' className='flex items-center flex-col'>
                        <RiHomeSmile2Line className='w-10 h-10' />
                        <span>Home</span>
                    </a>
                </Link>
                <a href='' className='flex items-center flex-col text-purpleHome'>
                    <PiStarFourBold className='w-10 h-10' />
                    <span>Solicitudes</span>
                </a>
                <a href='' className='flex items-center flex-col'>
                    <IoChatbubbleEllipsesOutline className='w-10 h-10' />
                    <span>Chat</span>
                </a>
            </footer>
    </div>

    )
}