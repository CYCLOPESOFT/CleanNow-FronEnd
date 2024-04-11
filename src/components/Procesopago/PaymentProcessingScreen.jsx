
  import { Spinner } from "flowbite-react";

  function PaymentProcessingScreen() {
    return (
      <div className="flex flex-wrap items-center justify-center h-screen bg-purple-500 text-white">
        <div className="text-center">
          <Spinner aria-label="Extra large spinner example" size="1md" className="mr-2" />
          <h1 className="text-4xs mb-20">Estamos procesando tu pago...</h1>
        </div>
      </div>
    );
  }

  export default PaymentProcessingScreen;
