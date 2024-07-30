import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import './ButtonsAnalises.css';
function ButtonsAnalises() {
  return (
    <div id="button-container1">
      <NavLink to='/Detalhes'>
        <Button variant="secondary" id='button-Detalhes' type="submit">
          Detalhes
        </Button>
      </NavLink>
      <NavLink to='/NovaAnalise'>
        <Button variant="secondary" id='button-NovaAnalise' type="submit">
          Nova análise
        </Button>
      </NavLink>
    </div>  
  );
}

export default ButtonsAnalises;