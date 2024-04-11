import { useEffect } from "react";
import { Button } from "flowbite-react"; 
import { Link } from "react-router-dom";

export default function CreatedRequest() {
  useEffect(() => {
    document.body.style.overflow = "hidden"; 
    return () => {
      document.body.style.overflow = "auto"; 
    };
  }, []);

  return (
    <div className="flex flex-wrap items-center justify-center bg-green-500 h-screen text-white">
      <div className="custom-bg p-28 text-center" style={{ maxWidth: "500px" }}>
        <img
          src="src/assets/images/Pagoprocesado.png"
          alt=""
          className="justify-center mb-8"
          style={{ maxWidth: "300px" }}
        />
        <h5>¡Tu solicitud fue creada con éxito!</h5>
        <p className="mt-8">
          Aguarda unos minutos, serás contactado por tu asistente para confirmar el turno.
        </p>
        <div className="justify-center mt-8 flex flex-wrap gap-2 ">
          <div style={{ marginBottom: "1px" }}>
           <Link to={'/requests'}>
            <Button
                className="bg-transparent border border-white px-5 mb-2"
                color="gray outline"
                onClick={() => {
                  // Ir a solicitudes
                }}
              >
                Ir a solicitudes
              </Button>
           </Link>
          </div>
          <Link to={'/home'}>
            <Button
              className="bg-transparent border border-white px-5"
              color="gray outline"
              onClick={() => {
                // Volver al inicio
              }}
            >
              Volver al inicio
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
