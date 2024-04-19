import { IoIosArrowBack } from "react-icons/io";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { RiHomeSmile2Line, RiMoreFill } from "react-icons/ri";
import { PiStarFourBold } from "react-icons/pi";
import { Link } from "react-router-dom";

export default function Notificaciones() {
    return (
        <div className="bg-grayHome h-full">
            <div className='bg-purpleHome w-full h-32 rounded-b-xl absolute top-0 z-0'></div>
            <div className="w-full h-36 flex justify-between items-center container mx-auto pt-3 px-8 relative z-10" style={{ marginBottom: '1.5rem' }}>
                <Link to={'/home'}>
                    <IoIosArrowBack className="text-white w-6 h-6" />
                </Link>
                <span className="text-white text-xl mx-auto">Notificaciones</span>
                
            </div>

            <span className="text-purple-700 font-semibold text-ms ml-10 justify-center w-full">Nuevas</span>

            <div className='bg-white h-min-height w-min-widht mt-2 rounded-xl mx-5 p-8' style={{ marginBottom: '1rem' }}>
                <p className="mt-2"> {/* Texto debajo del nombre y la fecha */}
                ¡Oferta especial para ti! Reserva tu próxima limpieza con un 15% de descuento. ¡No te lo pierdas, descarga la app ahora!
                </p>
                <div className="flex justify-end mt-2">
                    <RiMoreFill className="text-gray-500" />
                </div>
            </div>

            <div className='bg-white h-min-height w-min-widht mt-2 rounded-xl mx-5 p-8' style={{ marginBottom: '2rem' }}>
                <p className="mt-2"> {/* Texto debajo del nombre y la fecha */}
                ¡Atención a todos nuestros clientes amantes del orden y la limpieza! ¿Buscas una oferta irresistible para mantener tu hogar impecable? ¡Estás de suerte! Por tiempo limitado, estamos ofreciendo un 20% de descuento en tu próximo servicio de limpieza.
                </p>
                <div className="flex justify-end mt-2">
                    <RiMoreFill className="text-gray-500" />
                </div>
            </div>

            <span className="text-purple-700 font-semibold text-ms ml-10 justify-center w-full">Anteriores</span>

            <div className='bg-white h-min-height w-min-widht mt-2 rounded-xl mx-5 p-8' style={{ marginBottom: '1rem' }}>
                <p className="mt-2"> {/* Texto debajo del nombre y la fecha */}
                ¡La profesional de la limpieza Maria Laura te ha calificado con 5 estrellas tu trato hacia ella!
                </p>
                <div className="flex justify-end mt-2">
                    <RiMoreFill className="text-gray-500" />
                </div>
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
