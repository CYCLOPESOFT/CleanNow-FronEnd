import PropTypes from 'prop-types';
import { HiEye, HiInformationCircle } from 'react-icons/hi';
import { Alert } from 'flowbite-react';

function ExampleAdditionalContent() {
  return (
    <div className="flex-shrink-0">
      <HiEye className="text-xl text-green-500" />
    </div>
  );
}

function RegistroAlert({ exito }) {
  return (
    <Alert
      additionalContent={<ExampleAdditionalContent />}
      color={exito ? 'success' : 'error'}
      icon={HiInformationCircle}
      onDismiss={() => alert('Alert dismissed!')}
      rounded
    >
      <span className="font-medium">
        {exito ? 'Registro Exitoso! Gracia Por unirte a la Famailia ClearNow' : 'Error en el registro. Por favor, verifica tu información.'}
      </span>
    </Alert>
  );
}

RegistroAlert.propTypes = {
  exito: PropTypes.bool,
};

export default RegistroAlert;
