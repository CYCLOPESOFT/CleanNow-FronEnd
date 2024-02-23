import RecoveryTitle from "./RecoveryTitle"
export default function RecoveryHeader({image}){
    return (
        <>
            <RecoveryTitle title='CleanUpNowm' image={image} />

            <h1 className="text-xl font-bold text-white mb-2 mt-2">Reset your Password</h1>
            <span>
            <span className="text-gray-400 text-sm ">We'll email you instructions to reset your password. If you don't have access to your email anymore, you can try </span> <a className='text-blue-500' href="">account recovery</a>.
            </span>
        </>
    )
}