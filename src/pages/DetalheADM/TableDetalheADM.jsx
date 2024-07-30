import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import Alert from 'react-bootstrap/Alert';
import { Button } from 'react-bootstrap';
import './TableDetalheADM.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

function TableDetalheADM() {
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);

  const data = [
    {
      nomecomercial: ['Nome Comercial'],
      scope:  ['Brinquedos', 'Artigos Escolares','Eletrodomesticos','Panelas','Anatel','ARLA-32','Ventiladores','Fotovoltaicos'],
      familia:  ['Do tipo 1', 'Do tipo 2','Do tipo 3','Do tipo 4'],
      responsavel: ['Nome do Responsável'],
      Acoes: [
        // eslint-disable-next-line react/jsx-key
        <Button
        variant="success"
        id='acoes'
        onClick={() => {
          setShowSuccessAlert(true);
          
          // Redirecionar após um pequeno atraso para que o alerta seja visível por um curto período de tempo
          setTimeout(() => {
            setShowSuccessAlert(false);
            window.location.href = '/analiseADM';
          }, 700); // tempo em milissegundos
        }}
      >
        <FontAwesomeIcon icon={faDownload} />
      </Button>,
    ],
      
    },
  ];

  return (
    <Table responsive>
      {showSuccessAlert && (
        <Alert id='save' variant="success">
          Exportação realizada com sucesso!
        </Alert>
      )}
      <thead>
        <tr>
          <th>Nome Comercial</th>
          <th>Escopo</th>
          <th>Família</th>
          <th>Responsavel</th>
          <th>Ações</th>
          
          
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.nomecomercial}</td>
            <td>{item.scope[0]}</td>
            <td>{item.familia[0]}</td> 
            <td>{item.responsavel}</td>
            <td>{item.Acoes}</td>
          </tr>
        ))}
        {data.map((item, index) => (         
          <tr key={index}>
            <td>{item.nomecomercial}</td>
            <td>{item.scope[1]}</td>
            <td>{item.familia[1]}</td> 
            <td>{item.responsavel}</td>
            <td>{item.Acoes}</td>
          </tr>
        ))}
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.nomecomercial}</td>
            <td>{item.scope[2]}</td>
            <td>{item.familia[2]}</td> 
            <td>{item.responsavel}</td>
            <td>{item.Acoes}</td>
          </tr>
        ))}
        {data.map((item, index) => (         
          <tr key={index}>
            <td>{item.nomecomercial}</td>
            <td>{item.scope[3]}</td>
            <td>{item.familia[3]}</td> 
            <td>{item.responsavel}</td>
            <td>{item.Acoes}</td>
          </tr> 
        ))}
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.nomecomercial}</td>
            <td>{item.scope[4]}</td>
            <td>{item.familia[0]}</td> 
            <td>{item.responsavel}</td>
            <td>{item.Acoes}</td>
          </tr>
        ))}
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.nomecomercial}</td>
            <td>{item.scope[5]}</td>
            <td>{item.familia[1]}</td> 
            <td>{item.responsavel}</td>
            <td>{item.Acoes}</td>
          </tr>
        ))}
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.nomecomercial}</td>
            <td>{item.scope[6]}</td>
            <td>{item.familia[2]}</td> 
            <td>{item.responsavel}</td>
            <td>{item.Acoes}</td>
          </tr>
        ))}
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.nomecomercial}</td>
            <td>{item.scope[7]}</td>
            <td>{item.familia[3]}</td> 
            <td>{item.responsavel}</td>
            <td>{item.Acoes}</td>
          </tr>
        ))}
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.nomecomercial}</td>
            <td>{item.scope[0]}</td>
            <td>{item.familia[0]}</td> 
            <td>{item.responsavel}</td>
            <td>{item.Acoes}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default TableDetalheADM;