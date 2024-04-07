import { TbPencil } from "react-icons/tb";
import { IoLocationOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { LuUser2 } from "react-icons/lu";
import { CiCalendar } from "react-icons/ci";
import { FaRegClock } from "react-icons/fa";
import { GiVacuumCleaner } from "react-icons/gi";
import { IoIosArrowBack } from "react-icons/io";
export default function ResumeService() {
  return (
    <div className="bg-grayHome h-full">
      {/* Header */}
      <div className="bg-purpleHome w-full h-32 rounded-b-xl absolute top-0 z-0"></div>

      <div className=" w-full h-36 flex justify-between items-center container mx-auto pt-3 px-6 relative z-10 mb-6">
        <Link to={"/home"}>
          <IoIosArrowBack className="text-white w-6 h-6" />
        </Link>
        <span className="text-white text-xl font-md ml-8">
          Resumen Servicio
        </span>
        <Link href="">
          <TbPencil className="inline-block text-white text-xl mr-1" />
          <span className="text-white ">Editar</span>
        </Link>
      </div>

      <span className="text-black font-bold text-xl ml-8 justify-center w-full">
        Detalles Generales
      </span>
      {/* Form */}
      <div className="shadow-xl bg-white h-min-height w-min-widht mt-8 rounded-xl mx-4 p-6 mb-12">
        <form className="max-w-md mx-auto">
          {/* Dirección */}

          <div className="flex border-b-2 border-b-solid border-gray-300 mb-3  pb-3 items-center">
            <div className="mr-4">
              <IoLocationOutline className="text-purpleHome w-8 h-8" />
            </div>
            <div className="flex flex-col">
              <span className=" text-gray-500 mb-2">Direccion</span>
              <span className="w-4/5">
                Departamento . Piso 2 B Lima 12345 . Cordoba
              </span>
            </div>
          </div>

          {/* Asistente */}
          <div className="flex border-b-2 border-b-solid border-gray-300 mb-3 p-2 pb-3 items-center">
            <div className="mr-4">
              <LuUser2 className="text-purpleHome w-8 h-8" />
            </div>
            <div className="flex flex-col">
              <span className="text-gray-500 mb-2">Asistente</span>
              <span className="w-4/5">
                Paola Torres . 35 años Cordoba capital
              </span>
            </div>
          </div>

          {/* Fecha y Hora */}
          <div className="flex border-b-2 border-b-solid border-gray-300 mb-3 p-2 pb-3 items-center">
            <div className="mr-4">
              <CiCalendar className="text-purpleHome w-8 h-8" />
            </div>
            <div className="flex flex-col">
              <span className="text-gray-500">Fecha</span>
              <span className="mr-6">Jue 10/08/2024</span>
            </div>

            <div className="mr-4">
              <FaRegClock className="text-purpleHome w-6 h-6" />
            </div>

            <div className="flex flex-col">
              <span className="text-gray-500">Hora</span>
              <span className="">8:00 AM</span>
            </div>
          </div>

          {/* Descripcion */}

          <div className="flex mb-3 p-2 pb-3 items-center">
            <div className="mr-4">
              <GiVacuumCleaner className="text-purpleHome w-8 h-8" />
            </div>
            <div className="flex flex-col">
              <span className=" text-gray-500 ">Descripcion</span>
              <span className="w-full">
                !Hola! Necesito una limpieza general de mi depto y ademas,
                limpieza de vidrios y ventanas.
              </span>
            </div>
          </div>
        </form>
      </div>

      {/* Resume Payment */}

      <span className="text-black font-bold text-xl ml-8 justify-center w-full">
        Resumen de pago
      </span>
      <div
        className="shadow-xl bg-white h-min-height w-min-widht mt-6 rounded-xl mx-4 p-6"
        style={{ marginBottom: "1rem" }}
      >
        <form className="max-w-md mx-auto">
          {/* Total de pago */}

          <div className="flex flex-col border-b-2 border-b-solid border-gray-300 mb-3 pb-3 px-2 text-lg">
            <div className="flex justify-between mb-2">
              <span className="">Total</span>
              <span>2 Horas</span>
            </div>

            <div className="flex justify-between mb-2">
              <span>Tarifa/Hora</span>
              <span>$1.400</span>
            </div>
          </div>

          <div>
            <div className="flex justify-between mb-2 font-bold px-2 text-lg">
              <span className="">Total</span>
              <span>$2.800</span>
            </div>
          </div>
        </form>
      </div>

      {/* Footer */}
      <footer className="h-28 sticky bottom-0 z-20 flex items-center bg-white py-8">
        <div className="flex justify-between w-full px-8">
          <div className="flex flex-col font-semibold text-lg">
            <span>Total</span>
            <span>$2.800</span>
          </div>

          <Link to={"/paymentMethod"}>
            <button className="bg-purpleHome hover:bg-purple-800 text-white font-semibold text-center px-16 py-3 rounded-lg">
              Ir a pagar
            </button>
          </Link>
        </div>
      </footer>
    </div>
  );
}
