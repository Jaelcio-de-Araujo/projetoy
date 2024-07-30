import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import './Buttons.css';


  function Buttons() {
    const [showSuccessAlert, setShowSuccessAlert] = useState(false);
    const [showCancelAlert, setShowCancelAlert] = useState(false);
  
    const handleSuccessClick = () => {
      setShowSuccessAlert(true);
      setShowCancelAlert(false);
      // Redirecionar após um pequeno atraso para que o alerta seja visível por um curto período de tempo
      setTimeout(() => {
        setShowSuccessAlert(false);
        window.location.href = '/usuarios';
      }, 700); // tempo em milissegundos
    };
  
    const handleCancelClick = () => {
      setShowCancelAlert(true);
      setShowSuccessAlert(false);
      // Redirecionar após um pequeno atraso para que o alerta seja visível por um curto período de tempo
      setTimeout(() => {
        setShowCancelAlert(false);
        window.location.href = '/usuarios';
      }, 700); // tempo em milissegundos
    };
  return (
    <div id="button-containerMais">

      {showSuccessAlert && (
        <Alert id='save' variant="success">
          Dados de usuário salvos com sucesso!
        </Alert>
      )}
      {showCancelAlert && (
        <Alert id='alert-cancel' variant="danger">
          Cdastro de usuários cancelado!
        </Alert>
      )}
      
      <Button  variant="danger" id='cancel-button1' type="button" onClick={handleCancelClick}>
        Cancelar 
      </Button>
     
     
      <Button  variant="success" id='save-button1' type="button" onClick={handleSuccessClick}>
        Salvar
      </Button>
     
    </div>
  );
}

export default Buttons