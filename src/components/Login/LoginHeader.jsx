import LoginButton from "./LoginButton"

export default function LoginHeader(){
    return (
        <>
        <p className="font-bold text-xm mb-4">Welcome back</p>

            <LoginButton title={"Sign up with Google"} imageUrl={"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/google/google-original.svg"}/>

            <LoginButton title={"Sign up with Github"} imageUrl={"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"}/>

            <div className="flex items-center mb-4">
                 <hr className="flex-1 border-t border-gray-700" />
                    <span className="mx-4 text-gray-700">or</span>
                 <hr className="flex-1 border-t border-gray-700" />
            </div>
        </>
    )
}