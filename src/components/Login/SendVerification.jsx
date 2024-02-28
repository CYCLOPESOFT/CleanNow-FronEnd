import { TextInput, Button } from "flowbite-react";
import { HiOutlineArrowLeft } from "react-icons/hi";

const SendVerification = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-80 p-4">
        <div className="flex flex-col py-4">
          <h1 className="text-xl md:text-xl font-bold">
            Ingresa el código de 4 dígitos
          </h1>
          <h2 className="text-xl md:text-xl font-bold">que se te envió a:</h2>
          <h2 className="mb-4 text-base md:text-xl font-bold">
            addieljaquez@gmail.com
          </h2>

          <div className="flex flex-row md:flex-row mb-4 md:justify-start text-center md:text-center">
            <input
              type="number"
              className="rounded-md focus:ring-2 focus:ring-inset focus:ring-indigo-600 w-10 md:w-11 mr-2 border-gray-400 mb-2 md:mb-0 appearance-none md:appearance-textfield"
            />

            <input
              type="number"
              className="rounded-md focus:ring-2 focus:ring-inset focus:ring-indigo-600 w-10 md:w-11 mr-2 border-gray-400 mb-2 md:mb-0 border-spacing-60 overflow-hidden appearance-none"
            />
            <input
              type="number"
              className="rounded-md focus:ring-2 focus:ring-inset focus:ring-indigo-600 w-10 md:w-11 mr-2 border-gray-400 mb-2 md:mb-0"
            />
            <input
              type="number"
              className="rounded-md focus:ring-2 focus:ring-inset focus:ring-indigo-600 w-10 md:w-11 mr-2 border-gray-400 mb-2 md:mb-0"
            />
          </div>

          <p className="text-gray-500 text-xs md:text-sm mb-2 md:mb-10">
            Consejo: Asegúrate de revisar la bandeja de entrada y la carpeta de
            correo no deseado.
          </p>
          <div className="flex flex-row mt-10 md:mt-0 justify-between md:flex-row md:mb-16 ">
            <Button type="submit" className="bg-slate-100 text-slate-900">
              Reenviar
            </Button>
          </div>

          <div className="flex flex-row mt-44 md:mt-0 justify-between md:flex-row md:justify-between">
            <Button
              pill
              className="mb-2 md:mb-0 md:mr-2 bg-slate-100 text-slate-900"
            >
              <HiOutlineArrowLeft className="h-6 w-6" />
            </Button>
            <Button type="submit" className="bg-slate-100 text-slate-900">
              Siguiente
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SendVerification;
