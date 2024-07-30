import React, { useState } from 'react';
import Header from '../../components/Header/Header/Header.jsx';
import Sidebar from '../../components/Sidebar/Sidebar.jsx';
import { NavLink } from 'react-router-dom';
import './CadastroAnalise.css';
import FormCadastroAnalise from './FormCadastroAnalise.jsx';
import ContentInfo from './ContentInfo.jsx';
import AlertImport from '../../components/AlertImport/AlertImport.jsx';

import ContentImg from './ContentImg.jsx';
import ButtonDescricao from './ButtonDescricao.jsx';
import MenuCarrossel from '../../components/MenuCarrossel/MenuCarrossel.jsx';



const CadastroAnalise = () => {
  const [showModal, setShowModal] = useState(false);
  
  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
  return (
    <div className="inicio-container">
      <Header />
      <div className="content-with-sidebar">
        <Sidebar />
        <div className="main-content">
          <p id='p'>Análises / Cadastro</p>
          <h1 id='h1'>Cadastro de Análise</h1>
          <NavLink to='/AlertExport' id='importcad' onClick={(e) => {
            e.preventDefault();
            handleShowModal();
          }}>
            Importar Arquivo com resgistros
          </NavLink>
          <FormCadastroAnalise />
          <MenuCarrossel />
          <ContentInfo />
          <ContentImg />
          <ButtonDescricao />
          <AlertImport show={showModal} handleClose={handleCloseModal} />
        </div>
      </div>
    </div>
  );
};

export default CadastroAnalise;
