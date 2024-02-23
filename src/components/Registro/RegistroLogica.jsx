import { useState } from 'react';

const RegistroLogica = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordStrength, setPasswordStrength] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [alertSuccess, setAlertSuccess] = useState(false);


  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    setConfirmPassword(newPassword);
    checkPasswordStrength(newPassword);
  };

  const checkPasswordStrength = (password) => {
    // Implementa la lógica para verificar la fuerza de la contraseña aquí
    // Por simplicidad, verifica al menos 8 caracteres, mayúsculas, minúsculas, un carácter especial y un número.
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_?/])[A-Za-z0-9!@#$%^&*_?/]{8,}$/;

    if (regex.test(password)) {
      setPasswordStrength('Strong');
    } else {
      setPasswordStrength('Weak');
    }
  };

  

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
  };

  const handleConfirmEmailChange = (e) => {
    const newConfirmEmail = e.target.value;
    setConfirmEmail(newConfirmEmail);
  };

  const handleConfirmPasswordChange = (e) => {
    const newConfirmPassword = e.target.value;
    setConfirmPassword(newConfirmPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Verifica que los correos electrónicos coincidan
    if (email !== confirmEmail) {
      setShowAlert(true);
      setAlertSuccess(false); // Indicar que la alerta es por fallo
      
    } else {
      // Resto de la lógica de manejo del envío del formulario
      setShowAlert(true);
      setAlertSuccess(true); // Indicar que la alerta es exitosa
      
    }
  };
  


  return {
    firstName,
    setFirstName,
    lastName,
    setLastName,
    email,
    setEmail,
    confirmEmail,
    setConfirmEmail,
    password,
    confirmPassword,
    passwordStrength,
    showAlert,
    alertSuccess,
    handlePasswordChange,
    handleEmailChange,
    handleConfirmEmailChange,
    handleConfirmPasswordChange,
    handleSubmit,
  };
};

export default RegistroLogica;
