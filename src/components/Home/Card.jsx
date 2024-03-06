import { TiStarFullOutline } from "react-icons/ti";
import { BsFillPatchCheckFill } from "react-icons/bs";
import image from '../../assets/images/image.jpg'
import { MdChevronRight } from "react-icons/md";
export default function Card(){
    return(
        <>
            {/*card*/}
            <div className='pr-6 pt-2 relative mb-10 shadow-lg bg-white grid grid-cols-2 ml-4 min-w-max h-min-h p-2 gap-1 rounded-xl mt-4'>
                 <BsFillPatchCheckFill className='bg-white text-green-500 absolute top-2 right-2 w-4 h-4' />

                    <div className='rounded-xl'>
                        <img src={image} alt="camila" className='m-2 rounded-lg w-20 h-24 object-cover'/>
                    </div>

                    <div className='flex flex-col gap-2 justify-center'>
                        <span className='font-semibold'>Dan Tejada</span>
                        <div>
                        <TiStarFullOutline className='inline-block text-yellow-200'/> 
                        <span>4.5</span>
                        </div>
                        <a href='#' className='text-purpleHome'>
                            <span>Ver Perfil</span>
                            <MdChevronRight className='inline-block w-6 h-6'/>
                        </a>
                    </div>

                </div>
        </>
    )
}