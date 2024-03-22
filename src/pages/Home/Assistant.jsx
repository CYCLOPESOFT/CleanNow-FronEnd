import { Card } from 'flowbite-react';
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { RiHomeSmile2Line } from "react-icons/ri";
import { PiStarFourBold } from "react-icons/pi";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";


function Asistente() {
    return (
        <div className="bg-grayHome min-h-screen">
            <div className='bg-purpleHome w-full h-32 rounded-b-xl flex items-center justify-between px-8'>
                <div>
                    <Link to={'/home'}>
                        <IoIosArrowBack className="text-white w-6 h-6" />
                    </Link>
                </div>
                <span className="text-white text-2xl">Elegir asistente</span>
                <div></div> {/* Este div vacío ayuda a empujar el texto al centro */}

            </div>

            <div className="mt-4 flex justify-center" > {/* Ajuste de estilo para el filtro */}
                <div className="flex mt-2 items-center">
                    <div className='flex mr-16'>
                        <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#6F00DE" viewBox="0 0 24 24">
                            <path d="M10.83 5a3.001 3.001 0 0 0-5.66 0H4a1 1 0 1 0 0 2h1.17a3.001 3.001 0 0 0 5.66 0H20a1 1 0 1 0 0-2h-9.17ZM4 11h9.17a3.001 3.001 0 0 1 5.66 0H20a1 1 0 1 1 0 2h-1.17a3.001 3.001 0 0 1-5.66 0H4a1 1 0 1 1 0-2Zm1.17 6H4a1 1 0 1 0 0 2h1.17a3.001 3.001 0 0 0 5.66 0H20a1 1 0 1 0 0-2h-9.17a3.001 3.001 0 0 0-5.66 0Z" />
                        </svg>
                        <span className="ml-2 text-purpleHome ">Filtros</span>
                    </div>
                    
                    <div className='flex gap-2'>
                        <p className="rounded-lg text-purpleHome border-2 border-solid border-purpleHome py-1 px-2" >Córdoba</p>
                        <p className="rounded-lg text-purpleHome border-2 border-solid border-purpleHome py-1 px-2" >Valoraciones</p>
                    </div>
                    


                </div>
            </div>
            <div className="container mx-auto relative z-10">
                {/* Contenido principal */}
                <main className="App-main container pt-5">
                    {/* Tarjetas de asistentes */}
                    <Card className="assistant-card mb-8">
                        <div className='flex flex-col-2 flex-row'>
                            <div className='flex flex-col'>
                            <img src="src/assets/images/PaolaT.png" alt="Paola Torres" className="w-32 h-32 rounded-1.75rem mr-4 object-cover" />

                            <div className='rounded-lg bg-lightGreen text-white w-32 p-2 text-center mt-2'>
                                    $1,400/hr
                            </div>
                            </div>
                            <div className='flex flex-col gap-1'>
                               <h2 className="text-xl font-bold mb-1 flex">
                                Paola Torres
                                <Link style={{ display: 'inline-flex', alignItems: 'center', marginLeft: '0.25rem' }}>
                                        <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#01A890" viewBox="0 0 24 24">
                                            <path fill-rule="evenodd" d="M12 2c-.791 0-1.55.314-2.11.874l-.893.893a.985.985 0 0 1-.696.288H7.04A2.984 2.984 0 0 0 4.055 7.04v1.262a.986.986 0 0 1-.288.696l-.893.893a2.984 2.984 0 0 0 0 4.22l.893.893a.985.985 0 0 1 .288.696v1.262a2.984 2.984 0 0 0 2.984 2.984h1.262c.261 0 .512.104.696.288l.893.893a2.984 2.984 0 0 0 4.22 0l.893-.893a.985.985 0 0 1 .696-.288h1.262a2.984 2.984 0 0 0 2.984-2.984V15.7c0-.261.104-.512.288-.696l.893-.893a2.984 2.984 0 0 0 0-4.22l-.893-.893a.985.985 0 0 1-.288-.696V7.04a2.984 2.984 0 0 0-2.984-2.984h-1.262a.985.985 0 0 1-.696-.288l-.893-.893A2.984 2.984 0 0 0 12 2Zm3.683 7.73a1 1 0 1 0-1.414-1.413l-4.253 4.253-1.277-1.277a1 1 0 0 0-1.415 1.414l1.985 1.984a1 1 0 0 0 1.414 0l4.96-4.96Z" clip-rule="evenodd" />
                                        </svg>
                                </Link>
                              </h2>
                                <div>
                                <p className='text-lg'>35 años</p>
                                <p className='text-lg'>Córdoba</p>
                                </div>
                                <p className='text-xl text-gray-500'>
                                    <span className="star-icon" style={{ color: 'orange' }}>★</span>
                                    <span className="star-icon" style={{ color: 'orange' }}>★</span>
                                    <span className="star-icon" style={{ color: 'orange' }}>★</span>
                                    <span className="star-icon" style={{ color: 'orange' }}>★</span>
                                    <span className="star-icon" style={{ color: 'orange' }}>☆</span> 
                                    <span className='text-lg'>(10)</span>
                                </p>
                                <Link to={'/profileassistant'} className='cursor-pointer text-purpleHome text-lg' >
                                    <span className=''>5 años de experiencia <span style={{ color: '#6F00DE' }}>&gt;</span></span>
                                </Link>

                                
                            </div>
                        </div>
                        
                    </Card>

                    <Card className="assistant-card mb-8">
                        <div className='flex flex-col-2 flex-row'>
                            <div className='flex flex-col'>
                            <img src="src/assets/images/PaolaT.png" alt="Paola Torres" className="w-32 h-32 rounded-1.75rem mr-4 object-cover" />

                            <div className='rounded-lg bg-lightGreen text-white w-32 p-2 text-center mt-2'>
                                    $1,400/hr
                            </div>
                            </div>
                            <div className='flex flex-col gap-1'>
                               <h2 className="text-xl font-bold mb-1 flex">
                                Paola Torres
                                <Link style={{ display: 'inline-flex', alignItems: 'center', marginLeft: '0.25rem' }}>
                                        <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#01A890" viewBox="0 0 24 24">
                                            <path fill-rule="evenodd" d="M12 2c-.791 0-1.55.314-2.11.874l-.893.893a.985.985 0 0 1-.696.288H7.04A2.984 2.984 0 0 0 4.055 7.04v1.262a.986.986 0 0 1-.288.696l-.893.893a2.984 2.984 0 0 0 0 4.22l.893.893a.985.985 0 0 1 .288.696v1.262a2.984 2.984 0 0 0 2.984 2.984h1.262c.261 0 .512.104.696.288l.893.893a2.984 2.984 0 0 0 4.22 0l.893-.893a.985.985 0 0 1 .696-.288h1.262a2.984 2.984 0 0 0 2.984-2.984V15.7c0-.261.104-.512.288-.696l.893-.893a2.984 2.984 0 0 0 0-4.22l-.893-.893a.985.985 0 0 1-.288-.696V7.04a2.984 2.984 0 0 0-2.984-2.984h-1.262a.985.985 0 0 1-.696-.288l-.893-.893A2.984 2.984 0 0 0 12 2Zm3.683 7.73a1 1 0 1 0-1.414-1.413l-4.253 4.253-1.277-1.277a1 1 0 0 0-1.415 1.414l1.985 1.984a1 1 0 0 0 1.414 0l4.96-4.96Z" clip-rule="evenodd" />
                                        </svg>
                                </Link>
                              </h2>
                                <div>
                                <p className='text-lg'>35 años</p>
                                <p className='text-lg'>Córdoba</p>
                                </div>
                                <p className='text-xl text-gray-500'>
                                    <span className="star-icon" style={{ color: 'orange' }}>★</span>
                                    <span className="star-icon" style={{ color: 'orange' }}>★</span>
                                    <span className="star-icon" style={{ color: 'orange' }}>★</span>
                                    <span className="star-icon" style={{ color: 'orange' }}>★</span>
                                    <span className="star-icon" style={{ color: 'orange' }}>☆</span> 
                                    <span className='text-lg'>(10)</span>
                                </p>
                                <Link to={'/profileassistant'} className='cursor-pointer text-purpleHome text-lg' >
                                    <span className=''>5 años de experiencia <span style={{ color: '#6F00DE' }}>&gt;</span></span>
                                </Link>

                                
                            </div>
                        </div>
                        
                    </Card>

                    <Card className="assistant-card mb-8">
                        <div className='flex flex-col-2 flex-row'>
                            <div className='flex flex-col'>
                            <img src="src/assets/images/PaolaT.png" alt="Paola Torres" className="w-32 h-32 rounded-1.75rem mr-4 object-cover" />

                            <div className='rounded-lg bg-lightGreen text-white w-32 p-2 text-center mt-2'>
                                    $1,400/hr
                            </div>
                            </div>
                            <div className='flex flex-col gap-1'>
                               <h2 className="text-xl font-bold mb-1 flex">
                                Paola Torres
                                <Link style={{ display: 'inline-flex', alignItems: 'center', marginLeft: '0.25rem' }}>
                                        <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#01A890" viewBox="0 0 24 24">
                                            <path fill-rule="evenodd" d="M12 2c-.791 0-1.55.314-2.11.874l-.893.893a.985.985 0 0 1-.696.288H7.04A2.984 2.984 0 0 0 4.055 7.04v1.262a.986.986 0 0 1-.288.696l-.893.893a2.984 2.984 0 0 0 0 4.22l.893.893a.985.985 0 0 1 .288.696v1.262a2.984 2.984 0 0 0 2.984 2.984h1.262c.261 0 .512.104.696.288l.893.893a2.984 2.984 0 0 0 4.22 0l.893-.893a.985.985 0 0 1 .696-.288h1.262a2.984 2.984 0 0 0 2.984-2.984V15.7c0-.261.104-.512.288-.696l.893-.893a2.984 2.984 0 0 0 0-4.22l-.893-.893a.985.985 0 0 1-.288-.696V7.04a2.984 2.984 0 0 0-2.984-2.984h-1.262a.985.985 0 0 1-.696-.288l-.893-.893A2.984 2.984 0 0 0 12 2Zm3.683 7.73a1 1 0 1 0-1.414-1.413l-4.253 4.253-1.277-1.277a1 1 0 0 0-1.415 1.414l1.985 1.984a1 1 0 0 0 1.414 0l4.96-4.96Z" clip-rule="evenodd" />
                                        </svg>
                                </Link>
                              </h2>
                                <div>
                                <p className='text-lg'>35 años</p>
                                <p className='text-lg'>Córdoba</p>
                                </div>
                                <p className='text-xl text-gray-500'>
                                    <span className="star-icon" style={{ color: 'orange' }}>★</span>
                                    <span className="star-icon" style={{ color: 'orange' }}>★</span>
                                    <span className="star-icon" style={{ color: 'orange' }}>★</span>
                                    <span className="star-icon" style={{ color: 'orange' }}>★</span>
                                    <span className="star-icon" style={{ color: 'orange' }}>☆</span> 
                                    <span className='text-lg'>(10)</span>
                                </p>
                                <Link to={'/profileassistant'} className='cursor-pointer text-purpleHome text-lg' >
                                    <span className=''>5 años de experiencia <span style={{ color: '#6F00DE' }}>&gt;</span></span>
                                </Link>

                                
                            </div>
                        </div>
                        
                    </Card>

                    <Card className="assistant-card mb-8">
                        <div className='flex flex-col-2 flex-row'>
                            <div className='flex flex-col'>
                            <img src="src/assets/images/PaolaT.png" alt="Paola Torres" className="w-32 h-32 rounded-1.75rem mr-4 object-cover" />

                            <div className='rounded-lg bg-lightGreen text-white w-32 p-2 text-center mt-2'>
                                    $1,400/hr
                            </div>
                            </div>
                            <div className='flex flex-col gap-1'>
                               <h2 className="text-xl font-bold mb-1 flex">
                                Paola Torres
                                <Link style={{ display: 'inline-flex', alignItems: 'center', marginLeft: '0.25rem' }}>
                                        <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#01A890" viewBox="0 0 24 24">
                                            <path fill-rule="evenodd" d="M12 2c-.791 0-1.55.314-2.11.874l-.893.893a.985.985 0 0 1-.696.288H7.04A2.984 2.984 0 0 0 4.055 7.04v1.262a.986.986 0 0 1-.288.696l-.893.893a2.984 2.984 0 0 0 0 4.22l.893.893a.985.985 0 0 1 .288.696v1.262a2.984 2.984 0 0 0 2.984 2.984h1.262c.261 0 .512.104.696.288l.893.893a2.984 2.984 0 0 0 4.22 0l.893-.893a.985.985 0 0 1 .696-.288h1.262a2.984 2.984 0 0 0 2.984-2.984V15.7c0-.261.104-.512.288-.696l.893-.893a2.984 2.984 0 0 0 0-4.22l-.893-.893a.985.985 0 0 1-.288-.696V7.04a2.984 2.984 0 0 0-2.984-2.984h-1.262a.985.985 0 0 1-.696-.288l-.893-.893A2.984 2.984 0 0 0 12 2Zm3.683 7.73a1 1 0 1 0-1.414-1.413l-4.253 4.253-1.277-1.277a1 1 0 0 0-1.415 1.414l1.985 1.984a1 1 0 0 0 1.414 0l4.96-4.96Z" clip-rule="evenodd" />
                                        </svg>
                                </Link>
                              </h2>
                                <div>
                                <p className='text-lg'>35 años</p>
                                <p className='text-lg'>Córdoba</p>
                                </div>
                                <p className='text-xl text-gray-500'>
                                    <span className="star-icon" style={{ color: 'orange' }}>★</span>
                                    <span className="star-icon" style={{ color: 'orange' }}>★</span>
                                    <span className="star-icon" style={{ color: 'orange' }}>★</span>
                                    <span className="star-icon" style={{ color: 'orange' }}>★</span>
                                    <span className="star-icon" style={{ color: 'orange' }}>☆</span> 
                                    <span className='text-lg'>(10)</span>
                                </p>
                                <Link to={'/profileassistant'} className='cursor-pointer text-purpleHome text-lg' >
                                    <span className=''>5 años de experiencia <span style={{ color: '#6F00DE' }}>&gt;</span></span>
                                </Link>

                                
                            </div>
                        </div>
                        
                    </Card>

                </main>
            </div>

            {/* Footer */}
            <footer className='h-28 sticky bottom-0 z-20 flex items-center justify-around bg-white py-8'>
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
    );
}

export default Asistente;
