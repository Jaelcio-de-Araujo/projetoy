import React, { useState } from 'react';
import Header from '../../components/Header/Header/Header.jsx';
import Sidebar from '../../components/Sidebar/Sidebar.jsx';
import { NavLink } from 'react-router-dom';
// Certifique-se de que o caminho está correto
import AlertExport from '../../components/AlertExport/AlertExport.jsx'; 

import './Analises.css';
import FormAnalisecliente from './FormAnalisecliente.jsx';
import TableAnalisecliente from './TableAnalisecliente.jsx';
import ButtonsAnalises from './ButtonsAnalises.jsx';

const Analises = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <div className="inicio-container">
      <Header />
      <div className="content-with-sidebar">
        <Sidebar />
        <div className="main-content">
          <p id='p'>Análises</p>
            <NavLink to='/analiseADM' id='areadoadmin'> 
              <button id='button-areadoadmin'> Área do adiministrador </button>
            </NavLink>

          <h1 id='h1'>Análises</h1>
          <NavLink to='/AlertExport' id='mais2' onClick={(e) => {
            e.preventDefault();
            handleShowModal();
          }}>
            Importar Arquivo
          </NavLink>
          <FormAnalisecliente />
          <TableAnalisecliente />
          <ButtonsAnalises />
        </div>
      </div>
      <AlertExport show={showModal} handleClose={handleCloseModal} />
    </div>
  );
};

export default Analises;
