import React, { useState } from 'react';
import axios from 'axios';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import {
  StyledBody,
  StyledContainer,
  StyledLeftCol,
  Logo,
  StyledRightCol,
  StyledForm,
  StyledH2,
  ErrorMessage,
  StyledButton,
  ForgotPassword,
  Policy
} from './LoginStyles'; // Importe os estilos do arquivo LoginStyles.js
import { NavLink } from 'react-router-dom';

const LoginComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/login', { email, password });
      const { token } = response.data;
      localStorage.setItem('token', token);
      setMessage('Login bem-sucedido!');
    } catch (error) {
      setMessage('Usuário ou senha incorretos!');
    }
  };

  return (
    <StyledBody>
      <StyledContainer className="login-container">
        <Row> {/* Utilize o Row aqui para estruturar o layout */}
          <StyledLeftCol md={6} className="login-left">
            <Logo src="../../../../public/logo.png" alt="Logo" className="logo" />
          </StyledLeftCol>
          <StyledRightCol md={6} className="login-right">
            <StyledForm onSubmit={handleSubmit} className="login-form">
              <StyledH2>Autenticação</StyledH2>
              <Form.Group controlId="formEmail">
                <Form.Label>E-mail*</Form.Label>
                <Form.Control
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </Form.Group>
              <Form.Group controlId="formPassword">
                <Form.Label>Senha*</Form.Label>
                <Form.Control
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </Form.Group>
              {message && <ErrorMessage>{message}</ErrorMessage>}
              <StyledButton type="submit" className="login-button" variant="success">Entrar</StyledButton>
              <NavLink to='/Autenticacao'>
                <ForgotPassword href="" className="forgot-password">Esqueci minha senha</ForgotPassword>
              </NavLink>  
              <Policy>
                Ao efetuar login, declaro estar de acordo com a <a href="#">Política de Privacidade</a> e o <a href="#">Termo de Uso</a> da Plataforma
              </Policy>
            </StyledForm>
          </StyledRightCol>
        </Row>
      </StyledContainer>
    </StyledBody>
  );
};

export default LoginComponent;
