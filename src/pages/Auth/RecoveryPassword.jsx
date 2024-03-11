import RecoveryAside from "../../components/RecoveryPassword/RecoveryAside";
import RecoveryForm from "../../components/RecoveryPassword/RecoveryForm";
import RecoveryHeader from "../../components/RecoveryPassword/RecoveryHeader";

export default function RecoveryPassword() {
  return (
    <>
      <div className=" h-screen flex justify-center items-center  dark:bg-gray-900  ">
        <div className="w-96 lg:px-1   pt-10 lg:flex justify-center items-center">
          <div className=" pt-8 pb-6 rounded-lg container mx-auto lg:h-min bg-blackRecovery">
            <RecoveryHeader image={"./src/assets/images/CleanNow_white.png"} />

            <RecoveryForm />
          </div>
        </div>
      </div>
    </>
  );
}
