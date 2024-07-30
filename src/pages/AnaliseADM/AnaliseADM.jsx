import React, { useState } from 'react';
import Header from '../../components/Header/Header/Header.jsx';
import Sidebar from '../../components/Sidebar/Sidebar.jsx';

import './AnaliseADM.css';
import FormAnaliseADM from '../AnaliseADM/FormAnaliseADM.jsx';
import TableAnaliseADM from '../AnaliseADM/TableAnaliseADM.jsx';
import ButtonAnaliseADM from '../AnaliseADM/ButtonAnaliseADM.jsx';

const AnaliseADM = () => {
  return (
    <div className="inicio-container">
      <Header />
      <div className="content-with-sidebar">
        <Sidebar />
        <div className="main-content">
          <p id='p'>Análises</p>
          <h1 id='h1'>Análises</h1>
          <FormAnaliseADM />
          <TableAnaliseADM />
          <ButtonAnaliseADM />
        </div>
      </div>
    </div>
  );
};

export default AnaliseADM;
