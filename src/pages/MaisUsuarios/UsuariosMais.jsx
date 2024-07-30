import React from 'react';
import Header from '../../components/Header/Header/Header.jsx';
import Sidebar from '../../components/Sidebar/Sidebar.jsx';
import './UsuariosMais.css'; 
import FormMais from './FormMais.jsx';
import Buttons from './Buttons.jsx';

const MaisUsuarios = () => {
  return (
    <div className="inicio-container">
        <Header />
      <div className="content-with-sidebar">
        <Sidebar />
        <div className="main-content">
          <p id='p'>Usuário /Cadastro de Usuário </p>
          <h1 id='h1'>Cadastro de Usuário</h1>
          <FormMais /> 
          <Buttons />
        </div>
      </div>
    </div>
  );
};
export default MaisUsuarios;