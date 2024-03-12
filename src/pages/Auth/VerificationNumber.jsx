import { TextInput, Dropdown, Button, Select, Label } from "flowbite-react";
import { HiOutlineArrowLeft } from "react-icons/hi";
import React, { useEffect, useState } from "react";
import { countries } from "../../utils/countries";
import { formatPhone } from "../../utils/formatPhone";
import { useDispatch, useSelector } from "react-redux";
import { setPhone } from "../../Slices/authSlice";
import { useNavigate } from "react-router-dom";

const VerificationNumber = () => {
  const dispatch = useDispatch();
  const [selectedCountry, setSelectedCountry] = useState(countries[0].value);
  const [number, setNumber] = useState("");
    const { phone } = useSelector((state) => state.auth);

  const navigate = useNavigate();

  const handleTelefonoChange = (event) => {
    const inputText = event.target.value;
    const formattedTelefono = formatPhone(inputText);
    setNumber(formattedTelefono);
  };
  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedCountry(selectedValue);
  };
  useEffect(() => {
    if(phone !==0){
    navigate("/register");
    }

  },[navigate, phone]);
  const handleSendPhone = (e) => {
    e.preventDefault();
    try {
      dispatch(setPhone({ selectedCountry, number }));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="flex items-center justify-center min-h-screen dark:bg-slate-900">
        <div className="w-96 p-4">
          <form onSubmit={handleSendPhone}>
            <div className="flex flex-col py-4">
              <h1 className="text-xl md:text-2xl font-bold dark:text-gray-100">
                Ingresa tu número de teléfono móvil (Opcional)
              </h1>
              <h2 className="mb-4 mt-5 dark:text-gray-100">
                Agrega tu teléfono móvil para ayudar a recuperar la cuenta.
              </h2>

              <div className="flex  w-full flex-row items-center">
                <Select
                  className="w-1/2 !text-4xl  text-slate-900 !pr-3 rounded-md  mr-2 md:mr-0 md:w-1/4"
                  id="countrySelect"
                  onChange={handleSelectChange}
                  value={selectedCountry}
                  sizing="lg"
                >
                  {countries.map((country) => (
                    <option key={country.iso2} value={country.value}>
                      {country.label} - {country.name.es}
                    </option>
                  ))}
                </Select>

                <TextInput
                  label="Número de teléfono"
                  placeholder="Ej. 829-297-0000"
                  value={number}
                  onChange={handleTelefonoChange}
                  sizing="lg"
                />
              </div>
            </div>

            <p className="text-gray-500 text-xs md:text-sm mb-2 md:mb-10">
              Consejo: Asegúrate de revisar la bandeja de entrada y la carpeta
              de correo no deseado.
            </p>
            <div className="flex flex-row mt-10 md:mt-0 justify-between md:flex-row md:mb-16 ">
              <Button className="bg-slate-100 text-slate-900 dark:bg-appColor dark:text-white hover:!bg-hoverAppColor hover:!text-white">
                Reenviar
              </Button>
            </div>

            <div className="flex flex-row mt-44 md:mt-0 justify-between md:flex-row md:justify-between">
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

export default VerificationNumber;
