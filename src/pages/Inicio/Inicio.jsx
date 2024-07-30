import React from 'react';
import Header from '../../components/Header/Header/Header.jsx';
import Sidebar from '../../components/Sidebar/Sidebar.jsx';
import './Inicio.css'; // Estilo específico para a página inicial, se necessário


const Inicio = () => {
  return (
    <div className="inicio-container">
      <Header />
      <div className="content-with-sidebar">
        <Sidebar />
        <div className="main-content">
        <p id='p'>Início</p>
          <h1 id='h1'>Início</h1>
          <img id='logo' src="../../../public/yes-logoInicio.png" alt="logo " />         
        </div>
      </div>
    </div>
  );
};

export default Inicio;
