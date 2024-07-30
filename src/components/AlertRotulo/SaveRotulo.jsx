import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './SaveRotulo.css';


function SaveRotulo({ show, handleClose }) {
  return (
    <Modal
      show={show}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
    >
     <Modal.Body id='modal-saveexport'>   
      <Modal.Header closeButton id='modal-saveclose'>
        <Modal.Title id= 'titulosave'>Descrição salva com sucesso</Modal.Title>
      </Modal.Header>
      <Modal.Body id='savetext'>
        <p>Para gerar as etiquetas acione o botão abaixo.</p>
        <p>Ao gerar as etiquetas, o sistema disponibilizará os rótulos para o cliente.</p>
        <p>Caso queira verificar antes de gerar os rótulos, basta fechar e retornar ao passo anterior </p>
      </Modal.Body>
      <Modal.Footer id='button-import'>
        {/*adicione onclick={alguma função} para atribui-la ao botão*/}
        <Button id='gerar' variant="secondary">Gerar Rótulos</Button>  
        <Button id='exportar' variant="primary">Exportar Rótulos</Button>
      </Modal.Footer>
    </Modal.Body>
    </Modal>
  );
}

export default SaveRotulo;