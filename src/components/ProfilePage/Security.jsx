import { Button } from "flowbite-react";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
export default function SecurityPage() {
  return (
    <>
      {/* Header */}
      <div className="bg-purpleHome w-full h-32 rounded-b-xl absolute top-0 z-0"></div>
      <div className=" w-full h-24 flex  items-center container mx-auto pt-9 px-6 relative z-10 mb-6">
        <Link to={"/profile"}>
          <IoIosArrowBack className="text-white w-6 h-6" />
        </Link>
        <span className="text-white text-xl font-md ml-14">
          Seguridad y Privacidad
        </span>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">
          Términos de Seguridad y Privacidad
        </h1>

        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">
            Seguridad de la Información
          </h2>
          <p>
            En CleanNow™, nos comprometemos a proteger la seguridad y
            confidencialidad de la información de nuestros usuarios. Utilizamos
            medidas de seguridad técnicas y organizativas adecuadas para
            proteger los datos contra el acceso no autorizado, la divulgación o
            la alteración no autorizada.
          </p>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Recopilación de Datos</h2>
          <p>
            Recopilamos datos personales como parte del proceso de registro y
            uso de nuestros servicios. Esta información puede incluir nombre,
            dirección, información de contacto y preferencias de servicio. No
            compartimos ni vendemos datos personales a terceros sin
            consentimiento explícito.
          </p>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Uso de la Información</h2>
          <p>
            Utilizamos la información recopilada para proporcionar y mejorar
            nuestros servicios, procesar transacciones y responder a las
            necesidades de los usuarios. Solo utilizamos datos de manera
            compatible con los fines para los que fueron proporcionados.
          </p>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Seguridad de Pago</h2>
          <p>
            Los datos de pago se manejan de manera segura a través de
            proveedores de servicios de pago confiables y cifrados. No
            almacenamos detalles de tarjetas de crédito en nuestros servidores.
          </p>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Acceso y Control</h2>
          <p>
            Los usuarios tienen derecho a acceder, corregir y eliminar sus datos
            personales. Ofrecemos opciones para gestionar la privacidad y
            preferencias de comunicación a través de la configuración de la
            cuenta.
          </p>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">
            Cookies y Tecnologías Similares
          </h2>
          <p>
            Utilizamos cookies y tecnologías similares para mejorar la
            experiencia del usuario y proporcionar funcionalidades
            personalizadas. Los usuarios pueden gestionar las preferencias de
            cookies a través de la configuración del navegador.
          </p>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">
            Actualizaciones y Notificaciones
          </h2>
          <p>
            Nos comprometemos a informar a los usuarios sobre cambios
            importantes en nuestros términos y políticas de privacidad. Las
            actualizaciones se publican en nuestro sitio web y se notifican a
            los usuarios afectados.
          </p>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Contacto</h2>
          <p>
            Para consultas relacionadas con la privacidad o seguridad de datos,
            contáctenos en{" "}
            <a href="mailto:soporte@cleannow.com">soporte@cleannow.com</a>.
          </p>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Necesitas ayudas?</h2>
          <p>
            Puedes consulta el apartado de ayuda en la sección de soporte. o
            dando click en el siguiente botton
          </p>
        </div>
        <Link to={"/helppage"}>
          <Button className="bg-appColor w-full mb-8">
            Ir a la ventana de ayuda
          </Button>
        </Link>
      </div>
    </>
  );
}
