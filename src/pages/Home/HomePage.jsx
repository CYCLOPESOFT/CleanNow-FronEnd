import image from "../../assets/images/image.jpg";
import { HiOutlineBell } from "react-icons/hi2";
import { MdChevronRight } from "react-icons/md";
import Footer from "../../components/Home/Footer";
import History from "../../components/Home/History";
import Card from "../../components/Home/Card";
import Form from "../../components/Home/Form";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function HomePage() {
  let userInfoString = localStorage.getItem("userInfo");
  let userInfo = JSON.parse(userInfoString);
  const [assistanst, setAssistanst] = useState("");
  const handleAssistante = async () => {
    try {
      const response = await fetch("https://localhost:7245/api/v1/Assistant", {
        method: "GET",
      });
      if (!response.ok) {
        throw new Error("Error al obtener los datos del asistente");
      }
      const data = await response.json(); // Convertir la respuesta a JSON
      setAssistanst(data); // Establecer los datos en el estado
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (assistanst === "") {
      handleAssistante();
    }
  }, [assistanst]);
  return (
    <div className="bg-grayHome h-full w-full">
      <div className="bg-purpleHome w-full h-96 rounded-b-2xl absolute top-0 z-0"></div>
      <div className="w-full flex justify-between items-center container mx-auto pt-8 px-8 relative z-10">
        <div className="flex justify-between w-full mt-4">
          <a>
            <img
              src={image}
              alt=""
              className="inline-block w-16 h-16 rounded-full mr-4 object-cover"
            />
            <span className="text-lg text-white">¡Hola {userInfo.name}!</span>
            <Link to={"/profile"}>
              <MdChevronRight className="inline-block w-6 h-6 text-white" />
            </Link>
          </a>
          <Link to={"/notifications"} className="flex items-center rounded-lg">
            <HiOutlineBell className="bg-white rounded-lg w-8 h-8 p-1 text-purpleHome" />
          </Link>
        </div>
      </div>

      <Form />
      <History />

      <span className="mx-8 font-medium">Recomendamos para ti</span>

      <div className="flex overflow-x-auto w-full px-4">
        {
          assistanst !==""&&(
            assistanst?.map((items,key)=>(
              <Card key={items.id} image={items.image} name={`${items.name}  ${items.lastName}`}  />
            ))
          )
          }
      </div>

      <Footer />
    </div>
  );
}
