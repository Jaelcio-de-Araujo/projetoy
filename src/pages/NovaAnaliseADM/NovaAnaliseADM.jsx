import React from 'react';
import Header from '../../components/Header/Header/Header.jsx';
import Sidebar from '../../components/Sidebar/Sidebar.jsx';
import './NovaAnaliseADM.css'; 
import FormNovaAnaliseADM from './FormNovaAnaliseADM.jsx';
import TableNovaAnaliseADM from './TableNovaAnaliseADM.jsx';
import ButtonConfirmADM from './ButtonConfirmADM.jsx';


const NovaAnaliseADM = () => {
  return (
    <div className="inicio-container">
        <Header />
      <div className="content-with-sidebar">
        <Sidebar />
        <div className="main-content">
          <p id='p'>Análises / Nova Análise</p>
          <h1 id='h1'>Nova Análise</h1>
          <FormNovaAnaliseADM />
          <TableNovaAnaliseADM />
          <ButtonConfirmADM />
        </div>
      </div>
    </div>
  );
};
export default NovaAnaliseADM;