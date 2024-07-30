import React from 'react';
import Header from '../../components/Header/Header/Header.jsx';
import Sidebar from '../../components/Sidebar/Sidebar.jsx';
import './NovoCliente.css'; 

import FormNovo0 from './FormNovo0.jsx';



import Buttons from './ButtonsNovocliente.jsx';


const NovoCliente = () => {
  return (
    <div className="inicio-container">
        <Header />
      <div className="content-with-sidebar">
        <Sidebar />
        <div className="main-content">
          <p id='p'>Clientes /Novo Cliente </p>
          <h1 id='h1'>Cadastro de Clientes</h1>
          <p id='p2'>Dados da Empresa</p>
          <FormNovo0 />
          <Buttons />
        </div>
      </div>
    </div>
  );
};
export default NovoCliente;