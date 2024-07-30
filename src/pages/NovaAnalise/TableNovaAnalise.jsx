import React from 'react';
import Table from 'react-bootstrap/Table';
import './TableNovaAnalise.css';

function TableNovaAnalise() {
  const data = [
    {
      ID: ['01', '02', '03', '04', '05'],
      scope:  ['Brinquedos', 'Artigos Escolares','Eletrodomesticos','Panelas','Anatel','ARLA-32','Ventiladores','Fotovoltaicos'],
      familia:  ['Do tipo 1', 'Do tipo 2','Do tipo 3','Do tipo 4'],
      rotulos: ['500', '200','5000','250','50'],
      solicitação: ['00/00/0000'],
      state: ['Pendente', 'Em Criação','Concuido','Gerado'],
    },
  ];

  return (
    <Table responsive>
      <thead>
        <tr>
          <th>ID</th>
          <th>Escopo</th>
          <th>Família</th>
          <th>Rótulos</th>
          <th>Solicitação</th>
          <th>Status</th>
          
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.ID[0]}</td>
            <td>{item.scope[0]}</td>
            <td>{item.familia[0]}</td> 
            <td>{item.rotulos[0]}</td>
            <td>{item.solicitação}</td>
            <td>{item.state[0]}</td>
          </tr>
        ))}

      </tbody>
    </Table>
  );
}

export default TableNovaAnalise;