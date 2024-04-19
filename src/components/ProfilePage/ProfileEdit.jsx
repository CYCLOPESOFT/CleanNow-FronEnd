import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import image from "../../assets/images/image.jpg";
export default function ProfileEdit() {
  return (
    <>
      {/* Header */}
      <div className="bg-purpleHome w-full h-32 rounded-b-xl absolute top-0 z-0"></div>
      <div className=" w-full h-24 flex  items-center container mx-auto pt-1 px-6 relative z-10 mb-6">
        <Link to={"/profile"}>
          <IoIosArrowBack className="text-white w-6 h-6" />
        </Link>
        <span className="text-white text-xl font-md ml-28">Editar Perfil</span>
      </div>
      <main className="w-full min-h-screen py-1 md:w-2/3 lg:w-3/4">
        <div className="p-2 md:p-4">
          <div className="w-full px-6 pb-8 mt-8 sm:max-w-xl sm:rounded-lg">
            <h2 className="pl-6 text-2xl font-bold sm:text-xl text-center">
              Perfil del usuario
            </h2>

            <div className="grid max-w-2xl mx-auto mt-8">
              <div className="flex flex-col items-center space-y-5 sm:flex-row sm:space-y-0">
                <img
                  className="object-cover w-40 h-40 p-1 rounded-full ring-2 ring-indigo-300 dark:ring-indigo-500"
                  src={image}
                  alt="Bordered avatar"
                />

                <div className="flex flex-col space-y-5 sm:ml-8">
                  <button
                    type="button"
                    className="py-3.5 px-7 text-base font-medium text-indigo-100 focus:outline-none bg-appColor rounded-lg border border-indigo-200 hover:bg-indigo-900 focus:z-10 focus:ring-4 focus:ring-indigo-200 "
                  >
                    Cambiar foto
                  </button>
                  <button
                    type="button"
                    className="py-3.5 px-7 text-base font-medium text-indigo-900 focus:outline-none bg-white rounded-lg border border-indigo-200 hover:bg-indigo-100 hover:text-[#202142] focus:z-10 focus:ring-4 focus:ring-indigo-200 "
                  >
                    Eliminar foto
                  </button>
                </div>
              </div>

              <div className="items-center mt-8 sm:mt-14 text-[#202142]">
                <div className="flex flex-col items-center w-full mb-2 space-x-0 space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0 sm:mb-6">
                  <div className="w-full">
                    <label className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white">
                      Primer nombre
                    </label>
                    <input
                      type="text"
                      id="first_name"
                      className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
                      placeholder="Tu primer nombre"
                      required
                    />
                  </div>

                  <div className="w-full">
                    <label className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white">
                      Primer apellido
                    </label>
                    <input
                      type="text"
                      id="last_name"
                      className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
                      placeholder="Tu primer apellido"
                      required
                    />
                  </div>
                </div>

                <div className="mb-2 sm:mb-6">
                  <label className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white">
                    Tu correo electrónico
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
                    placeholder="tu.email@cleannow.com"
                    required
                  />
                </div>

                <div className="mb-2 sm:mb-6">
                  <label className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white">
                    Numero de telefono
                  </label>
                  <input
                    type="number"
                    id="profession"
                    className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
                    placeholder="tu numero de teléfono"
                    required
                  />
                </div>

                <div className="mb-6">
                  <label className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white">
                    Bio
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    className="block p-2.5 w-full text-sm text-indigo-900 bg-indigo-50 rounded-lg border border-indigo-300 focus:ring-indigo-500 focus:border-indigo-500 "
                    placeholder="Escribe unabiografía aquí ..."
                  ></textarea>
                </div>

                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="text-white bg-appColor  hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800"
                  >
                    Guardar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
