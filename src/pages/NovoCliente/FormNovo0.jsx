import reac from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import  './FormNovo0.css' ;  

function FormNovo0() {
  return (
  <>
    <Form id='user-formNovo0'>
      <Row id="form-groupNovo0">
          
              <Form.Group as={Col} controlId="formGridStatus1">
                <Form.Label></Form.Label>
                <Form.Control type="text" placeholder="Status" />
              </Form.Group>
       
              <Form.Group as={Col} controlId="formGridSaldo1">
                <Form.Label></Form.Label>
                <Form.Control type="text" placeholder="Saldo de Rótulos" />
              </Form.Group>
      </Row> 
    </Form>

    <Form id='user-formNovo1'>
      <Row id="form-groupNovo">
          
              <Form.Group as={Col} controlId="formGridCNPJ1">
                <Form.Label></Form.Label>
                <Form.Control placeholder="CNPJ" />
              </Form.Group>
       
              <Form.Group as={Col} controlId="formGridRazaoSocial1">
                <Form.Label></Form.Label>
                <Form.Control type="text" placeholder="Razão Social" />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridNomeFantasia1">
                <Form.Label></Form.Label>
                <Form.Control type="text" placeholder="Nome Fantasia" />
              </Form.Group>
        
              <Form.Group as={Col} controlId="formGridSeguimento1">
                <Form.Label></Form.Label>
                <Form.Select defaultValue="Seguimento...">
                  <option >Segmento...</option>
                  <option value="opcao 2">Importador</option>
                  <option value="opcao 3">Certificador</option>        
                  <option value="opcao 4">Distribuidor</option>           
                </Form.Select>
              </Form.Group>
              <Form.Group as={Col} controlId="formGridScope1">
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
         
              <Form.Group as={Col} controlId="formGridSAC1">     
                  <Form.Label></Form.Label>
                  <Form.Control placeholder="SAC E-mail" />        
              </Form.Group>    
                  <Form.Group as={Col} controlId="formGridTel1">
                  <Form.Label></Form.Label>
                  <Form.Control placeholder="Telefone" />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridCel1">
                  <Form.Label></Form.Label>
                  <Form.Control placeholder="Celular" />
              </Form.Group>   
           
      </Row> 
    </Form>
     
    
     <p id='p3'>Endereço</p>
     <Form id='user-formNovo2'>
       <Row id="form-groupNovo">
           
               <Form.Group as={Col} controlId="formGridCEP1">
                 <Form.Label></Form.Label>
                 <Form.Control type="text" placeholder="CEP" />
               </Form.Group>
        
               <Form.Group as={Col} controlId="formGridRua1">
                 <Form.Label></Form.Label>
                 <Form.Control type="text" placeholder="Rua" />
               </Form.Group>
               <Form.Group as={Col} controlId="formGridNumero1">
                 <Form.Label></Form.Label>
                 <Form.Control type="text" placeholder="Número" />
               </Form.Group>
               <Form.Group as={Col} controlId="formGridComplemento1">
                 <Form.Label></Form.Label>
                 <Form.Control type="text" placeholder="Complemento" />
               </Form.Group>
               <Form.Group as={Col} controlId="formGridBairro1">
                 <Form.Label></Form.Label>
                 <Form.Control type="text" placeholder="Bairro" />
               </Form.Group>
               <Form.Group as={Col} controlId="formGridEstado1">
                 <Form.Label></Form.Label>
                 <Form.Select defaultValue="Estado...">
                   <option >Estado...</option>
                   <option value="opção 2"></option>
                   <option value="opção 3"></option>        
                   <option value="opção 4"></option>  
                   <option value="opção 5">
                   </option>
                   <option value="opção 6"></option>        
                   <option value="opção 7">
                   </option>
                   <option value="opção 8"></option>
                   <option value="opção 9"></option>        
                   <option value="opção 10"></option>
                   <option value="opção 11"></option>
                   <option value="opção 12"></option>        
                   <option value="opção 13"></option>   
                   <option value="opção 14"></option>
                   <option value="opção 15"></option>        
                   <option value="opção 16"></option>   
                   <option value="opção 17">
                   </option>
                   <option value="opção 18"></option>        
                   <option value="opção 19"></option>      
                   <option value="opção 20"></option>
                   <option value="opção 21"></option>        
                   <option value="opção 22"></option> 
                   <option value="opção 23"></option>
                   <option value="opção 24"></option>        
                   <option value="opção 25"></option> 
                   <option value="opção 26"></option>
                   <option value="opção 27"></option> 
                   <option value="opção 28"></option>                 
                 </Form.Select>
               </Form.Group>
               <Form.Group as={Col} controlId="formGridCidade1">
                 <Form.Label></Form.Label>
                 <Form.Select defaultValue="Cidade...">
                   <option >Cidade...</option>
                   <option value="opção 1"></option>
                   <option value="opção 2"></option>
                   <option value="opção 1"></option>
                   <option value="opção 2"></option> 
                   <option value="opção 1"></option>
                   <option value="opção 2"></option>
                   <option value="opção 1"></option>
                   <option value="opção 2"></option> 
               </Form.Select>
               </Form.Group> 
       </Row> 
     </Form>
 
     <Form id='user-formNovo3'>
       <Row id="form-groupNovo3">
           
               <Form.Group as={Col} controlId="formGridUsuario1">
                 <Form.Check type="checkbox" label="Criar Usuário" />
               </Form.Group>
             
               <Form.Group as={Col} controlId="formGridEmail1">
                 <Form.Label></Form.Label>
                 <Form.Control type="Email" placeholder="E-mail" />
               </Form.Group>
       </Row> 
     </Form>
  </>
  );
}

export default  FormNovo0;