import React from 'react';
import { NavLink } from 'react-router-dom';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/esm/Button.js';
import {Row} from 'react-bootstrap'
import './Autenticacao.css'; 

const Autenticacao = () => {
  return (
    <>
        <body id="body-register">
        
            <Row id='conteiner-register'>
                <div id="right-register">
                    <img src="../../../public/logo.png" alt="logoaut" id="logoaut" />
                </div> 
                <div id="card-register">
                    <h1>Registro</h1>
                    <Form.Group as={Col} controlId="campos">
                        <Form.Label></Form.Label>
                        <Form.Control type="email" placeholder="E-mail" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="campos">
                        <Form.Label></Form.Label>
                        <Form.Control type="email" placeholder="Confirme o e-mail" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="campos">
                        <Form.Label></Form.Label>
                        <Form.Control type="password" placeholder="Senha" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="campos">
                        <Form.Label></Form.Label>
                        <Form.Control type="password" placeholder="Confirme a Senha" />
                    </Form.Group>

                    <NavLink to='/'>

                    <Button onclick="handleRegister()" id="btn-register">Cadastrar</Button>
                
                    </NavLink>
                </div>      
            </Row>
        </body>   
    </>
  );
};

export default Autenticacao;