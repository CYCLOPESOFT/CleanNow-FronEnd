import { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoLocationOutline, IoCameraOutline } from "react-icons/io5";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { RiHomeSmile2Line } from "react-icons/ri";
import { PiStarFourBold } from "react-icons/pi";
import { Link, useNavigate } from "react-router-dom";
import { RiArrowRightSLine } from 'react-icons/ri';
import { useSelector, useDispatch } from "react-redux";
import { sendDomicileDetails } from '../../Slices/apiDomicileSlice';
import { setDomicile } from "../../Slices/authSlice";


export default function ServicesPage() {
    const selected = useSelector((state)=>state.selected.request);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    let userInfoString = localStorage.getItem("userInfo");
    let userInfo = JSON.parse(userInfoString);
    const [formData, setFormData] = useState({
      addresses: "",
      apt: "",
      typeClean: "",
      time: "", // Agregar estado para almacenar el valor de tiempo seleccionado
      userId: userInfo.id,
      timbre:""
    });
    const [redirect, setRedirect] = useState(false)   

    // const handleFileChange = (event) => {
    //     const file = event.target.files[0];
    //     const data = new FormData()
    //     data.append("image", file)
    //     fetch("https://api.imgbb.com/1/upload?key=fad141938e0a0157245c990efed11b15", {
    //         method: "POST",
    //         body: data
    //     }).then(response => response.json())
    //     .then(data => {
    //         console.log(data.data.display_url);
    //         setFormData({
    //             ...formData,
    //             imageDomicile: data.data.display_url
    //     })
        
    //        // Asigna el nombre del archivo al estado imageDomicile
    //     });
    //   };
      
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleRadioChange = (e) => {
        setFormData({
            ...formData,
            time: e.target.value // Asignar el valor del radio button a time
        });
    };
    

    const [formErrors, setFormErrors] = useState({
      addresses: "",
      apt: "",
      typeClean: "",
      time: "",
      timbre:""
    });
    
    const handleSubmit = () => {
        // Validar los datos antes de enviarlos al servidor
        const errors = {};
    
        if (!formData.addresses.trim()) {
            errors.addresses = "Por favor, ingresa una dirección.";
        }
    
        if (!formData.apt.trim()) {
            errors.apt = "Por favor, ingresa un piso/departamento.";
        }
    
        if (!formData.typeClean.trim()) {
            errors.typeClean = "Por favor, ingresa el tipo de limpieza.";
        }
    
        if (!formData.time) {
            errors.time = "Por favor, selecciona el tiempo de limpieza.";
        }
    
        if (Object.keys(errors).length > 0) {
            setFormErrors(errors);
            return;
        }
    
        navigate("/assistant");
        dispatch(setDomicile(formData));
        dispatch(sendDomicileDetails(formData));
    };
    
    

    return (
      <div className="bg-grayHome h-full">
        <div className="bg-purpleHome w-full h-32 rounded-b-xl absolute top-0 z-0"></div>
        <div
          className="w-full h-36 flex justify-between items-center container mx-auto pt-3 px-8 relative z-10"
          style={{ marginBottom: "1.5rem" }}
        >
          <Link to={"/home"}>
            <IoIosArrowBack className="text-white w-6 h-6" />
          </Link>
          <span className="text-white text-xl ml-10 justify-center w-full">
            Limpieza {selected}
          </span>
        </div>

        <span className="text-black font-bold text-xl ml-10 justify-center w-full">
          Detalles del domicilio
        </span>
        <div
          className="bg-white h-min-height w-min-widht mt-8 rounded-lg mx-6 p-8"
          style={{ marginBottom: "1rem" }}
        >
          <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
            {/* Dirección */}
            <div className="relative z-0 w-full mb-5 group">
              <label
                htmlFor="floating_direccion"
                className="peer-focus:font-medium absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Dirección
              </label>
              <IoLocationOutline className="w-6 h-6 absolute left-0 top-4 text-purpleHome" />
              {/*De este input tomaras el addresses */}
              <input
                type="text"
                name="addresses"
                id="floating_direccion"
                className={`block py-3 px-0 pl-10 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer ${
                  formErrors.addresses ? "border-red-500" : ""
                }`}
                placeholder=" "
                required
                onChange={handleChange}
              />
              {formErrors.addresses && (
                <p className="text-red-500 text-sm">{formErrors.addresses}</p>
              )}
              <RiArrowRightSLine className="w-6 h-6 absolute right-2 top-4 text-purpleHome" />
            </div>

            {/* Piso/Departamento */}
            <div className="relative z-0 w-full mb-5 group">
              <label
                htmlFor="floating_piso/departamento"
                className="peer-focus:font-medium absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Piso/{selected}
              </label>
              {/*De este input tomaras el apt */}

              <input
                type="text"
                name="apt"
                id="floating_piso/departamento"
                className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer ${
                  formErrors.apt ? "border-red-500" : ""
                }`}
                placeholder=" "
                required
                onChange={handleChange}
              />
              {formErrors.apt && (
                <p className="text-red-500 text-sm">{formErrors.apt}</p>
              )}
            </div>

            {/* Timbre/Portero */}
            <div className="relative z-0 w-full mb-5 group">
              <label
                htmlFor="floating_timbre/portero"
                className="peer-focus:font-medium absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Timbre/Portero
              </label>
              {/*De este input tomaras el image */}
              <input
                type="text"
                name="timbre"
                onChange={handleChange}
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
                //onChange={handleChange}
              />
            </div>
          </form>
        </div>

        <div className="" style={{ marginBottom: "1rem" }}>
          <span className="text-black font-bold text-xl ml-10 justify-center w-full">
            Tipo de limpieza
          </span>
        </div>
        {/*De este input tomaras el typeClean */}
        <textarea
          id="typeClean"
          name="typeClean"
          rows="8"
          className={`p-2.5 w-89 text-sm text-gray-900 bg-white mx-6 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${
            formErrors.typeClean ? "border-red-500" : ""
          }`}
          placeholder="Describe el tipo de limpieza que necesitan tus espacios para cumplir tus expectativas..."
          onChange={handleChange}
        ></textarea>
        {formErrors.typeClean && (
          <p className="ml-6 mb-2 text-red-500 text-sm">
            {formErrors.typeClean}
          </p>
        )}

        <div
          className="border border-purpleHome w-89 mx-6 p-4 rounded-lg "
          style={{ marginBottom: "2rem" }}
        >
          <label
            htmlFor="fileInput"
            className="cursor-pointer flex items-center justify-center"
          >
            <IoCameraOutline className="w-6 h-6 left-0 text-purpleHome" />
            <span className="text-purpleHome ml-2 font-medium">
              Agregar fotos de los espacios
            </span>
          </label>

          <input id="fileInput" type="file" className="hidden" />
        </div>
        <div className="" style={{ marginBottom: "1rem" }}>
          <span className="text-black font-bold text-xl ml-10 justify-center w-full">
            Tiempo de limpieza
          </span>
        </div>

        <div className="" style={{ marginBottom: "1rem", maxWidth: "350px" }}>
          <span
            className="text-gray-500  ml-10 justify-center w-full"
            style={{ display: "inline-block", textAlign: "justify" }}
          >
            Estimamos la cantidad de horas según el tamaño de superficie del
            lugar a limpiar.
          </span>
        </div>

        {/*De estos div tomaras el time */}

        <div
          className="bg-white min-h-min-height min-w-min-width mt-8 rounded-lg mx-6 p-8"
          style={{ marginBottom: "1rem" }}
        >
          <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-300">
            <label htmlFor="radio1" className="font-bold cursor-pointer">
              <input
                type="radio"
                id="radio1"
                name="time"
                value="1"
                className="mr-2 cursor-pointer"
                onChange={handleRadioChange}
              />
              1 hora - {selected} hasta 40m<sup>2</sup>
            </label>
          </div>
          <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-300">
            <label htmlFor="radio2" className="font-bold cursor-pointer">
              <input
                type="radio"
                id="radio2"
                name="time"
                value="2"
                className="mr-2 cursor-pointer"
                onChange={handleRadioChange}
              />
              2 hora - {selected} hasta 80m<sup>2</sup>
            </label>
          </div>
          <div className="flex items-center justify-between">
            <label htmlFor="radio3" className="font-bold cursor-pointer">
              <input
                type="radio"
                id="radio3"
                name="time"
                value="3"
                className="mr-2 cursor-pointer"
                onChange={handleRadioChange}
              />
              3 hora - {selected} mas de 80m<sup>2</sup>
            </label>
          </div>
        </div>
        {redirect ? (
          <Link to={"/assistant"}>
            <button
              className="bg-purpleHome text-white text-xl w-89 mx-6 mb-4 p-4 rounded-lg flex items-center justify-center"
              onClick={handleSubmit}
            >
              Continuar
            </button>
          </Link>
        ) : (
          <button
            className="bg-purpleHome text-white text-xl w-89 mx-6 mb-4 p-4 rounded-lg flex items-center justify-center"
            onClick={handleSubmit}
          >
            Continuar
          </button>
        )}

        <footer className="h-28 sticky bottom-0 z-20 text-sm flex items-center justify-around bg-white py-8">
          <Link to="/home" className="flex items-center flex-col">
            <RiHomeSmile2Line className="w-10 h-10" />
            <span>Home</span>
          </Link>
          <Link to={"/requests"} className="flex items-center flex-col">
            <PiStarFourBold className="w-10 h-10" />
            <span>Solicitudes</span>
          </Link>
          <Link to={"/chatList"} className="flex items-center flex-col">
            <IoChatbubbleEllipsesOutline className="w-10 h-10" />
            <span>Chat</span>
          </Link>
        </footer>
      </div>
    );
}
