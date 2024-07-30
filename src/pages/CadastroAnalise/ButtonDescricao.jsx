import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

import './ButtonDescricao.css';
import { NavLink } from 'react-router-dom';

function ButtonDescrição() {
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
    <div id="button-containerdescricao">
      {showSuccessAlert && (
        <Alert id='save' variant="success">
          Descrição salva com sucesso!
        </Alert>
      )}
      {showCancelAlert && (
        <Alert id='alert-cancel' variant="danger">
          Descrição cancelada!
        </Alert>
      )}
      
      <Button  variant="danger" id='button-cancellAnalise' type="button" onClick={handleCancelClick}>
        Cancelar 
      </Button>
      
      
      <Button  variant="success" id='button-saveAnalise' type="button" onClick={handleSuccessClick}>
        Salvar
      </Button>
      
    </div>
  );
}

export default ButtonDescrição;
