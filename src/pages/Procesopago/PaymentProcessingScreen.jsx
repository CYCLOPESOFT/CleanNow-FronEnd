import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Spinner } from 'flowbite-react';

export default function PaymentProcessingScreen() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      // Redirigir al usuario a la ruta /createdRequest después de 5 segundos
      navigate('/createdRequest');
    }, 5000); // 5000 milisegundos = 5 segundos

    // Limpieza: asegúrate de limpiar el temporizador cuando el componente se desmonte
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex flex-wrap items-center justify-center h-screen bg-purpleHome text-white">
      <div className="text-center">
        <Spinner aria-label="Extra large spinner example" size="1md" className="mr-2 mb-4" />
        <h1 className="text-4xs mb-20">Estamos procesando tu pago...</h1>
      </div>
    </div>
  );
}
