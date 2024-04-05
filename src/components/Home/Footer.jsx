import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { PiStarFourBold } from "react-icons/pi";
import { RiHomeSmile2Line } from "react-icons/ri";
import { Link } from "react-router-dom";

export default function Footer(){
    return(
        <>
         {/*footer de cleanNow*/}
         <footer className='h-28 sticky bottom-0 z-20 flex items-center justify-around bg-white py-8'>
                
                <Link to='/home' className='flex items-center flex-col text-purpleHome'>
                    <RiHomeSmile2Line className='w-10 h-10'/>
                    <span>Home</span>
                </Link>
                
                <Link to='/requests' className='flex items-center flex-col'>
                
                    <PiStarFourBold  className='w-10 h-10'/>
                    <span>Solicitudes</span>
                
                </Link>
                
                <Link to={'/ChatList'} className='flex items-center flex-col'>
                    <IoChatbubbleEllipsesOutline className='w-10 h-10'/>
                    <span>Chat</span>
                </Link>
            </footer>
        </>
    )
}