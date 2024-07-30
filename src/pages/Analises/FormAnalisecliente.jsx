import React from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import  './FormAnalisecliente.css' ;

function FormAnalisecliente1() {
  return (
    <Form id='user-formAnalisecliente1'>
      <Row id="form-groupAnalisecliente1">    
        <Form.Group as={Col} controlId="formGridEscopo">
          <Form.Label></Form.Label>
          <Form.Select defaultValue="Escopo...">
            <option >Escopo...</option>
            <option value="opção 2">Brinquedos </option>
            <option value="opção 3">Eletrodomésticos </option>        
            <option value="opção 4">Panelas</option>  
            <option value="opção 5">Artigos Escolares</option>  
            <option value="opção 6">Anatel</option>  
            <option value="opção 7">ARLA-32</option>  
            <option value="opção 8">Ventiladores</option>  
            <option value="opção 9">Fotovoutaico</option>       
          </Form.Select>
        </Form.Group>
        <Form.Group as={Col} controlId="formGridFamilia">
          <Form.Label></Form.Label>
          <Form.Select defaultValue="Familia...">
            <option >Família...</option>
            <option value="opção 1">Tipo 1</option>
            <option value="opção 2">Tipo 2</option>
            <option value="opção 3">Tipo 3</option> 
            <option value="opção 4">Tipo 4</option>         
          </Form.Select>
        </Form.Group>
        <Form.Group as={Col} controlId="formGridState">
          <Form.Label></Form.Label>
          <Form.Select defaultValue="Status...">
            <option >Quantidade...</option>
            <option value="opção 1"></option>
            <option value="opção 2"></option>
            <option value="opção 3"></option>  
            <option value="opção 4"></option>          
          </Form.Select>
        </Form.Group>
        <Form.Group as={Col} controlId="formGridSolicitacao">
          <Form.Label></Form.Label>
          <Form.Control type="date" placeholder="Solicitação" />
        </Form.Group>
      </Row>  
    </Form>
  );
}

export default FormAnalisecliente1;