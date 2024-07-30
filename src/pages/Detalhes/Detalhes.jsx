import React from 'react';
import Header from '../../components/Header/Header/Header.jsx';
import Sidebar from '../../components/Sidebar/Sidebar.jsx';
import './Detalhes.css';
import Formdetalhes from './FormDetalhes.jsx';
import TableDetalhes from './TableDetalhes.jsx';
import ContainerExport from './ContainerExport.jsx';


const Detalhes = () => {
  return (
    <div className="inicio-container">
      <Header />
      <div className="content-with-sidebar">
        <Sidebar />
        <div className="main-content">
          <p id='p'>Detalhes / Detalhes de Análise</p>
          <h1 id='h1'>Detalhes de Análise</h1>
          <Formdetalhes />
          <ContainerExport />
          <TableDetalhes />
        </div>
      </div>
    </div>
  );
};

export default Detalhes;