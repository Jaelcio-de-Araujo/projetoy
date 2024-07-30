import React from 'react';
import Header from '../../components/Header/Header/Header.jsx';
import Sidebar from '../../components/Sidebar/Sidebar.jsx';
import './CadastroEmpresa.css'; 

import CadastroEmpresa1  from './CadastroEmpresa1.jsx';


import ButtonsCadastroEmpresa from './ButtonsCadastroEmpresa.jsx';


const CadastroEmpresa = () => {
  return (
    <div className="inicio-container">
        <Header />
      <div className="content-with-sidebar">
        <Sidebar />
        <div className="main-content">
          <h1 id='Dados'>Dados da Empresa</h1>
          <CadastroEmpresa1 />
          <ButtonsCadastroEmpresa />
        </div>
      </div>
    </div>
  );
};
export default CadastroEmpresa;