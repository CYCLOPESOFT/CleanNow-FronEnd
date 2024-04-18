import { IoIosArrowBack } from "react-icons/io";
import { BsStarFill } from "react-icons/bs";
import { Card, Datepicker } from "flowbite-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAssistant, setHour } from "../../Slices/authSlice";

function ProfileAssistant() {
  const hours = ["08:00 AM", "09:00 AM", "14:00 AM"];
  const dispatch = useDispatch();
  const { assistantSelected, assistant,domicile,hour:selectHour } = useSelector((state) => state.auth);

  const handleAssistante = async () => {
    try {
      const response = await fetch(`https://localhost:7245/api/v1/Assistant/${assistantSelected}`, {
        method: "GET",
      });
      if (!response.ok) {
        throw new Error("Error al obtener los datos del asistente");
      }
      const data = await response.json();
      dispatch(setAssistant(data));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (assistant === "") {
      handleAssistante();
    }
  }, [assistant]); 

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
              src={assistant.image}
              alt={assistant.name}
              className="w-32 h-32 rounded-1.75rem mr-4 object-cover"
            />
            <div className="flex gap-1 flex-col">
              <h2 className="text-xl font-bold mb-1 flex items-center">
                {assistant.name} {assistant.lastName}
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
                    <path d="M12 2c-.791 0-1.55.314-2.11.874l-.893.893a.985.985 0 0 1-.696.288H7.04A2.984 2.984 0 0 0 4.055 7.04v1.262a.986.986 0 0 1-.288.696l-.893.893a2.984 2.984 0 0 0 0 4.22l.893.893a.985.985 0 0 1 .288.696v1.262a2.984 2.984 0 0 0 2.984 2.984h1.262c.261 0 .512.104.696.288l.893.893a2.984 2.984 0 0 0 4.22 0l.893-.893a.985.985 0 0 1 .696-.288h1.262a2.984 2.984 0 0 0 2.984-2.984V15.7c0-.261.104-.512.288-.696l.893-.893a2.984 2.984 0 0 0 0-4.22l-.893-.893a.985.985 0 0 1-.288-.696V7.04a2.984 2.984 0 0 0-2.984-2.984h-1.262a.985.985 0 0 1-.696-.288l-.893-.893A2.984 2.984 0 0 0 12 2Zm3.683 7.73a1 1 0 1 0-1.414-1.413l-4.253 4.253-1.277-1.277a1 1 0 0 0-1.415 1.414l1.985 1.984a1 1 0 0 0 1.414 0l4.96-4.96Z" />
                  </svg>
                </Link>
              </h2>
              <p className="flex items-center text-yellow-500">
                <BsStarFill className="mr-1" />
                <Link to={"/opinions"}>4.8 (Opiniones)</Link>
              </p>
              <p className="text-gray-600">
                {assistant.age} años - {assistant.location}
              </p>

              <div className="text-white bg-lightGreen w-32 px-4 py-1 rounded-lg text-center">
                ${assistant.price}/hr
              </div>
            </div>
          </div>
        </Card>

        <div className="container mx-auto px-4 pt-8">
          <div className="mb-8 pb-4">
            <h2 className="border-b border-gray-500 border-solid pb-2 text-xl font-bold mb-4">
              Sobre Mi {assistant.age} años
            </h2>
            <p className="mt-4">{assistant.aboutMe}</p>
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
              onSelect={(date) => {
                const selectedDate = new Date(date);
                const day = selectedDate.getDate();
                const month = selectedDate.getMonth() + 1; // Sumamos 1 porque los meses en JavaScript van de 0 a 11
                const year = selectedDate.getFullYear();
                console.log(`Fecha seleccionada: ${day}/${month}/${year}`);
              }}
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
                    selectHour === hour
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 hover:bg-blue-200"
                  }`}
                  onClick={() => dispatch(setHour(hour))}
                >
                  <p>{selectHour}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
        <footer className="h-28 sticky bottom-0 z-20 flex items-center bg-white py-8">
          <div className="flex gap-16 items-center px-4">
            <div className="flex flex-col">
              <span className="font-semibold">
                {domicile.time} hr x ${assistant.price}
              </span>
              <span>17/08/2024</span>
              <span>{selectHour}</span>
            </div>

            <Link to={"/resumeService"}>
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
