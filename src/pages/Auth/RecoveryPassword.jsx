import mario from '../../assets/images/mario.png'
import RecoveryAside from '../../components/RecoveryPassword/RecoveryAside'
import RecoveryForm from '../../components/RecoveryPassword/RecoveryForm'
import RecoveryHeader from '../../components/RecoveryPassword/RecoveryHeader'

export default function RecoveryPassword(){
    return (
        <>
            <div className="w-screen h-screen grid lg:grid-cols-2 bg-blackLogin lg:p-6 md:p-6 lg:gap-4">
                
                <div className='lg:px-12 md:px-12 px-4 pt-10 lg:flex justify-center items-center'>

                    <div className="px-8 pt-8 pb-6 rounded-lg container mx-auto lg:h-min bg-blackRecovery">
                         <div>
                    
                              <RecoveryHeader image={"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original-wordmark.svg"}/>
                    
                              <RecoveryForm/>
                         </div>
                    </div>
                </div>
               
                <RecoveryAside image={mario}/>
                
            </div>
        </>
    )
}