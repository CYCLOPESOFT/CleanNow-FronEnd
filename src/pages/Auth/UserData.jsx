import { TextInput, Dropdown, Button, Select, Label } from "flowbite-react";
import { HiOutlineArrowLeft } from "react-icons/hi";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useRegistrateMutation } from "../../Slices/userApiSlice";
import { setStateRegister } from "../../Slices/authSlice";


const UserData = () => {

  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch(); 
  const [registrate, { loading }] = useRegistrateMutation();
  const { email, phone, register } = useSelector((state) => state.auth);
  useEffect(()=>{
    if(register!== false){
      navigate("/home")
    }
  },[navigate, register])


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await registrate({ name:name, apellido:lastName, phoneNumber:phone, email:email });
      dispatch(setStateRegister());
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="flex items-center justify-center min-h-screen dark:bg-slate-900">
        <div className="w-96 p-4">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col py-4">
              <h1 className="text-xl md:text-2xl font-bold dark:text-gray-100">
                Información básica del usuario
              </h1>
              <h2 className="mb-4 mt-5 dark:text-gray-100">
                Agrega tu nombre y apellido para obtener un trato más
                personalizado en CleanNow
              </h2>
              <div className="flex  w-full flex-wrap items-center">
                <div className="mb-2 block">
                  <Label
                    htmlFor="file-upload"
                    className="text-xs !text-gray-500"
                    value="Nombre/s"
                  />
                </div>
                <TextInput
                  className="mb-4 w-full md:mb-3 mr-2 md:mr-4"
                  label="Nombre completo"
                  placeholder="Ej. Juan alberto"
                  sizing="lg"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <div className="mb-2 block">
                  <Label
                    htmlFor="file-upload"
                    className="text-xs !text-gray-500"
                    value="Apellidos"
                  />
                </div>
                <TextInput
                  className="mb-4 w-full md:mb-3 mr-2 md:mr-4"
                  label="Apellidos completos"
                  placeholder="Ej. Perez Lopez"
                  sizing="lg"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
            </div>

            <p className="text-gray-500 text-xs md:text-sm mb-2 md:mb-10">
              Consejo: Al momento de Ingresar tu nombre y apellido asegúrate de
              que este correctamente escrito.
            </p>
            <div className="flex flex-row mt-10 md:mt-0 justify-between md:flex-row  "></div>

            <div className="flex flex-row md:mt-0 justify-between md:flex-row md:justify-between">
              <Button
                pill
                className="mb-2 md:mb-0 md:mr-2 bg-slate-100 text-slate-900 dark:text-white dark:bg-appColor hover:!bg-hoverAppColor hover:!text-white"
              >
                <HiOutlineArrowLeft className="h-6 w-6" />
              </Button>
              <Button
                type="submit"
                className="bg-slate-100 text-slate-900 dark:bg-appColor dark:text-white hover:!bg-hoverAppColor hover:!text-white"
              >
                Siguiente
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default UserData;
