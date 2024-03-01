import RegistroAlert from './RegistroAlert';
import RegistroLogica from './RegistroLogica';

export default function RegistrationForm() {
  const {
    password,
    confirmPassword,
    passwordStrength,
    email,
    confirmEmail,
    handleEmailChange,
    handleConfirmEmailChange,
    showAlert,
    alertSuccess,
    handlePasswordChange,
    handleSubmit,
    handleConfirmPasswordChange,
  } = RegistroLogica();

  return (
    <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
      {showAlert && (
        <RegistroAlert
          exito={alertSuccess}
          mensaje={
            !password
              ? 'Please enter a password'
              : !confirmPassword
                ? 'Please confirm your password'
                : password !== confirmPassword
                  ? 'Passwords do not match'
                  : passwordStrength !== 'Strong'
                    ? 'Password strength is weak'
                    : email !== confirmEmail
                      ? 'Emails do not match'
                      : ''
          }
        />
      )}

      <div className="grid grid-cols-2 gap-4 mb-5">
        <div>
          <label htmlFor="firstName" className="block mb-2 text-sm font-medium text-gray-50 dark:text-white">
            Nombre
          </label>
          <input
            type="text"
            id="firstName"
            className="bg-grayInput border border-grayInput text-gray-50 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="John"
            required
          />
        </div>
        <div>
          <label htmlFor="lastName" className="block mb-2 text-sm font-medium text-gray-50 dark:text-white">
            Apellido
          </label>
          <input
            type="text"
            id="lastName"
            className="bg-grayInput border border-grayInput text-gray-50 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Doe"
            required
          />
        </div>
      </div>

      <div className="mb-5">
        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-50 dark:text-white">
          Correo
        </label>
        <input
          type="email"
          id="email"
          className="bg-grayInput border border-grayInput text-gray-50 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="email@example.com"
          onChange={handleEmailChange}
          required
        />

      </div>

      <div className="mb-5">
        <label htmlFor="confirmEmail" className="block mb-2 text-sm font-medium text-gray-50 dark:text-white">
          Confirmar Correo
        </label>
        <input
          type="email"
          id="confirmEmail"
          className={`bg-grayInput border border-grayInput text-gray-50 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${email !== confirmEmail ? 'border-red-500' : ''
            }`}
          placeholder="Confirmar Correo"
          onChange={handleConfirmEmailChange}
          required
        />
        {email !== confirmEmail && (
          <p className="mt-1 text-sm text-red-500">Emails do not match</p>
        )}
      </div>

      <div className="grid grid-cols-2 gap-4 mb-5">
        <div>
          <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-50 dark:text-white">
            Contraseña
          </label>
          <input
            type="password"
            id="password"
            className={`bg-grayInput border border-grayInput text-gray-50 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${
              passwordStrength === 'Weak' ? 'border-red-500' : ''
            }`}
            placeholder="Contraseña"
            onChange={handlePasswordChange}
            required
          />
          {passwordStrength && (
            <p className={`mt-1 text-sm ${passwordStrength === 'Weak' ? 'text-red-500' : 'text-green-500'}`}>
              Strength: {passwordStrength}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="confirmPassword" className="block mb-2 text-sm font-medium text-gray-50 dark:text-white">
            Confirmar Contraseña
          </label>
          <input
            type="password"
            id="confirmPassword"
            className={`bg-grayInput border border-grayInput text-gray-50 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${
              password !== confirmPassword ? 'border-red-500' : ''
            }`}
            placeholder="Confirmar Contraseña"
            onChange={handleConfirmPasswordChange}
            required
          />
          {password !== confirmPassword && (
            <p className="mt-1 text-sm text-red-500">Las contraseñas no coinciden</p>
          )}
        </div>
      </div>

      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mb-4"
      >
        Registrarse
      </button>

      <span className="mt-16 text-sm">
        ¿Ya tienes una cuenta? <a className="text-blue-600" href=""> Inicia sesión</a>
      </span>
    </form>
    
  );
}
