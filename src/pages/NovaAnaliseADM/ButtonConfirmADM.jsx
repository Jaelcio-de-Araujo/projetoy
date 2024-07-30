import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import { NavLink } from 'react-router-dom';

import './ButtonConfirmADM.css';

function ButtonConfirmADM() {
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [showCancelAlert, setShowCancelAlert] = useState(false);

  const handleSuccessClick = () => {
    setShowSuccessAlert(true);
    setShowCancelAlert(false);
    // Redirecionar após um pequeno atraso para que o alerta seja visível por um curto período de tempo
    setTimeout(() => {
      setShowSuccessAlert(false);
      window.location.href = '/analiseADM';
    }, 700); // tempo em milissegundos
  };

  const handleCancelClick = () => {
    setShowCancelAlert(true);
    setShowSuccessAlert(false);
    // Redirecionar após um pequeno atraso para que o alerta seja visível por um curto período de tempo
    setTimeout(() => {
      setShowCancelAlert(false);
      window.location.href = '/analiseADM';
    }, 700); // tempo em milissegundos
  };

  return (
    <div id="button-containerConfirm">
      {showSuccessAlert && (
        <Alert id='alert' variant="success">
          Análise confirmada com sucesso!
        </Alert>
      )}
      {showCancelAlert && (
        <Alert id='alert-cancel' variant="danger">
          Análise cancelada!
        </Alert>
      )}
     
      <Button variant="success" id='button-cancelAnalise' type="button" onClick={handleCancelClick}>
        Cancelar Análise
      </Button>
    
      
      <Button variant="danger" id='button-confirmAnalise' type="button" onClick={handleSuccessClick}>
        Confirmar Análise
      </Button>
    
    </div>
  );
}

export default ButtonConfirmADM;
