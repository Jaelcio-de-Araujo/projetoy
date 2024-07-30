import React from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { NavLink } from 'react-router-dom';
import  './FormCadastroAnalise.css' ;

function FormCadastroAnalise() {
  return (
  <>
    <Form id='user-formCadastroAnalise'>
      <Row id="form-groupCadastroAnalise">    
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
        <Form.Group as={Col} controlId="formGridOCP">
          <Form.Label></Form.Label>
          <Form.Select defaultValue="OCP...">
            <option >OCP...</option>
            <option value="opcao 1"></option>
            <option value="opcao 2"></option>
            <option value="opcao 3"></option> 
            <option value="opcao 4"></option>         
          </Form.Select>
        </Form.Group>
      </Row>  
    </Form>
    <h1 id='dados'>Dados da Empresa</h1>
    <p id='adcEmpresa'>Adicionar empresa relacionada</p> 
    <Form id='formContentCadastro'>
      <Row id="form-groupcontentCadastro">    
        <Form.Group as={Col} controlId="formGridRelacao">
          <Form.Label></Form.Label>
          <Form.Select defaultValue="Relacao...">
            <option >Relação...</option>
            <option value="opcao 2"> </option>
            <option value="opcao 3"> </option>        
            <option value="opcao 4"></option>  
            <option value="opcao 5"></option>  
            <option value="opcao 6"></option>  
            <option value="opcao 7"></option>  
            <option value="opcao 8"></option>  
            <option value="opcao 9"></option>       
          </Form.Select>
        </Form.Group>
        <Form.Group as={Col} controlId="formGridRazaosocial">
          <Form.Label></Form.Label>
          <Form.Select defaultValue="Razaosocial...">
            <option >Razão Social...</option>
            <option value="opcao 1"></option>
            <option value="opcao 2"></option>
            <option value="opcao 3"></option> 
            <option value="opcao 4"></option>         
          </Form.Select>
        </Form.Group>
      </Row>  
    </Form>
    <NavLink to="/CadastroEmpresa" >
      <Button id='cadastrarempresa' variant="secondary"  type="button" >
        + Cadastrar Empresa
      </Button>
      </NavLink>
    <Form id='user-formCadastroanalise2'>
      <Row id="form-groupCadastroanalise2">    
        <Form.Group as={Col} controlId="formGridPaisOrigem">
          <Form.Label></Form.Label>
          <Form.Select defaultValue="Pais de Origem...">
            <option >País de Origem...</option>
            <option value="opcao 2"> </option>
            <option value="opcao 3"> </option>        
            <option value="opcao 4"></option>  
            <option value="opcao 5"></option>  
            <option value="opcao 6"></option>  
            <option value="opcao 7"></option>  
            <option value="opcao 8"></option>  
            <option value="opcao 9"></option>       
          </Form.Select>
        </Form.Group>
        <Form.Group as={Col} controlId="formGridlote">
          <Form.Label></Form.Label>
          <Form.Control type="text" placeholder="Lote" />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridData">
          <Form.Label></Form.Label>
          <Form.Control type="date" placeholder="Data de Fabricação" />
        </Form.Group>
      </Row>  
    </Form> 
    
    <h1 id='descricaoproduto'>Descrição do Produto</h1>
    <NavLink to="#" id='novoproduto'>+ Novo Produto</NavLink>
    <Form id='user-formDescricao'>
      <Row id="form-groupDescricao">
      <Form.Group as={Col} controlId="formGridFamilia2">
          <Form.Label></Form.Label>
          <Form.Control type="text" placeholder="Família" />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridMarca">
          <Form.Label></Form.Label>
          <Form.Control type="text" placeholder="Marca" />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridNomeComercial">
          <Form.Label></Form.Label>
          <Form.Control type="text" placeholder="Nome Comercial" />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridQuantidade">
          <Form.Label></Form.Label>
          <Form.Control type="text" placeholder="Quantidade" />
        </Form.Group> 

      </Row>  
    </Form>
    <Form id='referencia'>
        <Form.Group as={Col} controlId="formGridReferencia">
        <Form.Label></Form.Label>
          <Form.Select defaultValue="Referencia...">
            <option >Referencia...</option>
            <option value="opcao 1"></option>
            <option value="opcao 2"></option>
            <option value="opcao 3"></option> 
            <option value="opcao 4"></option>         
          </Form.Select>
        </Form.Group>
    </Form>

    <Form id='user-formDescricao2'>
      <Row id="form-groupDescricao2">
        <Form.Group as={Col} controlId="formGridComposicao">
        <Form.Label></Form.Label>
          <Form.Select defaultValue="Composicao...">
            <option >Composição...</option>
            <option value="opcao 1"></option>
            <option value="opcao 2"></option>
            <option value="opcao 3"></option> 
            <option value="opcao 4"></option>         
          </Form.Select>
        </Form.Group>
        <Form.Group as={Col} controlId="formGridValidade">
        <Form.Label></Form.Label>
          <Form.Select defaultValue="Validade...">
            <option >Validade...</option>
            <option value="opcao 1"></option>
            <option value="opcao 2"></option>
            <option value="opcao 3"></option> 
            <option value="opcao 4"></option>         
          </Form.Select>
        </Form.Group>
      </Row>  
    </Form>


    <Form id='user-formDescricao3'>
      <Row id="form-groupDescricao3">
        <Form.Group as={Col} controlId="formGridCodigo">
          <Form.Label></Form.Label>
          <Form.Control type="text" placeholder="Código de Barras" />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridNumeroderegistro">
          <Form.Label></Form.Label>
          <Form.Control type="text" placeholder="Número de Registro" />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridFuncao">
        <Form.Label></Form.Label>
          <Form.Select defaultValue="Funcao...">
            <option >Funcionalidade...</option>
            <option value="opcao 1"></option>
            <option value="opcao 2"></option>
            <option value="opcao 3"></option> 
            <option value="opcao 4"></option>         
          </Form.Select>
        </Form.Group>
        <Form.Group as={Col} controlId="formGridEletrico">
        <Form.Label></Form.Label>
          <Form.Select defaultValue="Eletrico...">
            <option >Elétrico...</option>
            <option value="opcao 1"></option>
            <option value="opcao 2"></option>
            <option value="opcao 3"></option> 
            <option value="opcao 4"></option>         
          </Form.Select>
        </Form.Group>
        <Form.Group as={Col} controlId="formGridRestricao">
        <Form.Label></Form.Label>
          <Form.Select defaultValue="Restricao...">
            <option >Restrição...</option>
            <option value="opcao 1"></option>
            <option value="opcao 2"></option>
            <option value="opcao 3"></option> 
            <option value="opcao 4"></option>         
          </Form.Select>
        </Form.Group>
        <Form.Group as={Col} controlId="formGridIndicacao">
        <Form.Label></Form.Label>
          <Form.Select defaultValue="Indicacao...">
            <option >Indicação...</option>
            <option value="opcao 1"></option>
            <option value="opcao 2"></option>
            <option value="opcao 3"></option> 
            <option value="opcao 4"></option>         
          </Form.Select>
        </Form.Group>
      </Row>  
    </Form>
    <Form id='user-formDescricao4'>
      <Row id="form-groupDescricao4">
        <NavLink id='NovoAlerta' to='#'>+ Novo Alerta</NavLink>
        <Form.Group as={Col} controlId="formGridAlerta">
          <Form.Label></Form.Label>
          <Form.Control type="text" placeholder="Alerta" />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridFrase">
        <Form.Label></Form.Label>
          <Form.Select defaultValue="Frase...">
            <option >Frase...</option>
            <option value="opcao 1"></option>
            <option value="opcao 2"></option>
            <option value="opcao 3"></option> 
            <option value="opcao 4"></option>         
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridAlerta">
          <Form.Label></Form.Label>
          <Form.Control type="text" placeholder="Alerta" />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridFrase">
        <Form.Label></Form.Label>
          <Form.Select defaultValue="Frase...">
            <option >Frase...</option>
            <option value="opcao 1"></option>
            <option value="opcao 2"></option>
            <option value="opcao 3"></option> 
            <option value="opcao 4"></option>         
          </Form.Select>
        </Form.Group>
      </Row>  
    </Form>
  </>
  );
}

export default  FormCadastroAnalise;