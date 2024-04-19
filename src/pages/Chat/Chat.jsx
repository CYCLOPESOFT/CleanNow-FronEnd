import { IoIosArrowBack, IoMdCall } from "react-icons/io";
import { GoPaperclip } from "react-icons/go";
import { LuSendHorizonal } from "react-icons/lu";
import image from '../../assets/images/image.jpg';
import { Link } from "react-router-dom";

export default function Chat() {
    return (
        <div className="bg-grayHome h-full">
            <div className='bg-purpleHome w-full h-32 rounded-b-xl absolute top-0 z-0'></div>
            <div className="w-full h-36 flex justify-between items-center container mx-auto pt-3 px-8 relative z-10" style={{ marginBottom: '1.5rem' }}>
                <Link to={'/chatList'}>
                    <IoIosArrowBack className="text-white w-6 h-6" />
                </Link>
                <div className="flex items-center">
                    <img src={'https://i.imgur.com/93zVxR5.png'} alt="camila" className='w-10 h-10 rounded-full mr-4' />
                    
                    <span className="text-white text-xl">Roberto Garcia</span>
                </div>
                <IoMdCall className="text-white w-8 h-8" />
            </div>

            <div className="flex items-start gap-2.5 pl-8">
                <img src={'https://i.imgur.com/93zVxR5.png'} alt="camila" className='w-8 h-8 rounded-full  ' />
                
                <div className="flex flex-col w-full max-w-[320px] leading-1.5 p-4 bg-white rounded-e-xl rounded-es-xl dark:bg-gray-700" style={{ marginBottom: '1rem' }}>
                    <div className="flex items-center space-x-2 rtl:space-x-reverse">
                        <span className="text-sm font-semibold text-gray-900 dark:text-white">Roberto Garcia</span>
                        <span className="text-sm font-normal text-gray-500 dark:text-gray-400">18:10</span>
                    </div>
                    <p className="text-sm font-normal py-2.5 text-gray-900 dark:text-white">Buenas Dias, estoy disponible. Puede compartirme mas informacion ?</p>
                    
                </div>                
            </div>

<div className="flex items-start gap-2.5 justify-end " style={{ marginBottom: '22rem' }}>
    
<div className="flex justify-end pr-4"> 
    <div className="flex flex-col w-full max-w-[290px] leading-1.5 p-4 border-gray-200 bg-purple-100 rounded-e-xl rounded-es-xl dark:bg-gray-700">
        <div className="flex items-center space-x-2 rtl:space-x-reverse">
            <span className="text-sm font-semibold text-gray-900 dark:text-white">Adalberto Vargas</span>
            <span className="text-sm font-normal text-gray-500 dark:text-gray-400">11:47</span>
        </div>
        <p className="text-sm font-normal py-2.5 text-gray-900 dark:text-white">Si, en un momento le envio fotos del lugar para que tenga lo necesario para la limpieza.</p>
    </div>
</div>

    {/* Imagen */}
    {/* <img src={image} alt="camila" className='w-8 h-8 rounded-full' /> */}
</div>


<footer className='h-28 sticky bottom-0 z-20 text-sm flex items-center justify-around bg-white py-8'>
            <div className="flex items-center w-3/4 pl-8"> 
                <input type="text" placeholder="Escribe un mensaje" className="w-full border border-gray-300 px-2 py-5 rounded-xl focus:outline-none focus:border-purple-500" /> {/* Modificado */}
            </div>
            <div className="flex items-center w-1/4 justify-end pr-4"> 
                <div className="flex p-1 rounded-full">
                    <GoPaperclip className="w-8 h-8 mr-2 text-purple-600" />
                    <LuSendHorizonal className="w-8 h-8 text-purple-600" />
                </div>
            </div>
        </footer>
        </div>
    )
}
