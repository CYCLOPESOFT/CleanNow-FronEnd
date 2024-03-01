import RegistrationButton from "./RegistrationButton"

export default function RegistrationHeader(){
    return (
        <>
        <p className="font-bold text-xm mb-4">Registrate en ClearNow</p>

            <RegistrationButton title={"Sign up with Google"} imageUrl={"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/google/google-original.svg"}/>

            <RegistrationButton title={"Sign up with Outlook"} imageUrl={"https://pngimg.com/uploads/microsoft/microsoft_PNG13.png"}/>

            <div className="flex items-center mb-4">
                 <hr className="flex-1 border-t border-gray-700" />
                    <span className="mx-4 text-gray-700">or</span>
                 <hr className="flex-1 border-t border-gray-700" />
            </div>
        </>
    )
}