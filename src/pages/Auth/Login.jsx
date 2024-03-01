import React from "react";
import { Button, TextInput } from "flowbite-react";
import { HiOutlineArrowLeft } from "react-icons/hi";
import LoginButton from "/src/components/Login/LoginButton";
export default function Login() {
  return (
    <div className="flex w-full justify-center items-center h-screen  dark:bg-gray-900">
      <div className="w-96 p-4">
        <div className="flex flex-col py-4">
          <h1 className="text-2xl md:text-2xl font-medium dark:text-gray-300">
            ¿Cuál es tu número
          </h1>
          <h2 className="text-2xl md:text-2xl font-medium dark:text-gray-300 ">
            teléfono o tu
          </h2>
          <h2 className="mb-4 text-base md:text-2xl font-medium dark:text-gray-300">
            correo electrónico?
          </h2>
          <div className="mb-4 block">
            <TextInput
              id="email3"
              type="email"
              placeholder="Ingresa tu teléfono o correo electrónico"
              sizing="lg"
              required
            />
          </div>
          <div className="mb-2 block">
            <Button
              label="2"
              className="w-full bg-appColor py-2 hover:!bg-hoverAppColor dark:bg-appColor dark:hover:bg-hoverAppColor"
            >
              Continuar
            </Button>
          </div>
          <div className="flex items-center mb-4 pt-3">
            <hr className="flex-1 border-t border-gray-700" />
            <span className="mx-4 text-gray-700">o</span>
            <hr className="flex-1 border-t border-gray-700" />
          </div>
          <LoginButton
            title={"Continuar con Google"}
            image={
              "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/google/google-original.svg"
            }
          />
          <LoginButton
            className="my-3"
            title={"Continuar con Github"}
            image={"https://cdn-icons-png.flaticon.com/512/25/25231.png"}
          />
          <LoginButton
            className="my-3"
            title={"Continuar con Facebook"}
            image={
              "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png"
            }
          />

          <p className="text-login text-gray-500 text-xs md:text-sm mb-2 mt-4 md:mb-10">
            Al continuar, aceptas recibir llamadas, WhatsApp o SMS de Uber y de
            sus afiliados al número proporcionado, incluso de forma automática.
          </p>
        </div>
      </div>
    </div>
  );
}
