import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import  './FormUser.css' ;

function FormUser() {
  return (
    <Form id='Userform'>
      <Row id="formgroupUser">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label></Form.Label>
          <Form.Control type="text" placeholder="Nome" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label></Form.Label>
          <Form.Control type="text" placeholder="CPF" />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridAddress1">
          <Form.Label></Form.Label>
          <Form.Control placeholder="E-mail" />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridProfile">
          <Form.Label></Form.Label>
          <Form.Select defaultValue="Perfil...">
            <option>Perfil...</option>
            <option value="opcao 2">Equipe 1</option>
            <option value="opcao 3">Equipe 2</option>        
            <option value="opcao 4">Equipe 3</option>                
          </Form.Select>
        </Form.Group>
        <Form.Group as={Col} controlId="formGridState">
          <Form.Label></Form.Label>
          <Form.Select defaultValue="Status...">
            <option>Status...</option>
            <option value="opcao 1">Ativo</option>
            <option value="opcao 2">Bloqueado</option>            
          </Form.Select>
        </Form.Group>
      </Row>
      <div id="form-buttons">
        <NavLink to='#'>
          <Button variant="secondary" id='search-button' type="submit">
          Pesquisar
          </Button>
        </NavLink>
        <NavLink to='#'>
          <Button variant="secondary" id='clear-button' type="reset">
          Limpar
          </Button>
        </NavLink>
      </div>  
    </Form>
  );
}

export default  FormUser;