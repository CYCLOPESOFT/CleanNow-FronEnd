import RegistrationForm from "../../components/Registro/RegistrationForm";
import RegistrationHeader from "../../components/Registro/RegistrationHeader";
import RegistrationAside from "../../components/Registro/RegistrationAside";
export default function Registro (){
    return (
        <>
        <div className="grid sm:grid-cols-2 text-gray-100 w-screen h-screen">
            <div className="bg-blackLogin container mx-auto w-full flex items-center justify-center">
                    
                <div className="sm:px-12 px-4">
                    
                    <RegistrationHeader/>

                    <RegistrationForm/>

                </div>
            </div>
            <RegistrationAside/>
        </div>
        </>
    )    

}