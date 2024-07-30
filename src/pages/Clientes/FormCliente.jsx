import React from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import  './FormCliente.css' ;

import { NavLink } from 'react-router-dom';

function FormCliente() {
  return (
    <Form id='user-formCliente'>
      <Row id="form-groupCliente">
        <Form.Group as={Col} controlId="formGridRazaoSocial">
          <Form.Label></Form.Label>
          <Form.Control type="text" placeholder="Razão Social" />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridNomeFantasia">
          <Form.Label></Form.Label>
          <Form.Control type="text" placeholder="Nome Fantasia" />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridCPF">
          <Form.Label></Form.Label>
          <Form.Control placeholder="CPF" />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridSegmento">
          <Form.Label></Form.Label>
          <Form.Select defaultValue="Segmento...">
            <option >Segmento...</option>
            <option value="opcao 2">Importador</option>
            <option value="opcao 3">Certificador</option>        
            <option value="opcao 4">Distribuidor</option>           
          </Form.Select>
        </Form.Group>
        <Form.Group as={Col} controlId="formGridScope">
          <Form.Label></Form.Label>
          <Form.Select defaultValue="Escopo...">
            <option >Escopo...</option>
            <option value="opcao 1">Brinquedos</option>
            <option value="opcao 2">Eletrodomésticos</option>
            <option value="opcao 1">Panelas</option>
            <option value="opcao 2">Artigos Escolares</option> 
            <option value="opcao 1">Anatel</option>
            <option value="opcao 2">ARLA-32</option>
            <option value="opcao 1">Ventiladores</option>
            <option value="opcao 2">Fotovoltaico</option>          
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
      <div id="form-buttons">
          <NavLink to='#'>
            <Button  variant="secondary" id='search-button' type="submit">
            Pesquisar
            </Button>
          </NavLink>
          <NavLink to='#'>
            <Button  variant="secondary" id='clear-button' type="reset">
            Limpar
            </Button>
          </NavLink>
      </div>  
    </Form>
 
  );
}

export default  FormCliente;