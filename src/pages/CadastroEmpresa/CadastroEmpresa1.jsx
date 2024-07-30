import React from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import  './CadastroEmpresa1.css' ;  

function CadastroEmpresa1() {
  return (
   <>
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
        
              <Form.Group as={Col} controlId="formGridSegmento1">
                <Form.Label></Form.Label>
                <Form.Select defaultValue="Segmento...">
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
  

          <p id='End'>Endereço</p>
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
                            <option value="opcao 2"></option>
                            <option value="opcao 3"></option>        
                            <option value="opcao 4"></option>  
                            <option value="opcao 5">
                            </option>
                            <option value="opcao 6"></option>        
                            <option value="opcao 7">
                            </option>
                            <option value="opcao 8"></option>
                            <option value="opcao 9"></option>        
                            <option value="opcao 10"></option>
                            <option value="opcao 11"></option>
                            <option value="opcao 12"></option>        
                            <option value="opcao 13"></option>   
                            <option value="opcao 14"></option>
                            <option value="opcao 15"></option>        
                            <option value="opcao 16"></option>   
                            <option value="opcao 17">
                            </option>
                            <option value="opcao 18"></option>        
                            <option value="opcao 19"></option>      
                            <option value="opcao 20"></option>
                            <option value="opcao 21"></option>        
                            <option value="opcao 22"></option> 
                            <option value="opcao 23"></option>
                            <option value="opcao 24"></option>        
                            <option value="opcao 25"></option> 
                            <option value="opcao 26"></option>
                            <option value="opcao 27"></option> 
                            <option value="opcao 28"></option>                 
                          </Form.Select>
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridCidade1">
                          <Form.Label></Form.Label>
                          <Form.Select defaultValue="Cidade...">
                            <option >Cidade...</option>
                            <option value="opcao 1"></option>
                            <option value="opcao 2"></option>
                            <option value="opcao 1"></option>
                            <option value="opcao 2"></option> 
                            <option value="opcao 1"></option>
                            <option value="opcao 2"></option>
                            <option value="opcao 1"></option>
                            <option value="opcao 2"></option> 
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

export default  CadastroEmpresa1;