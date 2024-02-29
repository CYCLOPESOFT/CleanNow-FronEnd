import { TextInput, Button } from "flowbite-react";
import { HiOutlineArrowLeft } from "react-icons/hi";

const VerificationNumber = () => {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-96 p-4">
          <div className="flex flex-col py-4">
            <h1 className="text-xl md:text-2xl font-bold">
              Ingresa tu número de teléfono móvil (Opcional)
            </h1>
            <h2 className="mb-4 mt-5">
              Agrega tu teléfono móvil para ayudar a recuperar la cuenta.
            </h2>

            <div className="flex flex-row md:flex-row mb-4 md:justify-start text-center md:text-center">
              <button
                id="dropdownDefaultButton"
                data-dropdown-toggle="dropdown"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                type="button"
              >
                Dropdown button{" "}
                <svg
                  className="w-2.5 h-2.5 ms-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>

              <div
                id="dropdown"
                className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
              >
                <ul
                  className="py-2 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdownDefaultButton"
                >
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Dashboard
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Settings
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Earnings
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Sign out
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <p className="text-gray-500 text-xs md:text-sm mb-2 md:mb-10">
              Consejo: Asegúrate de revisar la bandeja de entrada y la carpeta
              de correo no deseado.
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
    </>
  );
};

export default VerificationNumber;
