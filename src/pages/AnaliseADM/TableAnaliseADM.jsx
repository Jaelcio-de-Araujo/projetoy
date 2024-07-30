import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import { FaTrash } from 'react-icons/fa';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import './TableAnaliseADM.css';

function TableAnaliseADM() {
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);

  const handleDelete = () => {
    setShowSuccessAlert(true);
    setTimeout(() => {
      setShowSuccessAlert(false);
      window.location.href = '/analiseADM';
    }, 1000);
  };
  const data = [
    {
      ID: ['01', '02', '03', '04', '05'],
      cliente: ['Nome do Cliente'],
      scope:  ['Brinquedos', 'Artigos Escolares','Eletrodomesticos','Panelas','Anatel','ARLA-32','Ventiladores','Fotovoltaicos'],
      familia:  ['Do tipo 1', 'Do tipo 2','Do tipo 3','Do tipo 4'],
      rotulos: ['500', '200','5000','250','50'],
      solicitacao: ['00/00/0000'],
      state: ['Pendente', 'Em Criação','Concuido','Gerado'],
      acoes: (
        <Button variant="danger" id="acoes-user" onClick={handleDelete}>
          <FaTrash />
        </Button>
      ),
    },
  ];

  return (
  <>
    {showSuccessAlert && (
      <Alert id="cancel-user" variant="danger">
        Análise excluída!
      </Alert>
    )}
    <Table responsive>
      <thead>
        <tr>
          <th>ID</th>
          <th>Cliente</th>
          <th>Escopo</th>
          <th>Família</th>
          <th>Rotulos</th>
          <th>Solicitação</th>
          <th>Status</th>
          <th>Ações</th>
          
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.ID[0]}</td>
            <td>{item.cliente}</td>
            <td>{item.scope[0]}</td>
            <td>{item.familia[0]}</td> 
            <td>{item.rotulos[0]}</td>
            <td>{item.solicitacao}</td>
            <td>{item.state[0]}</td>
            <td>{item.acoes}</td>
          </tr>
        ))}
        {data.map((item, index) => (         
          <tr key={index}>
            <td>{item.ID[1]}</td>
            <td>{item.cliente}</td>
            <td>{item.scope[1]}</td>
            <td>{item.familia[1]}</td> 
            <td>{item.rotulos[1]}</td>
            <td>{item.solicitacao}</td>
            <td>{item.state[1]}</td>
            <td>{item.acoes}</td>
          </tr>
        ))}
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.ID[2]}</td>
            <td>{item.cliente}</td>
            <td>{item.scope[1]}</td>
            <td>{item.familia[3]}</td> 
            <td>{item.rotulos[2]}</td>
            <td>{item.solicitacao}</td>
            <td>{item.state[1]}</td>
            <td>{item.acoes}</td>
          </tr>
        ))}
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.ID[3]}</td>
            <td>{item.cliente}</td>
            <td>{item.scope[1]}</td>
            <td>{item.familia[1]}</td> 
            <td>{item.rotulos[3]}</td>
            <td>{item.solicitacao}</td>
            <td>{item.state[2]}</td>
            <td>{item.acoes}</td>
          </tr>  
        ))}
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.ID[4]}</td>
            <td>{item.cliente}</td>
            <td>{item.scope[0]}</td>
            <td>{item.familia[0]}</td> 
            <td>{item.rotulos[4]}</td>
            <td>{item.solicitacao}</td>
            <td>{item.state[3]}</td>
            <td>{item.acoes}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  </>
  );
}

export default TableAnaliseADM;