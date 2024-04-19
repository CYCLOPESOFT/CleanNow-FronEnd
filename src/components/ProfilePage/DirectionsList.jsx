import { Button, Card } from "flowbite-react";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { FiPlus } from "react-icons/fi";
export default function DirectionList() {
  return (
    <>
      <div className="bg-purpleHome w-full h-32 rounded-b-xl absolute top-0 z-25"></div>
      <div className="w-full flex h-24 justify-between items-center container mx-auto pt-12 px-6 relative z-10">
        <Link to={"/profile"}>
          <IoIosArrowBack className="text-white w-6 h-6" />
        </Link>
        <span className="text-white text-xl font-md ml-10">
          Tus Direcciones
        </span>
        <a href="">
          <FiPlus className="inline-block text-white text-xl mr-1" />
          <Link to={'/editdirection'} className="text-white ">Añadir</Link>
        </a>
      </div>

      {/* encabezado: listado de direcciones dentro de un div*/}
      <div className="mt-16 ml-5">
        <h2 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
          Direcciones guardadas
        </h2>
      </div>
      <div className="flex justify-center items-center flex-col  ">
        <Card className="max-w-sm mt-8 mb-8">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Dan Luis Tejada Gonzalez
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Casa Residencia Itla
          </p>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Boca Chica
          </p>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Autopista Las Americas, Itla Road
          </p>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Republica Dominicana
          </p>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Numero telefónico: 809-506-4767
          </p>
          <Link to={"/editdirection"}>
            <Button className="bg-appColor w-full">Editar</Button>
          </Link>
          <Button className="bg-appColor">Descartar</Button>
        </Card>
        <Card className="max-w-sm mb-8">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Dan Luis Tejada Gonzalez
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Casa #24
          </p>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            San francisco de Macoris
          </p>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Urb.Almanzar, Calle D
          </p>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Rpublica Dominicana
          </p>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Numero telefónico: 829-923-0392
          </p>
          <Button className="bg-appColor">Editar</Button>
          <Button className="bg-appColor">Descartar</Button>
        </Card>
      </div>
    </>
  );
}
