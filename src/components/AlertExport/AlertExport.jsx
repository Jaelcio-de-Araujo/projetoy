import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './AlertExport.css';


function AlertExport({ show, handleClose }) {
  return (
    <Modal
      show={show}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
    >
     <Modal.Body id='modal-body'>   
      <Modal.Header closeButton>
        <Modal.Title id= 'titulo'>Importar arquivo de produtos</Modal.Title>
      </Modal.Header>
      <Modal.Body id='p'>
        <p>1. Baixe o modelo do arquivo. </p>
        <p>2. Preencha-o com as informações de rotulagem dos produtos e salve. </p>
        <p>3. Importe o arquivo, acionando o botão abaixo.   </p>
      </Modal.Body>
      <Modal.Footer id='button-container'>
        {/*adicione onclick={alguma função} para atribui-la ao botão*/}
        <Button id='baixar' variant="secondary">Baixar Modelo</Button>  
        <Button id='import1' variant="primary">Importar Arquivo</Button>
      </Modal.Footer>
    </Modal.Body>
    </Modal>
  );
}

export default AlertExport;
