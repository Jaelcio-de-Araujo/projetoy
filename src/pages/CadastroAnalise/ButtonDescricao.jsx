import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import AlertRotulo from '../../components/AlertRotulo/SaveRotulo';
import './ButtonDescricao.css';
import { NavLink } from 'react-router-dom';

function ButtonDescrição() {
  const [showModal, setShowModal] = useState(false);
  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [showCancelAlert, setShowCancelAlert] = useState(false);
  


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

      {showCancelAlert && (
        <Alert id='alert-cancel' variant="danger">
          Cadastro cancelado!
        </Alert>
      )}
      
      <Button  variant="danger" id='button-cancellAnalise' type="button" onClick={handleCancelClick}>
        Cancelar 
      </Button>
      
      
      <NavLink to='/AlertRotulo' id='button-saveAnalise' onClick={(e) => {
            e.preventDefault();
            handleShowModal();
          }}>
            Salvar
      </NavLink>
      <AlertRotulo show={showModal} handleClose={handleCloseModal} />
    </div>
  );
}

export default ButtonDescrição;
