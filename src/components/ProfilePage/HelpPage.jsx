import { Accordion } from "flowbite-react";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";

const HelpPage = () => {
  return (
    <>
      {/* Header */}
      <div className="bg-purple-600 w-full h-32 rounded-b-xl absolute top-0 z-0"></div>
      <div className="w-full h-24 flex items-center container mx-auto pt-9 px-6 relative z-10 mb-6">
        <Link to="/profile">
          <IoIosArrowBack className="text-white w-6 h-6" />
        </Link>
        <span className="text-white text-xl font-medium ml-32">Ayuda</span>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 mt-16">
        <div className="max-w-3xl mx-auto">
          {/* Información General */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">¿Cómo usar CleanNow?</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              CleanNow te permite solicitar servicios de limpieza de manera
              sencilla. Para solicitar un servicio, simplemente navega a la
              sección de "Solicitar Servicio" y sigue los pasos indicados.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Si tienes alguna pregunta o problema, consulta nuestras Preguntas
              Frecuentes a continuación.
            </p>
          </div>
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">
              ¿Cómo cancelar un servicio en CleanNow?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Puedes cancelar un servicio en CleanNow siguiendo estos pasos:
              <ol className="list-decimal pl-6 text-gray-600">
                <li>Inicia sesión en tu cuenta de CleanNow.</li>
                <li>
                  Dirígete a la sección "Mis Servicios" o "Historial de
                  Solicitudes".
                </li>
                <li>
                  Selecciona el servicio que deseas cancelar y encuentra la
                  opción para cancelarlo.
                </li>
                <li>
                  Confirma la cancelación siguiendo las indicaciones
                  proporcionadas.
                </li>
              </ol>
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">
              ¿Qué hacer si un asistente de limpieza no cumple con las
              expectativas?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              En caso de que un asistente de limpieza no cumpla con tus
              expectativas, te recomendamos lo siguiente:
              <ul className="list-disc pl-6 text-gray-600">
                <li>
                  Contacta a nuestro equipo de atención al cliente para reportar
                  el problema.
                </li>
                <li>
                  Proporciona detalles específicos sobre la situación para
                  recibir asistencia adecuada.
                </li>
                <li>
                  Considera dejar una calificación y reseña para compartir tu
                  experiencia y ayudar a otros usuarios.
                </li>
              </ul>
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">
              ¿Cómo solicitar una devolución en CleanNow?
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Si necesitas solicitar una devolución en CleanNow debido a un
              problema con tu servicio, sigue estos pasos:
              <ol className="list-decimal pl-6 text-gray-600">
                <li>
                  Comunícate con nuestro equipo de atención al cliente dentro de
                  las primeras 24 horas posteriores al servicio.
                </li>
                <li>
                  Proporciona detalles y pruebas del problema para facilitar la
                  evaluación de tu solicitud de devolución.
                </li>
                <li>
                  Espera la confirmación y proceso de la devolución por parte de
                  nuestro equipo.
                </li>
              </ol>
            </p>
          </div>
          {/* Preguntas Frecuentes */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Preguntas Frecuentes</h2>
            <Accordion className="mb-24">
              <Accordion.Panel>
                <Accordion.Title>
                  ¿Cómo puedo solicitar un servicio?
                </Accordion.Title>
                <Accordion.Content>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Para solicitar un servicio de limpieza, dirígete a la
                    sección de "Solicitar Servicio" en la aplicación CleanNow y
                    sigue las instrucciones para completar tu solicitud.
                  </p>
                </Accordion.Content>
              </Accordion.Panel>
              <Accordion.Panel>
                <Accordion.Title>
                  ¿Cómo puedo resolver problemas de pago?
                </Accordion.Title>
                <Accordion.Content>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Si experimentas problemas con el pago de tus servicios,
                    ponte en contacto con nuestro equipo de atención al cliente
                    para recibir asistencia adicional.
                  </p>
                </Accordion.Content>
              </Accordion.Panel>
              <Accordion.Panel>
                <Accordion.Title>
                  ¿Cómo puedo solicitar un servicio de limpieza?
                </Accordion.Title>
                <Accordion.Content>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Para solicitar un servicio de limpieza en CleanNow, sigue
                    estos pasos:
                    <ol className="list-decimal pl-6 text-gray-600">
                      <li>
                        Accede a la sección "Solicitar Servicio" en la
                        aplicación.
                      </li>
                      <li>
                        Selecciona el tipo de servicio que necesitas (ej.
                        limpieza de hogar, limpieza de oficina, etc.).
                      </li>
                      <li>
                        Completa los detalles necesarios, como la fecha, hora y
                        ubicación del servicio.
                      </li>
                      <li>Revisa y confirma tu solicitud.</li>
                    </ol>
                  </p>
                </Accordion.Content>
              </Accordion.Panel>
              <Accordion.Panel>
                <Accordion.Title>
                  ¿Cómo puedo resolver problemas de pago?
                </Accordion.Title>
                <Accordion.Content>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Si tienes problemas con el pago de tus servicios, te
                    recomendamos lo siguiente:
                    <ul className="list-disc pl-6 text-gray-600">
                      <li>
                        Verifica tus detalles de pago y asegúrate de que sean
                        correctos.
                      </li>
                      <li>
                        Intenta utilizar otro método de pago si el problema
                        persiste.
                      </li>
                      <li>
                        Comunícate con nuestro equipo de atención al cliente
                        para recibir asistencia adicional.
                      </li>
                    </ul>
                  </p>
                </Accordion.Content>
              </Accordion.Panel>
              <Accordion.Panel>
                <Accordion.Title>
                  ¿Cómo puedo contactar al servicio de atención al cliente?
                </Accordion.Title>
                <Accordion.Content>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Puedes ponerte en contacto con nuestro equipo de atención al
                    cliente de las siguientes maneras:
                    <ul className="list-disc pl-6 text-gray-600">
                      <li>
                        Envíanos un mensaje a través de la sección de "Contacto"
                        en la aplicación.
                      </li>
                      <li>
                        Llama a nuestro número de atención al cliente disponible
                        en la sección "Ayuda".
                      </li>
                      <li>
                        Envía un correo electrónico a nuestro equipo de soporte
                        técnico.
                      </li>
                    </ul>
                  </p>
                </Accordion.Content>
              </Accordion.Panel>
            </Accordion>
          </div>
        </div>
      </div>
    </>
  );
};

export default HelpPage;
