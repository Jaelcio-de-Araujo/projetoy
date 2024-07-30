// LoginStyles.js

import styled from 'styled-components';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

export const StyledBody = styled.body`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color:	#DCDCDC; /* Cor de fundo específica para esta página */
  margin: 0;
  font-family: Arial, sans-serif;
`;

export const StyledContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Ajuste a altura conforme necessário */
`;

export const StyledRow = styled(Row)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledLeftCol = styled(Col)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #183859; /* Cor de fundo da coluna esquerda */
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  padding: 20px; /* Espaçamento interno */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Sombra suave */
`;

export const Logo = styled.img`
  max-width: 100%;
  height: auto;
  max-height: 200px; /* Ajuste o tamanho máximo da imagem conforme necessário */
`;

export const StyledRightCol = styled(Col)`
  background-color: white; /* Cor de fundo branca */
  padding: 40px; /* Espaçamento interno */
  border-top-right-radius: 10px; /* Arredondamento na borda superior direita */
  border-bottom-right-radius: 10px; /* Arredondamento na borda inferior direita */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Sombra suave */
`;

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
`;

export const StyledH2 = styled.h2`
  margin-bottom: 20px;
  color: #183859;
`;

export const ErrorMessage = styled.div`
  color: red;
  margin-bottom: 10px;
`;

export const StyledButton = styled(Button)`
  width: 100%;
  padding: 10px;
  margin-top: 10px;
  background-color: #abaca5;
  border: none;
`;
export const ForgotPassword = styled.a`
  display: block;
  margin-top: 10px;
  color: #333;
  text-align: center;
`;

export const Policy = styled.p`
  margin-top: 20px;
  font-size: 12px;
  color: #888;
  text-align: center;
`;

// Media query para telas pequenas
const breakpoint = '768px';

export const StyledLeftColSmallScreen = styled(StyledLeftCol)`
  @media (max-width: ${breakpoint}) {
    display: block; /* Garante que a coluna esquerda seja exibida em telas pequenas */
    flex: 1; /* Ocupa todo o espaço disponível */
  }
`;

export const StyledRightColSmallScreen = styled(StyledRightCol)`
  @media (max-width: ${breakpoint}) {
    padding: 20px; /* Ajusta o padding para telas pequenas */
  }
`;
