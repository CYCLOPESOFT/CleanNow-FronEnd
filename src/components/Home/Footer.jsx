import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { PiStarFourBold } from "react-icons/pi";
import { RiHomeSmile2Line } from "react-icons/ri";
export default function Footer(){
    return(
        <>
         {/*footer de cleanNow*/}
         <footer className='h-28 sticky bottom-0 z-20 flex items-center justify-around bg-white py-8'>
                <a href='' className='flex items-center flex-col text-purpleHome'>
                    <RiHomeSmile2Line className='w-10 h-10'/>
                    <span>Home</span>
                </a>
                
                <a href='' className='flex items-center flex-col'>
                    <PiStarFourBold  className='w-10 h-10'/>
                    <span>Solicitudes</span>
                </a>
                
                <a href='' className='flex items-center flex-col'>
                    <IoChatbubbleEllipsesOutline className='w-10 h-10'/>
                    <span>Chat</span>
                </a>
            </footer>
        </>
    )
}