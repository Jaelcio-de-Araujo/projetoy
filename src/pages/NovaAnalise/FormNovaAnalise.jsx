import React from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import  './FormNovaAnalise.css' ;

function FormNovaAnalise() {
  return (
    <Form id='user-formNovaAnaliseCliente'>
      <Row id="form-groupNovaAnalisecliente">    
        <Form.Group as={Col} controlId="formGridEscopo">
          <Form.Label></Form.Label>
          <Form.Select defaultValue="Escopo...">
            <option >Escopo...</option>
            <option value="opcao 2">Brinquedos </option>
            <option value="opcao 3">Eletrodomésticos </option>        
            <option value="opcao 4">Panelas</option>  
            <option value="opcao 5">Artigos Escolares</option>  
            <option value="opcao 6">Anatel</option>  
            <option value="opcao 7">ARLA-32</option>  
            <option value="opcao 8">Ventiladores</option>  
            <option value="opcao 9">Fotovoutaico</option>       
          </Form.Select>
        </Form.Group>
        <Form.Group as={Col} controlId="formGridFamilia">
          <Form.Label></Form.Label>
          <Form.Select defaultValue="Familia...">
            <option >Família...</option>
            <option value="opcao 1">Tipo 1</option>
            <option value="opcao 2">Tipo 2</option>
            <option value="opcao 3">Tipo 3</option> 
            <option value="opcao 4">Tipo 4</option>         
          </Form.Select>
        </Form.Group>
        <Form.Group as={Col} controlId="formGridState">
          <Form.Label></Form.Label>
          <Form.Select defaultValue="Status...">
            <option >Status...</option>
            <option value="opcao 1">Pendente</option>
            <option value="opcao 2">Em Criaçao</option>
            <option value="opcao 3">Concluido</option>  
            <option value="opcao 4">Gerado</option>          
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

export default FormNovaAnalise;