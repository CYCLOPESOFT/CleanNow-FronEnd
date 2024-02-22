import LoginForm from "../../components/Login/LoginForm";
import LoginHeader from "../../components/Login/LoginHeader";
import LoginAside from "../../components/Login/LoginAside";
export default function Login (){
    return (
        <>
        <div className="grid sm:grid-cols-2 text-gray-100 w-screen h-screen">
            <div className="bg-blackLogin container mx-auto w-full flex items-center justify-center">
                    
                <div className="sm:px-12 px-4">
                    
                    <LoginHeader/>

                    <LoginForm/>

                </div>
            </div>
            <LoginAside/>
        </div>
        </>
    )    

}