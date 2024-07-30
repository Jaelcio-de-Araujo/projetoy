import react from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import  './FormDetalheADM.css' ;

function FormDetalheADM() {
  return (
    <Form id='user-formdetalheadm'>
      <Row id="form-groupdetalheadm">    
        <Form.Group as={Col} controlId="formGridNomecomercial">
          <Form.Label></Form.Label>
          <Form.Control type="name" placeholder="Nome Comercial" />
        </Form.Group>
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
        <Form.Group as={Col} controlId="formGridResponsavel">
          <Form.Label></Form.Label>
          <Form.Select defaultValue="Responsavel...">
            <option >Responsável...</option>
            <option value="opcao 1">Nome do responsável</option>
            <option value="opcao 2">Nome do responsável</option>
            <option value="opcao 3">Nome do responsável</option>  
            <option value="opcao 4">Nome do responsável</option>          
          </Form.Select>
        </Form.Group>

      </Row>  
    </Form>
  );
}

export default  FormDetalheADM;