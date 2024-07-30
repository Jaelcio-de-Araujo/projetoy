import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faChartBar, faUsers, faUser, faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <div className={`sidebar-container ${isSidebarVisible ? 'visible' : ''}`}>
      <button className="toggle-button" onClick={toggleSidebar}>
        <FontAwesomeIcon icon={isSidebarVisible ? faArrowLeft : faArrowRight} />
      </button>
      <aside className={`sidebar ${isSidebarVisible ? 'visible' : ''}`}>
        <ul className="sidebar-menu">
          <li className="sidebar-item">
            <FontAwesomeIcon icon={faHome} className="sidebar-icon" />
            <NavLink exact to="/" activeClassName="active">Inicio</NavLink>
          </li>
          <li className="sidebar-item">
            <FontAwesomeIcon icon={faChartBar} className="sidebar-icon" />
            <NavLink to="/analises" activeClassName="active">Análises</NavLink>
          </li>
          <li className="sidebar-item">
            <FontAwesomeIcon icon={faUser} className="sidebar-icon" />
            <NavLink to="/usuarios" activeClassName="active">Usuários</NavLink>
          </li>
          <li className="sidebar-item">
            <FontAwesomeIcon icon={faUsers} className="sidebar-icon" />
            <NavLink to="/clientes" activeClassName="active">Clientes</NavLink>
          </li>
        </ul>
      </aside>
    </div>
  );
};

export default Sidebar;
