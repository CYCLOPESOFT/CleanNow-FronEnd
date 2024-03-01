export default function RecoveryAside({image}){
    return(
    <div className='lg:flex hidden justify-center items-center'>
        <div className="container mx-auto w-5/6">
            <img className="lg:w-full lg:h-5/6" src={image} alt="" />
        </div>
    </div>
    )
}