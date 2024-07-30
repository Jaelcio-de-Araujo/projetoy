import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import './ButtonAnaliseADM.css';
function ButtonAnaliseADM() {
  return (
    <div id="button-container1">
      <NavLink to='/DetalheADM'>
        <Button variant="secondary" id='button-Detalhes' type="submit">
          Detalhes
        </Button>
      </NavLink>
      <NavLink to='/NovaAnaliseADM'>
        <Button variant="secondary" id='button-NovaAnalise' type="submit">
          Nova análise
        </Button>
      </NavLink>
      <NavLink to='/CadastroAnalise'>
        <Button variant="secondary" id='button-cadastroAnalise' type="submit">
          Cadastrar 
        </Button>
      </NavLink>
    </div>  
  );
}

export default ButtonAnaliseADM;