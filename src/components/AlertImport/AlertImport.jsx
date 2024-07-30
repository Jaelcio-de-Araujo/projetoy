import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './AlertImport.css';


function AlertImport({ show, handleClose }) {
  return (
    <Modal
      show={show}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
    >
     <Modal.Body id='modal-import'>   
      <Modal.Header closeButton id='modal-importclose'>
        <Modal.Title id= 'titulo2'>Importar arquivo de produtos</Modal.Title>
      </Modal.Header>
      <Modal.Body id='texto'>
        <p>Caso seja uma  lista extensa de produtos, você poderá importá-los via planilha em Excel.</p>
        <p>1. Baixe o modelo do arquivo. </p>
        <p>2. Preencha-o com as informações de rotulagem dos produtos e salve. </p>
        <p>3. Importe o arquivo, acionando o botão abaixo.   </p>
      </Modal.Body>
      <Modal.Footer id='button-import'>
        {/*adicione onclick={alguma função} para atribui-la ao botão*/}
        <Button id='baixar2' variant="secondary">Baixar Modelo</Button>  
        <Button id='import2' variant="primary">Importar Arquivo</Button>
      </Modal.Footer>
    </Modal.Body>
    </Modal>
  );
}

export default AlertImport;
