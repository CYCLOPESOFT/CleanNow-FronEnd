import { IoIosArrowBack } from "react-icons/io";
import { TbPencil } from "react-icons/tb";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { RiHomeSmile2Line } from "react-icons/ri";
import { PiStarFourBold } from "react-icons/pi";
import { Link } from "react-router-dom";
import { RiArrowRightSLine } from 'react-icons/ri';
import image from '../../assets/images/image.jpg'

export default function ChatList() {
    return (
        <div className="bg-grayHome h-full">
            <div className='bg-purpleHome w-full h-36 rounded-b-xl absolute top-0 z-25'></div>
            <div className="w-full flex flex-col justify-between items-center container mx-auto pt-10 px-8 relative z-10" style={{ marginBottom: '1.5rem' }}>
                <div className="flex items-center justify-between w-full">
                    <Link to={'/home'}>
                        <IoIosArrowBack className="text-white w-6 h-6" />
                    </Link>
                    <span className="text-white text-xl font-md ml-2">Chat</span>
                    <Link>
                        <TbPencil className="inline-block text-white text-xl mr-1" /> 
                        <span className="text-white ">Editar</span>
                    </Link>
                </div>
                
                <div className="w-full mt-4">                    
                    <input
                        type="text"
                        placeholder="Buscar..."
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400"
                    />
                </div>
            </div>

            <div className="mb-72 w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
      <div className="flex items-center justify-between mb-4">
      </div>
      <div className="flow-root">
        <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
          <li className="py-3 sm:py-4">
            <div className="flex items-center relative">
              <div className="flex-shrink-0">
                <img src={image} alt="camila" className='w-20 h-20 rounded-full' />
              </div>
              <div className="flex-1 min-w-0 ms-4">
                <p className="text-lg font-medium text-gray-900 truncate dark:text-white">
                  Adalberto Vargas
                </p>
                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                  Muchas Gracias, Saludo
                </p>
                <p className="text-sm text-gray-500 truncate dark:text-gray-400 absolute right-2 top-2">
                  10:22
                </p>
              </div>
              <Link to={'/chat'}>
                  <RiArrowRightSLine className="w-6 h-6 absolute right-2 bottom-2 text-purpleHome" />
              </Link>
            </div>
          </li>
          <li className="py-3 sm:py-4">
            <div className="flex items-center relative">
              <div className="flex-shrink-0">
                <img src={image} alt="camila" className='w-20 h-20 rounded-full' />
              </div>
              <div className="flex-1 min-w-0 ms-4">
                <p className="text-lg font-medium text-gray-900 truncate dark:text-white">
                  Bryant Rosa
                </p>
                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                  Lo que no hace Brian chiquito
                </p>
                <p className="text-sm text-gray-500 truncate dark:text-gray-400 absolute right-2 top-2">
                  10:22
                </p>
              </div>
              <Link to={'/chat'}>
                  <RiArrowRightSLine className="w-6 h-6 absolute right-2 bottom-2 text-purpleHome" />
              </Link>
            </div>
          </li>
          <li className="py-3 sm:py-4">
            <div className="flex items-center relative">
              <div className="flex-shrink-0">
                <img src={image} alt="camila" className='w-20 h-20 rounded-full' />
              </div>
              <div className="flex-1 min-w-0 ms-4">
                <p className="text-lg font-medium text-gray-900 truncate dark:text-white">
                  Juan Addiel
                </p>
                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                  El loco e duro...
                </p>
                <p className="text-sm text-gray-500 truncate dark:text-gray-400 absolute right-2 top-2">
                  10:22
                </p>
              </div>
              <Link to={'/chat'}>
                  <RiArrowRightSLine className="w-6 h-6 absolute right-2 bottom-2 text-purpleHome" />
              </Link>
            </div>
          </li>          
        </ul>
      </div>
    </div>

            <footer className='h-28 sticky bottom-0 z-20 text-sm flex items-center justify-around bg-white py-8'>
                <Link to='/home' className='flex items-center flex-col'>  
                        <RiHomeSmile2Line className='w-10 h-10' />
                        <span>Home</span>
                </Link>
                <Link to={'/requests'} className='flex items-center flex-col'>
                    <PiStarFourBold className='w-10 h-10' />
                    <span>Solicitudes</span>
                </Link>
                <Link to={'/ChatList'} className='flex items-center flex-col text-purpleHome'>
                    <IoChatbubbleEllipsesOutline className='w-10 h-10' />
                    <span>Chat</span>
                </Link>
            </footer>
        </div>
    )
}
