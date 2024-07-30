import React from 'react';
import Header from '../../components/Header/Header/Header.jsx';
import Sidebar from '../../components/Sidebar/Sidebar.jsx';
import './NovaAnalise.css'; 
import FormNovaAnalise from './FormNovaAnalise.jsx';
import TableNovaAnalise from './TableNovaAnalise.jsx';
import ButtonConfirmAnalise from './ButtonConfirmAnalise.jsx';


const NovaAnalise = () => {
  return (
    <div className="inicio-container">
        <Header />
      <div className="content-with-sidebar">
        <Sidebar />
        <div className="main-content">
          <p id='p'>Análises / Nova Análise</p>
          <h1 id='h1'>Nova Análise</h1>
          <FormNovaAnalise />
          <TableNovaAnalise />
          <ButtonConfirmAnalise />
        </div>
      </div>
    </div>
  );
};
export default NovaAnalise;