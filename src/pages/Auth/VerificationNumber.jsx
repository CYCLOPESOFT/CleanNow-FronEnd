import { TextInput, Dropdown, Button, Select, Label } from "flowbite-react";
import { HiOutlineArrowLeft } from "react-icons/hi";
import React, { useState } from "react";
// Lista de países con códigos numéricos ISO 3166-1

const countries = [
  {
    label: "🇦🇫",
    name: {
      es: "Afganistán",
      en: "Afghanistan",
    },
    value: "+93",
    iso2: "AF",
  },
  {
    label: "🇦🇱",
    name: {
      es: "Albania",
      en: "Albania",
    },
    value: "+355",
    iso2: "AL",
  },
  {
    label: "🇩🇿",
    name: {
      es: "Argelia",
      en: "Algeria",
    },
    value: "+213",
    iso2: "DZ",
  },
  {
    label: "🇦🇩",
    name: {
      es: "Andorra",
      en: "Andorra",
    },
    value: "+376",
    iso2: "AD",
  },
  {
    label: "🇦🇴",
    name: {
      es: "Angola",
      en: "Angola",
    },
    value: "+244",
    iso2: "AO",
  },
  {
    label: "🇦🇬",
    name: {
      es: "Antigua y Barbuda",
      en: "Antigua and Barbuda",
    },
    value: "+1 268",
    iso2: "AG",
  },
  {
    label: "🇦🇷",
    name: {
      es: "Argentina",
      en: "Argentina",
    },
    value: "+54",
    iso2: "AR",
  },
  {
    label: "🇦🇲",
    name: {
      es: "Armenia",
      en: "Armenia",
    },
    value: "+374",
    iso2: "AM",
  },
  {
    label: "🇦🇺",
    name: {
      es: "Australia",
      en: "Australia",
    },
    value: "+61",
    iso2: "AU",
  },
  {
    label: "🇦🇹",
    name: {
      es: "Austria",
      en: "Austria",
    },
    value: "+43",
    iso2: "AT",
  },
  {
    label: "🇦🇿",
    name: {
      es: "Azerbaiyán",
      en: "Azerbaijan",
    },
    value: "+994",
    iso2: "AZ",
  },
  {
    label: "🇧🇸",
    name: {
      es: "Bahamas",
      en: "Bahamas",
    },
    value: "+1 242",
    iso2: "BS",
  },
  {
    label: "🇧🇭",
    name: {
      es: "Bahréin",
      en: "Bahrain",
    },
    value: "+973",
    iso2: "BH",
  },
  {
    label: "🇧🇩",
    name: {
      es: "Bangladés",
      en: "Bangladesh",
    },
    value: "+880",
    iso2: "BD",
  },
  {
    label: "🇧🇧",
    name: {
      es: "Barbados",
      en: "Barbados",
    },
    value: "+1 246",
    iso2: "BB",
  },
  {
    label: "🇧🇾",
    name: {
      es: "Bielorrusia",
      en: "Belarus",
    },
    value: "+375",
    iso2: "BY",
  },
  {
    label: "🇧🇪",
    name: {
      es: "Bélgica",
      en: "Belgium",
    },
    value: "+32",
    iso2: "BE",
  },
  {
    label: "🇧🇿",
    name: {
      es: "Belice",
      en: "Belize",
    },
    value: "+501",
    iso2: "BZ",
  },
  {
    label: "🇧🇯",
    name: {
      es: "Benín",
      en: "Benin",
    },
    value: "+229",
    iso2: "BJ",
  },
  {
    label: "🇧🇹",
    name: {
      es: "Bután",
      en: "Bhutan",
    },
    value: "+975",
    iso2: "BT",
  },
  {
    label: "🇧🇴",
    name: {
      es: "Bolivia",
      en: "Bolivia",
    },
    value: "+591",
    iso2: "BO",
  },
  {
    label: "🇧🇦",
    name: {
      es: "Bosnia y Herzegovina",
      en: "Bosnia and Herzegovina",
    },
    value: "+387",
    iso2: "BA",
  },
  {
    label: "🇧🇼",
    name: {
      es: "Botsuana",
      en: "Botswana",
    },
    value: "+267",
    iso2: "BW",
  },
  {
    label: "🇧🇷",
    name: {
      es: "Brasil",
      en: "Brazil",
    },
    value: "+55",
    iso2: "BR",
  },
  {
    label: "🇧🇳",
    name: {
      es: "Brunéi",
      en: "Brunei",
    },
    value: "+673",
    iso2: "BN",
  },
  {
    label: "🇧🇬",
    name: {
      es: "Bulgaria",
      en: "Bulgaria",
    },
    value: "+359",
    iso2: "BG",
  },
  {
    label: "🇧🇫",
    name: {
      es: "Burkina Faso",
      en: "Burkina Faso",
    },
    value: "+226",
    iso2: "BF",
  },
  {
    label: "🇧🇮",
    name: {
      es: "Burundi",
      en: "Burundi",
    },
    value: "+257",
    iso2: "BI",
  },
  {
    label: "🇨🇻",
    name: {
      es: "Cabo Verde",
      en: "Cabo Verde",
    },
    value: "+238",
    iso2: "CV",
  },
  {
    label: "🇰🇭",
    name: {
      es: "Camboya",
      en: "Cambodia",
    },
    value: "+855",
    iso2: "KH",
  },
  {
    label: "🇨🇲",
    name: {
      es: "Camerún",
      en: "Cameroon",
    },
    value: "+237",
    iso2: "CM",
  },
  {
    label: "🇨🇦",
    name: {
      es: "Canadá",
      en: "Canada",
    },
    value: "+1",
    iso2: "CA",
  },
  {
    label: "DO",
    name: {
      es: "Republica Dominicana",
      en: "Dominiacan Republic",
    },
    value: "+1",
    iso2: "DO",
  },
];

const VerificationNumber = () => {
  const [selectedCountry, setSelectedCountry] = useState(countries[0].value);

  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedCountry(selectedValue);
  };
  return (
    <>
      <div className="flex items-center justify-center min-h-screen dark:bg-slate-900">
        <div className="w-96 p-4">
          <div className="flex flex-col py-4">
            <h1 className="text-xl md:text-2xl font-bold dark:text-gray-100">
              Ingresa tu número de teléfono móvil (Opcional)
            </h1>
            <h2 className="mb-4 mt-5 dark:text-gray-100">
              Agrega tu teléfono móvil para ayudar a recuperar la cuenta.
            </h2>
            <div className="flex  w-full flex-row items-center">
              {/* mostrar data en un select tomando la data desde el objeto country y que el seleccionado se muestre en el label */}
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
                placeholder="Ej. 1234567890"
                value={selectedCountry}
                sizing="lg"
              />
            </div>
          </div>

          <p className="text-gray-500 text-xs md:text-sm mb-2 md:mb-10">
            Consejo: Asegúrate de revisar la bandeja de entrada y la carpeta de
            correo no deseado.
          </p>
          <div className="flex flex-row mt-10 md:mt-0 justify-between md:flex-row md:mb-16 ">
            <Button
              type="submit"
              className="bg-slate-100 text-slate-900 dark:bg-appColor dark:text-white hover:!bg-hoverAppColor hover:!text-white"
            >
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
        </div>
      </div>
    </>
  );
};

export default VerificationNumber;
