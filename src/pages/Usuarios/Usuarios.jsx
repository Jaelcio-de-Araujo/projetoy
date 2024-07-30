import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from '../../components/Header/Header/Header.jsx';
import Sidebar from '../../components/Sidebar/Sidebar.jsx';
import './Usuarios.css'; 
import FormUser from './FormUser.jsx';
import TableUser from './TableUser.jsx';

const Usuarios = () => {
  return (
    <div className="inicio-container">
        <Header />
      <div className="content-with-sidebar">
        <Sidebar />
        <div className="main-content">
          <p id='p'>Usuário</p>
          <h1 id='h1'>Usuário</h1>
          <NavLink  to="../MaisUsuarios" id='mais'>+ Mais Usuarios</NavLink>
          <FormUser /> 
          <TableUser/>  
        </div>
      </div>
    </div>
  );
};

export default Usuarios;