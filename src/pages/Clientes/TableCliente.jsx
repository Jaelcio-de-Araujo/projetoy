import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import Table from 'react-bootstrap/Table';

import { FaTrash } from 'react-icons/fa';
import './TableCliente.css';

function TableCliente() {
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const data = [
    {
      razaoSocial: 'Nome Empresarial',
      nomeFantasia: 'Nome da sua empresa',
      cnpj: '11.200.000/001-11',
      segmento: ['Importador', 'Distribuidor','Certificador','+'],
      scope: ['Brinquedos', 'Artigos escolares','Eletrodomesticos','Panelas','Anatel','ARLA-32','Ventiladores','Fotovoltaicos','+'],
      state: ['Ativo'],
      acoes: [
        // eslint-disable-next-line react/jsx-key
        <Button
        variant="danger"
        id='acoes'
        onClick={() => {
          setShowSuccessAlert(true);

          // Redirecionar após um pequeno atraso para que o alerta seja visível por um curto período de tempo
          setTimeout(() => {
            setShowSuccessAlert(false);
            window.location.href = '/clientes';
          }, 2000); // tempo em milissegundos
        }}
      >
        <FaTrash />
      </Button>
    
  ],
    },
    // Adicione mais objetos de dados aqui para exibir mais linhas na tabela
  ];

  return (
    <Table responsive>
      {showSuccessAlert && (
        <Alert id='cancel' variant="danger">
          Dados excluidos, faça outro cadastro clicando em Novo Cliente!
        </Alert>
      )}
      
      <thead>
        <tr>
          <th>Razão Social</th>
          <th>Nome Fantasia</th>
          <th>CNPJ</th>
          <th>Segmento</th>
          <th>Escopo</th>
          <th>Status</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.razaoSocial}</td>
            <td>{item.nomeFantasia}</td>
            <td>{item.cnpj}</td>
            <td>
              <span className="tag">{item.segmento[0]}</span> 
              <Button id="tag">{item.segmento[3]}</Button>
            </td>
            <td>
              <span className="tag">{item.scope[0]}</span> 
              <Button  id="tag">{item.scope[8]}</Button>
            </td>
            <td>{item.state}</td>
            <td>{item.acoes}</td>
          </tr>
        ))}
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.razaoSocial}</td>
            <td>{item.nomeFantasia}</td>
            <td>{item.cnpj}</td>
            <td>
              <span className="tag">{item.segmento[1]}</span> 
             
            </td>
            <td>
              <span className="tag">{item.scope[1]}</span> 
              <Button id="tag">{item.scope[8]}</Button>
            </td>
            <td>{item.state}</td>
            <td>
            {item.acoes}
            </td>
          </tr>
        ))}
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.razaoSocial}</td>
            <td>{item.nomeFantasia}</td>
            <td>{item.cnpj}</td>
            <td>
              <span className="tag">{item.segmento[2]}</span> 
              <Button id="tag">{item.segmento[3]}</Button>
            </td>
            <td>
              <span className="tag">{item.scope[3]}</span> 
              <span className="tag">{item.scope[0]}</span>
            </td>
            <td>{item.state}</td>
            <td>
            {item.acoes}
            </td>
          </tr>
        ))}
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.razaoSocial}</td>
            <td>{item.nomeFantasia}</td>
            <td>{item.cnpj}</td>
            <td>
              <span className="tag">{item.segmento[1]}</span> 
              <Button id="tag">{item.segmento[3]}</Button>
            </td>
            <td>
              <span className="tag">{item.scope[0]}</span> 
              <span className="tag">{item.scope[3]}</span>
            </td>
            <td>{item.state}</td>
            <td>
            {item.acoes}
            </td>
          </tr>
        ))}
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.razaoSocial}</td>
            <td>{item.nomeFantasia}</td>
            <td>{item.cnpj}</td>
            <td>
              <span className="tag">{item.segmento[1]}</span> 
              <Button id="tag">{item.segmento[3]}</Button>
            </td>
            <td>
              <span className="tag">{item.scope[1]}</span> 
            </td>
            <td>{item.state}</td>
            <td>
            {item.acoes}
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default TableCliente;