import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { FiPlus } from "react-icons/fi";
export default function DirectionEdit() {
  return (
    <>
      {/* Header */}
      <div className="bg-purpleHome w-full h-32 rounded-b-xl absolute top-0 z-0"></div>
      <div className=" w-full h-24 flex  items-center container mx-auto pt-9 px-6 relative z-10 mb-6">
        <Link to={"/profile"}>
          <IoIosArrowBack className="text-white w-6 h-6" />
        </Link>
        <span className="text-white text-xl font-md ml-24">
          Editar Dirección
        </span>
      </div>

      {/* encabezado: listado de direcciones dentro de un div*/}
      <div className="mt-16 ml-5">
        <h2 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
          Ingresa los datos de tu dirección
        </h2>
      </div>
      <div className="flex justify-center items-center flex-col mt-6 ">
        <form className="flex max-w-md flex-col gap-4">
          <div>
            <div className="mb-2 block">
              <Label
                htmlFor="name1"
                value="Nombre completo (nombre y apellido)"
              />
            </div>
            <TextInput
              id="name1"
              type="text"
              placeholder="juan Perez"
              required
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="tell1" value="Numero de teléfono" />
            </div>
            <TextInput
              id="tell1"
              placeholder="(305) 833-3379"
              type="number"
              required
            />
            <span className="text-xs">
              Se puede utilizar para ayudar a la entrega
            </span>
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="tell1" value="Dirección" />
            </div>
            <TextInput
              id="direction1"
              placeholder="Nombre de la calle"
              type="text"
              required
            />
            <TextInput
              id="direction1"
              placeholder="Depto, suite, unidad, edificio, piso, etc. (opcional)"
              type="text"
              className="mt-3"
              required
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="tell1" value="Ciudad" />
            </div>
            <TextInput
              id="direction1"
              placeholder="Nombre de la calle"
              type="text"
              required
            />
            <div className=" mt-2 block">
              <Label htmlFor="tell1" value="Estado / Provincia" />
            </div>
            <TextInput
              id="direction1"
              placeholder="Depto, suite, unidad, edificio, piso, etc. (opcional)"
              type="text"
              className="mt-1"
              required
            />
          </div>
          <div className="flex items-center mt-4 gap-2">
            <Checkbox id="remember" />
            <Label htmlFor="remember">
              Establecer esta dirección como predeterminada
            </Label>
          </div>
          <Button className="bg-appColor" type="submit">
            Guardar dirección
          </Button>
        </form>
      </div>
    </>
  );
}
