import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { RiHomeSmile2Line } from "react-icons/ri";
import { PiStarFourBold } from "react-icons/pi";
import { GoCreditCard } from "react-icons/go";
import { IoWalletOutline } from "react-icons/io5";
import { LuPlusCircle } from "react-icons/lu";


export default function PaymentMethod() {
    return(
        <div className=" h-screen bg-grayHome">

            <div className="bg-purpleHome w-full h-32 rounded-b-xl flex items-center justify-between px-8 mb-8">
        <div>
          <Link to={"/resumeService"}>
            <IoIosArrowBack className="text-white w-6 h-6" />
          </Link>
        </div>
        <span className="text-white text-xl">Metodo de pago</span>
        <div></div> {/* Este div vacío ayuda a empujar el texto al centro */}
            </div>

            <span className="text-black font-bold text-xl ml-8 justify-center w-full">¿Como te gustaria pagar?</span>

            <div className="flex flex-col bg-white rounded-xl mx-4 mt-4 shadow-xl text-lg mb-10">
                <div className="flex justify-between py-10 px-6 w-full h-8 items-center border-b-2 border-solid border-gray-300 pb-10">
                    <div>
                        <GoCreditCard className="bg-PaymentMethod p-2 inline-block mr-4 text-purpleHome w-12 h-12 rounded-xl"/>
                        <span>Tarjeta de credito/debito</span>
                    </div>
                    <input type="radio" name="payment"/>
                </div>
                <div className="flex justify-between py-10 px-6 w-full h-8 items-center ">
                    <div>
                        <IoWalletOutline className="bg-PaymentMethod p-2 inline-block  mr-4 text-purpleHome w-12 h-12 rounded-xl"/>
                        <span>Efectivo</span>
                    </div>
                    <input type="radio" name="payment"/>
                </div>
            </div>

            <div className="bg-white text-purpleHome mt-6 mx-4 p-4 rounded-xl mb-8">
                <LuPlusCircle className="inline-block mr-4 text-purpleHome w-8 h-8"/>
                <span className="text-lg">Añadir otro metodo de pago</span>
            </div>

            <Link to={'/requests'}>
                <button className="bg-purpleHome hover:bg-purple-800 text-white font-semibold text-center px-16 py-3 rounded-lg mt-8 ml-14 mb-72">
                  Elegir medio de pago
                </button>
              </Link>

            <footer className='h-28 sticky bottom-0 z-20 text-sm flex items-center justify-around bg-white py-8'>
                <Link to='/home'>
                    <a href='' className='flex items-center flex-col'>
                        <RiHomeSmile2Line className='w-10 h-10' />
                        <span>Home</span>
                    </a>
                </Link>
                <Link to={'/requests'} className='flex items-center flex-col'>
                    <PiStarFourBold className='w-10 h-10' />
                    <span>Solicitudes</span>
                </Link>
                <a href='' className='flex items-center flex-col'>
                    <IoChatbubbleEllipsesOutline className='w-10 h-10' />
                    <span>Chat</span>
                </a>
            </footer>
      </div>
    )
}