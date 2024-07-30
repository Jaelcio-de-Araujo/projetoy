import React from 'react';
import Header from '../../components/Header/Header/Header.jsx';
import Sidebar from '../../components/Sidebar/Sidebar.jsx';
import './DetalheADM.css';
import FormdetalheADM from './FormDetalheADM.jsx';
import TableDetalheADM from './TableDetalheADM.jsx';
import ContainerDetalheADM from './ContainerDetalheADM.jsx';


const DetalheADM = () => {
  return (
    <div className="inicio-container">
      <Header />
      <div className="content-with-sidebar">
        <Sidebar />
        <div className="main-content">
          <p id='p'>Detalhes / Detalhes de análise</p>
          <h1 id='h1'>Detalhes de análise</h1>
          <FormdetalheADM />
          <ContainerDetalheADM />
          <TableDetalheADM />
        </div>
      </div>
    </div>
  );
};

export default DetalheADM;