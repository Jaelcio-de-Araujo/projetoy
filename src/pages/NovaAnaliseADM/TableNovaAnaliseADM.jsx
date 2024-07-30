import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import { FaTrash } from 'react-icons/fa';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import './TableNovaAnaliseADM.css';

function TableNovaAnaliseADM() {
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);

  const handleDelete = () => {
    setShowSuccessAlert(true);
    setTimeout(() => {
      setShowSuccessAlert(false);
      window.location.href = '/novaanaliseADM';
    }, 2000);
  };
  const data = [
    {
      ID: ['01', '02', '03', '04', '05'],
      cliente: ['Nome do cliente'],
      scope:  ['Brinquedos', 'Artigos Escolares','Eletrodomesticos','Panelas','Anatel','ARLA-32','Ventiladores','Fotovoltaicos'],
      familia:  ['Do tipo 1', 'Do tipo 2','Do tipo 3','Do tipo 4'],
      rotulos: ['500', '200','5000','250','50'],
      solicitação: ['00/00/0000'],
      state: ['Pendente', 'Em Criação','Concuido','Gerado'],
      acoes:  (
        <Button variant="danger" id="acoes-adm" onClick={handleDelete}>
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
            <td>{item.cliente[0]}</td>
            <td>{item.scope[0]}</td>
            <td>{item.familia[0]}</td> 
            <td>{item.rotulos[0]}</td>
            <td>{item.solicitação}</td>
            <td>{item.state[0]}</td>
            <td>{item.acoes}</td>
          </tr>
        ))}

      </tbody>
    </Table>
  </>
  );
}

export default TableNovaAnaliseADM;