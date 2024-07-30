import React from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import  './FormMais.css';

function FormUser() {
  return (
    <Form id='MaisUserform'>
      <Row id="formgroupMaisUser">
        <Form.Group as={Col} controlId="formGridname">
          <Form.Label></Form.Label>
          <Form.Control type="text" placeholder="Nome" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridCPF">
          <Form.Label></Form.Label>
          <Form.Control type="text" placeholder="CPF" />
        </Form.Group>
        <Form.Group as={Col} controlId="formGriE-mail">
          <Form.Label></Form.Label>
          <Form.Control placeholder="E-mail" />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridProfile">
          <Form.Label></Form.Label>
          <Form.Select defaultValue="Perfil...">
            <option >Perfil...</option>
            <option value="opcao 2">Equipe 1</option>
            <option value="opcao 3">Equipe 2</option>        
            <option value="opcao 4">Equipe 3</option>           
          </Form.Select>
        </Form.Group>
        <Form.Group as={Col} controlId="formGridState">
          <Form.Label></Form.Label>
          <Form.Select defaultValue="Status...">
            <option >Status...</option>
            <option value="opcao 1">Ativo</option>
            <option value="opcao 2">Bloqueado</option>        
          </Form.Select>
        </Form.Group>
      </Row>  
    </Form>
  );
}

export default  FormUser;