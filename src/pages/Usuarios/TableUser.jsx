import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import Table from 'react-bootstrap/Table';
import { FaTrash } from 'react-icons/fa';
import './TableUser.css';

function TableUser() {
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);

  const handleDelete = () => {
    setShowSuccessAlert(true);
    setTimeout(() => {
      setShowSuccessAlert(false);
      window.location.href = '/usuarios';
    }, 2000);
  };

  const data = [
    {
      nome: 'Nome de Usuário Completo',
      cpf: '123.456.789-11',
      email: 'nome.sobrenome@email.com',
      perfil: ['Equipe 2', 'Equipe 3'],
      status: 'Ativo',
      acoes: (
        <Button variant="danger" id="acoes-user" onClick={handleDelete}>
          <FaTrash />
        </Button>
      ),
    },
    // Adicione mais objetos de dados aqui para exibir mais linhas na tabela
  ];

  return (
    <>
      {showSuccessAlert && (
        <Alert id="cancel-user" variant="danger">
          Usuário excluído, cadastre um novo clicando em Mais Usuários!
        </Alert>
      )}

      <Table responsive>
        <thead>
          <tr id="table-head">
            <th>Nome</th>
            <th>CPF</th>
            <th>E-mail</th>
            <th>Perfil</th>
            <th>Status</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.nome}</td>
              <td>{item.cpf}</td>
              <td>{item.email}</td>
              <td>
                <span className="tag">{item.perfil[0]}</span>
                <span className="tag">{item.perfil[1]}</span>
              </td>
              <td>{item.status}</td>
              <td>{item.acoes}</td>
            </tr>
          ))}
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.nome}</td>
              <td>{item.cpf}</td>
              <td>{item.email}</td>
              <td>
                <span className="tag">{item.perfil[0]}</span>
                <span className="tag">{item.perfil[1]}</span>
              </td>
              <td>{item.status}</td>
              <td>{item.acoes}</td>
            </tr>
          ))}
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.nome}</td>
              <td>{item.cpf}</td>
              <td>{item.email}</td>
              <td>
                <span className="tag">{item.perfil[0]}</span>
                <span className="tag">{item.perfil[1]}</span>
              </td>
              <td>{item.status}</td>
              <td>{item.acoes}</td>
            </tr>
          ))}
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.nome}</td>
              <td>{item.cpf}</td>
              <td>{item.email}</td>
              <td>
                <span className="tag">{item.perfil[0]}</span>
                <span className="tag">{item.perfil[1]}</span>
              </td>
              <td>{item.status}</td>
              <td>{item.acoes}</td>
            </tr>
          ))}
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.nome}</td>
              <td>{item.cpf}</td>
              <td>{item.email}</td>
              <td>
                <span className="tag">{item.perfil[0]}</span>
                <span className="tag">{item.perfil[1]}</span>
              </td>
              <td>{item.status}</td>
              <td>{item.acoes}</td>
            </tr>
          ))}
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.nome}</td>
              <td>{item.cpf}</td>
              <td>{item.email}</td>
              <td>
                <span className="tag">{item.perfil[0]}</span>
                <span className="tag">{item.perfil[1]}</span>
              </td>
              <td>{item.status}</td>
              <td>{item.acoes}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}

export default TableUser;


