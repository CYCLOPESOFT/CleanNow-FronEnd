import { IoIosArrowBack } from "react-icons/io";
import { BsStarFill } from "react-icons/bs";
import { Card, Datepicker } from "flowbite-react";
import { Link } from "react-router-dom";
import { useState } from "react";

function ProfileAssistant() {
  const hours = ["08:00 AM", "09:00 AM", "14:00 AM"];
  const [selectedHour, setSelectedHour] = useState(null);

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="bg-purpleHome w-full h-32 rounded-b-xl flex items-center justify-between px-8">
        <div>
          <Link to={"/assistant"}>
            <IoIosArrowBack className="text-white w-6 h-6" />
          </Link>
        </div>
        <span className="text-white text-2xl">Perfil de asistente</span>
        <div></div> {/* Este div vacío ayuda a empujar el texto al centro */}
      </div>

      <div className="pt-8">
        <Card className="mb-8 mx-4">
          <div className="flex items-center">
            <img
              src="src/assets/images/PaolaT.png"
              alt="Paola Torres"
              className="w-32 h-32 rounded-1.75rem mr-4 object-cover"
            />
            <div className="flex gap-1 flex-col">
              <h2 className="text-xl font-bold mb-1 flex items-center">
                Paola Torres
                <Link
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    marginLeft: "0.25rem",
                  }}
                >
                  <svg
                    className="w-6 h-6 text-gray-800 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="#01A890"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2c-.791 0-1.55.314-2.11.874l-.893.893a.985.985 0 0 1-.696.288H7.04A2.984 2.984 0 0 0 4.055 7.04v1.262a.986.986 0 0 1-.288.696l-.893.893a2.984 2.984 0 0 0 0 4.22l.893.893a.985.985 0 0 1 .288.696v1.262a2.984 2.984 0 0 0 2.984 2.984h1.262c.261 0 .512.104.696.288l.893.893a2.984 2.984 0 0 0 4.22 0l.893-.893a.985.985 0 0 1 .696-.288h1.262a2.984 2.984 0 0 0 2.984-2.984V15.7c0-.261.104-.512.288-.696l.893-.893a2.984 2.984 0 0 0 0-4.22l-.893-.893a.985.985 0 0 1-.288-.696V7.04a2.984 2.984 0 0 0-2.984-2.984h-1.262a.985.985 0 0 1-.696-.288l-.893-.893A2.984 2.984 0 0 0 12 2Zm3.683 7.73a1 1 0 1 0-1.414-1.413l-4.253 4.253-1.277-1.277a1 1 0 0 0-1.415 1.414l1.985 1.984a1 1 0 0 0 1.414 0l4.96-4.96Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </h2>
              <p className="flex items-center text-yellow-500">
                <BsStarFill className="mr-1" />
                <Link to={'/opinions'}>4.8 (Opiniones)</Link>
              </p>
              <p className="text-gray-600">35 años - Córdoba</p>

              <div className="text-white bg-lightGreen w-32 px-4 py-1 rounded-lg text-center"
          >
            $1,450/hr
          </div>
            </div>
          </div>
          
        </Card>

        <div className="container mx-auto px-4 pt-8">
          <div className="mb-8 pb-4">
            <h2 className="border-b border-gray-500 border-solid pb-2 text-xl font-bold mb-4">
              Sobre Mi 5 años
            </h2>
            <p className="mt-4">
              ¡Hola! Me llamo Paola, me dedico a la limpieza hace 5 años. Soy
              detallista, práctica y me preocupo por que queden todas las cosas
              en su lugar. ¡Espero tu contacto!
            </p>
          </div>

          <div className="mb-8 pb-4">
            <h2 className="border-b border-gray-500 border-solid pb-2 text-xl font-bold mb-4">
              Disponibilidad
            </h2>
            <p>
              Seleccioná el día y el horario dentro de las opciones disponibles.
            </p>
            <Datepicker
              weekStart={1} // Lunes
              onSelect={(date) => console.log("Fecha seleccionada:", date)}
            />
          </div>

          {/* Sección de hora de inicio */}
          <div className=" mb-8 pb-4">
            <h2 className="border-b border-gray-500 border-solid pb-2 text-xl font-bold mb-4">
              Hora de inicio
            </h2>
            <div className="grid grid-cols-3 gap-4">
              {hours.map((hour, index) => (
                <Card
                  key={index}
                  className={`p-4 text-center ${
                    selectedHour === hour
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 hover:bg-blue-200"
                  }`}
                  onClick={() => setSelectedHour(hour)}
                >
                  <p>{hour}</p>
                </Card>
              ))}
            </div>
          </div>

          
        </div>
        <footer className="h-28 sticky bottom-0 z-20 flex items-center bg-white py-8">
            <div className="flex gap-16 items-center px-4">
              
              <div className="flex flex-col">
                <span className="font-semibold">2 hr x $1,400</span>
                <span>17/08/2024</span>
                <span>8:00 AM</span>
              </div>

              <Link to={'/resumeService'}>
                <button className="bg-purpleHome hover:bg-purple-800 text-white font-semibold text-center px-16 py-3 rounded-lg">
                  Contratar
                </button>
              </Link>
            </div>
          </footer>
      </div>
    </div>
  );
}

export default ProfileAssistant;
