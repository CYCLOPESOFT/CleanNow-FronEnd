import { TextInput, Checkbox, Button } from "flowbite-react";
export default function RecoveryForm() {
  return (
    <div className="mt-1">
      <form className="">
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-50 dark:text-white"
        >
          Correo Electrónico
        </label>
        <TextInput
          id="email1"
          type="email"
          placeholder="bryanrosa@cleannow.com"
          required
          sizing="lg"
          className=" dark:!bg-gray-700 !ring-purple-700 !border-purple-700"
        />
      </form>
      <div className="flex items-center h-5 my-6">
        <div className="mb-4 block"></div>
        <Checkbox
          id="accept"
          defaultChecked
          className=" checked:!bg-appColor "
        />
        <label
          htmlFor="remember"
          className="ms-2 text-sm  text-gray-50 dark:text-gray-300"
        >
          Estoy de acuerdo con los{" "}
          <a className="text-blue-500" href="">
            Términos de uso
          </a>{" "}
          y la{" "}
          <a className="text-blue-500" href="">
            Política de privacidad
          </a>
        </label>
      </div>

             <div className="flex items-center h-5 my-6">
                <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                <label htmlFor="remember" className="ms-2 text-sm  text-gray-50 dark:text-gray-300">I'm agree with <a className='text-blue-500' href="">Term of Use</a> and <a className='text-blue-500' href="">Privacy Policy</a></label>
            </div>

                <button className="w-full bg-blueRecoveryPassword text-sm text-white text-center mb-4 rounded-lg h-10 hover:bg-blue-700">Send Email</button>

                <div className='text-center'>
                     <span className="text-gray-400 text-sm">If you need help, contact <a className='text-blue-500' href="">Flexible Support</a></span>
                  
                 </div>
                       
        </div>
    )
}

      <div className="mt-12 mb-2 block">
        <Button
          label="2"
          className="w-full bg-appColor py-2 hover:!bg-hoverAppColor dark:bg-appColor dark:hover:bg-hoverAppColor"
        >
          Restablecer la contraseña
        </Button>
      </div>
      <div className="text-center mt-10">
        <span className="text-gray-400 text-sm">
          Si necesitas ayuda contacta a{" "}
          <a className="text-blue-500" href="">
            Equipo de soporte CleanNow
          </a>
        </span>
      </div>
    </div>
  );
}
