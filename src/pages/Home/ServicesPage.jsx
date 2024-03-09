import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoLocationOutline, IoCameraOutline } from "react-icons/io5";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { RiHomeSmile2Line } from "react-icons/ri";
import { PiStarFourBold } from "react-icons/pi";
import { Link } from "react-router-dom";
import { RiArrowRightSLine } from 'react-icons/ri';

export default function ServicesPage({selectedCardName}) {
    return (
        <div className="bg-grayHome h-full">
            <div className='bg-purpleHome w-full h-32 rounded-b-xl absolute top-0 z-0'></div>
            <div className="w-full h-36 flex justify-between items-center container mx-auto pt-3 px-8 relative z-10" style={{ marginBottom: '1.5rem' }}>
                <Link to={'/'}>
                    <IoIosArrowBack className="text-white w-6 h-6" />
                </Link>
                <span className="text-white text-xl ml-10 justify-center w-full">Limpieza {selectedCardName}</span>
            </div>

            <span className="text-black font-bold text-xl ml-10 justify-center w-full">Detalles del domicilio</span>

            <div className='bg-white h-min-height w-min-widht mt-8 rounded-lg mx-6 p-8' style={{ marginBottom: '1rem' }}>
                <form className="max-w-md mx-auto">
                    {/* Dirección */}
                    <div className="relative z-0 w-full mb-5 group">
                        <label
                            htmlFor="floating_direccion"
                            className="peer-focus:font-medium absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Dirección
                        </label>
                        <IoLocationOutline className="w-6 h-6 absolute left-0 top-4 text-purpleHome" />
                        <input
                            type="direccion"
                            name="floating_direccion"
                            id="floating_direccion"
                            className="block py-3 px-0 pl-10 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            required
                        />
                        <RiArrowRightSLine className="w-6 h-6 absolute right-2 top-4 text-purpleHome" />
                    </div>

                    {/* Piso/Departamento */}
                    <div className="relative z-0 w-full mb-5 group">
                        <label
                            htmlFor="floating_piso/departamento"
                            className="peer-focus:font-medium absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Piso/Departamento
                        </label>
                        <input
                            type="piso/departamento"
                            name="floating_piso/departamento"
                            id="floating_piso/departamento"
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            required
                        />
                    </div>

                    {/* Timbre/Portero */}
                    <div className="relative z-0 w-full mb-5 group">
                        <label
                            htmlFor="floating_timbre/portero"
                            className="peer-focus:font-medium absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Timbre/Portero
                        </label>
                        <input
                            type="timbre/portero"
                            name="floating_timbre/portero"
                            id="floating_timbre/portero"
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            required
                        />
                    </div>
                </form>
            </div>

            <div className="" style={{ marginBottom: '1rem' }}>
                <span className="text-black font-bold text-xl ml-10 justify-center w-full">Tipo de limpieza</span>
            </div>

            <textarea
                id="message"
                rows="8"
                className="p-2.5 w-89 text-sm text-gray-900 bg-white mx-6 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" style={{ marginBottom: '1rem' }}
                placeholder="Describe el tipo de limpieza que necesitan tus espacios para cumplir tus expectativas..."
            ></textarea>

            <div className="border border-purpleHome w-89 mx-6 p-4 rounded-lg flex items-center justify-center" style={{ marginBottom: '1rem' }}>
                <IoCameraOutline className="w-6 h-6 left-0 text-purpleHome" />
                <span className="text-purpleHome ml-2 font-medium">Agregar fotos de los espacios</span>
            </div>

            <footer className='h-28 sticky bottom-0 z-20 flex items-center justify-around bg-white py-8'>
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
