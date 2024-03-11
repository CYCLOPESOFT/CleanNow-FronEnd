import RecoveryTitle from "./RecoveryTitle";
export default function RecoveryHeader({ image }) {
  return (
    <>
      <RecoveryTitle title="CleanNow" image={image} />
      <span className="mt-6 mb-8">
        <h1 className="text-xl font-bold dark:text-white mb-2  mt-2">
          Recuperar
        </h1>
        <span className="text-gray-400 inline-block text-sm mt-2">
          Le enviaremos por correo electrónico instrucciones para restablecer su
          contraseña. Si ya no tienes acceso a tu correo electrónico, puedes
          intentar recuperar la cuenta con tu{" "}
          <span className="text-blue-500">numero telefónico</span>.
        </span>{" "}
        <a className="text-blue-500" href=""></a>.
      </span>
    </>
  );
}
