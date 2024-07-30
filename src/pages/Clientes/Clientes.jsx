import React from 'react';
import Header from '../../components/Header/Header/Header.jsx';
import Sidebar from '../../components/Sidebar/Sidebar.jsx';
import './Clientes.css';
import FormCliente from './FormCliente.jsx';
import TableCliente from './TableCliente.jsx';
import { NavLink } from 'react-router-dom';

const Clientes = () => {
  return (
    <div className="inicio-container">
      <Header />
      <div className="content-with-sidebar">
        <Sidebar />
        <div className="main-content">
          <p id='p'>Clientes</p>
          <h1 id='h1'>Clientes</h1>
          <NavLink to='/NovoCliente' id='mais'>+ Novo Cliente</NavLink>
          <FormCliente />
          <TableCliente />
        </div>
      </div>
    </div>
  );
};

export default Clientes;