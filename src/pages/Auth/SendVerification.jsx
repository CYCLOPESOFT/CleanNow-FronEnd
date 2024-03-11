import { TextInput, Button } from "flowbite-react";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setEmailConfirm, setRegister } from "../../Slices/authSlice";
import { useEffect, useState } from "react";

const SendVerification = () => {
  const { email, useRegister } = useSelector((state) => state.auth);
  const [number1, setNumber1] = useState(null);
  const [number2, setNumber2] = useState(null);
  const [number3, setNumber3] = useState(null);
  const [number4, setNumber4] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { emailConfirm } = useSelector((state) => state.auth);


  useEffect(() => {
    if (useRegister === false) {
      navigate("/");
    }
  }, [navigate, useRegister]);


  useEffect(()=>{
    if(emailConfirm ===true){
      navigate("/about");
    }
  },[navigate, emailConfirm])
  const handleOnClick = () => {
    dispatch(setRegister({ email }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setEmailConfirm(number1 + number2 + number3 + number4));
  };
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-96 p-4">
        <div className="flex flex-col py-4">
          <h1 className="text-xl md:text-xl font-bold">
            Ingresa el código de 4 dígitos
          </h1>
          <h2 className="text-xl md:text-xl font-bold">que se te envió a:</h2>
          <h2 className="mb-4 text-base md:text-xl font-bold">
            {email ? email : "correo electrónico"}
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-row md:flex-row mb-4 md:justify-start text-center md:text-center">
              <input
                type="number"
                className="rounded-md focus:ring-2 focus:ring-inset focus:ring-indigo-600 w-10 md:w-11 mr-2 border-gray-400 mb-2 md:mb-0 appearance-none md:appearance-textfield"
                value={number1}
                onChange={(e) => setNumber1(e.target.value)}
              />

              <input
                type="number"
                className="rounded-md focus:ring-2 focus:ring-inset focus:ring-indigo-600 w-10 md:w-11 mr-2 border-gray-400 mb-2 md:mb-0 border-spacing-60 overflow-hidden appearance-none"
                value={number2}
                onChange={(e) => setNumber2(e.target.value)}
              />
              <input
                type="number"
                className="rounded-md focus:ring-2 focus:ring-inset focus:ring-indigo-600 w-10 md:w-11 mr-2 border-gray-400 mb-2 md:mb-0"
                value={number3}
                onChange={(e) => setNumber3(e.target.value)}
              />
              <input
                type="number"
                className="rounded-md focus:ring-2 focus:ring-inset focus:ring-indigo-600 w-10 md:w-11 mr-2 border-gray-400 mb-2 md:mb-0"
                value={number4}
                onChange={(e) => setNumber4(e.target.value)}
              />
            </div>

            <p className="text-gray-500 text-xs md:text-sm mb-2 md:mb-10">
              Consejo: Asegúrate de revisar la bandeja de entrada y la carpeta
              de correo no deseado.
            </p>
            <div className="flex flex-row mt-10 md:mt-0 justify-between md:flex-row md:mb-16 ">
              <Button type="button" className="bg-slate-100 text-slate-900">
                Reenviar
              </Button>
            </div>

            <div className="flex flex-row mt-44 md:mt-0 justify-between md:flex-row md:justify-between">
              <Button
                pill
                className="mb-2 md:mb-0 md:mr-2 bg-slate-100 text-slate-900"
                onClick={handleOnClick}
              >
                <HiOutlineArrowLeft className="h-6 w-6" />
              </Button>

              <Button type="submit" className="bg-slate-100 text-slate-900">
                Siguiente
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SendVerification;
