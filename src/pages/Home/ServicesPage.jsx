import { RiArrowLeftSLine, RiMapPinLine } from 'react-icons/ri';
import { MdLocationOn } from 'react-icons/md';
import { RiArrowRightSLine } from 'react-icons/ri';

export default function ServicesPage(){
    return(       
        <div className=''>
            <h1></h1>            

            <div className="flex items-center" style={{ marginBottom: '4rem' }}>
                <RiArrowLeftSLine className="w-10 h-10 text-gray-800 dark:text-white" />
                <p className="flex items-center ml-2 justify-center w-full">Limpieza departamento</p>
            </div>

            <p className="font-bold" style={{ marginBottom: '1rem' }}>Detalle del domicilio</p>

            <div className='bg-gray-100 h-min-height w-min-widht mt-8 rounded-lg mx-6 p-8' style={{ marginBottom: '1rem' }}>
                <form className="max-w-md mx-auto">
                    <div className="relative z-0 w-full mb-5 group">
                        <label
                            htmlFor="floating_direccion"
                            className="peer-focus:font-medium absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-0 -z-1 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Dirección
                        </label>
                        <RiMapPinLine className="w-6 h-6 text-gray-800 dark:text-white mr-2" />
                        <input
                            type="direccion"
                            name="floating_direccion"
                            id="floating_direccion"
                            className="block py-0 px-10 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            required
                        />
                    </div>

                    <div className="relative z-0 w-full mb-5 group">
                        <input
                            type="piso/departamento"
                            name="floating_piso/departamento"
                            id="floating_piso/departamento"
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            required
                        />
                        <label
                            htmlFor="floating_piso/departamento"
                            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Piso/Departamento
                        </label>
                    </div>

                    <div className="relative z-0 w-full mb-5 group">
                        <input
                            type="timbre/portero"
                            name="floating_timbre/portero"
                            id="floating_timbre/portero"
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            required
                        />
                        <label
                            htmlFor="floating_timbre/portero"
                            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >      
                            Timbre/Portero
                        </label>
                    </div>
                </form>
            </div>

            <p className="font-bold mb-4">Tipos de Limpiza</p>
        </div>        
    )
}
