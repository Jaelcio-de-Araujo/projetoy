import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

import './ButtonConfirmAnalise.css';

function ButtonConfirmAnalises() {
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [showCancelAlert, setShowCancelAlert] = useState(false);

  const handleSuccessClick = () => {
    setShowSuccessAlert(true);
    setShowCancelAlert(false);
    // Redirecionar após um pequeno atraso para que o alerta seja visível por um curto período de tempo
    setTimeout(() => {
      setShowSuccessAlert(false);
      window.location.href = '/Analises';
    }, 700); // tempo em milissegundos
  };

  const handleCancelClick = () => {
    setShowCancelAlert(true);
    setShowSuccessAlert(false);
    // Redirecionar após um pequeno atraso para que o alerta seja visível por um curto período de tempo
    setTimeout(() => {
      setShowCancelAlert(false);
      window.location.href = '/Analises';
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
      <Button variant="secondary" id='button-cancelAnalise' type="button" onClick={handleCancelClick}>
        Cancelar Análise
      </Button>
      <Button variant="secondary" id='button-confirmAnalise' type="button" onClick={handleSuccessClick}>
        Confirmar Análise
      </Button>
    </div>
  );
}

export default ButtonConfirmAnalises;
