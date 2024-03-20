import { LuHome } from "react-icons/lu";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { IoBagOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function Form({ selectedCard, setSelectedCard }) {
  const handleCardClick = (card) => {
    setSelectedCard(card === selectedCard ? null : card);
  };

  return (
    <>
      {/*form*/}
      <div className='bg-white h-min-h w-min-w mt-8 rounded-xl mx-6 p-8 relative z-10'>
        <h1 className='text-xl text-purpleHome font-semibold'>¿Qué necesitás limpiar hoy?</h1>
        <div className='flex justify-between w-full mt-4 gap-4'>
          <Link
            className={`flex justify-center items-center flex-col container mx-auto border-solid border-2 border-black rounded-lg w-24 h-28 ${
              selectedCard === 'Casa' ? 'bg-purpleHome text-white' : 'bg-white text-purpleHome'
            }`}
            onClick={() => handleCardClick('Casa')}
            to='#'
          >
            <LuHome className={`text-purpleHome w-12 h-12 ${
              selectedCard === 'Casa' ? 'bg-purpleHome text-white' : 'bg-white text-purpleHome'
            } `} />
            <span>Casa</span>
          </Link>
          <Link
            className={`flex justify-center items-center flex-col container mx-auto border-solid border-2 border-black rounded-lg w-24 h-28 ${
              selectedCard === 'Departamento' ? 'bg-purpleHome text-white' : 'bg-white text-purpleHome'
            }`}
            onClick={() => handleCardClick('Departamento')}
          >
            <HiOutlineBuildingOffice2 className={`text-purpleHome w-12 h-12 ${
              selectedCard === 'Departamento' ? 'bg-purpleHome text-white' : 'bg-white text-purpleHome'
            } `} />
            <span>Depto</span>
          </Link>
          <Link
            className={`flex justify-center items-center flex-col container mx-auto border-solid border-2 border-black rounded-lg w-24 h-28 ${
              selectedCard === 'Oficina' ? 'bg-purpleHome text-white' : 'bg-white text-purpleHome'
            }`}
            onClick={() => handleCardClick('Oficina')}
          >
            <IoBagOutline className={`text-purpleHome w-12 h-12 ${
              selectedCard === 'Oficina' ? 'bg-purpleHome text-white' : 'bg-white text-purpleHome'
            } `} />
            <span>Oficina</span>
          </Link>
        </div>
        <Link to={`/service`}>
          <button className='w-full mt-6 bg-purpleHome text-white p-4 rounded-lg text-xl font-semibold shadow-lg'>Solicitar servicio</button>
        </Link>
      </div>
    </>
  )
}
