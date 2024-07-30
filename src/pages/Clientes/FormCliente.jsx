import React, { useState } from 'react';
import axios from 'axios';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import './FormCliente.css';

const FormCliente = ({ clientes, setClientes}) => {
  const [cnpj, setCnpj] = useState('');
  const [formData, setFormData] = useState({
    razaosocial: '',
    fantasia: '',
    segmento: '',
    escopo: '',
    status: ''
  });

  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    setCnpj(e.target.value);
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const formatCNPJ = (cnpj) => {
    return cnpj.replace(/[^\d]+/g, '');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    const formattedCnpj = formatCNPJ(cnpj);

    try {
      const response = await axios.get(`http://localhost:5000/api/receita/${formattedCnpj}`);
      setFormData((prevState) => ({
        ...prevState,
        razaosocial: response.data.nome,
        fantasia: response.data.fantasia
      }));

      // Realizar o POST dos dados para o servidor
      await axios.post('http://localhost:5000/api/form', {
        ...formData,
        razaosocial: response.data.nome,
        fantasia: response.data.fantasia
      });
      alert('Dados enviados com sucesso!');
      fetchClientes(); // Atualizar lista de clientes após o envio
    } catch (error) {
      console.error('Erro ao enviar dados:', error);
      setError(error.message);
    }
  };

  const fetchClientes = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/clientes');
      setClientes(response.data); // Atualizar a lista de clientes no componente pai
    } catch (error) {
      console.error('Erro ao buscar clientes:', error);
      setError(error.message);
    }
  };

  const handleClear = () => {
    setCnpj('');
    setFormData({
      razaosocial: '',
      fantasia: '',
      segmento: '',
      escopo: '',
      status: ''
    });
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/clientes/${id}`);
      setClientes(clientes.filter((cliente) => cliente.id !== id));
      alert('Cliente excluído com sucesso!');
    } catch (error) {
      console.error('Erro ao excluir cliente:', error);
      setError(error.message);
    }
  };

  return (
    <Form id='user-formCliente' onSubmit={handleSubmit}>
      <Row id="form-groupCliente">
        <Form.Group as={Col} controlId="formGridRazaoSocial">
          <Form.Label></Form.Label>
          <Form.Control
            type="text"
            placeholder="Razão Social"
            name="razaosocial"
            value={formData.razaosocial}
            onChange={handleFormChange}
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridNomeFantasia">
          <Form.Label></Form.Label>
          <Form.Control
            type="text"
            placeholder="Nome Fantasia"
            name="fantasia"
            value={formData.fantasia}
            onChange={handleFormChange}
          /> 
        </Form.Group>
        <Form.Group as={Col} controlId="formGridCNPJCPF">
          <Form.Label></Form.Label>
          <Form.Control
            placeholder="CNPJ ou CPF"
            value={cnpj}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridSegmento">
          <Form.Label></Form.Label>
          <Form.Select
            name="segmento"
            value={formData.segmento}
            onChange={handleFormChange}
            required
          >
            <option>Segmento...</option>
            <option value="Importador">Importador</option>
            <option value="Certificador">Certificador</option>        
            <option value="Distribuidor">Distribuidor</option>           
          </Form.Select>
        </Form.Group>
        <Form.Group as={Col} controlId="formGridScope">
          <Form.Label></Form.Label>
          <Form.Select
            name="escopo"
            value={formData.escopo}
            onChange={handleFormChange}
            required
          >
            <option>Escopo...</option>
            <option value="Brinquedos">Brinquedos</option>
            <option value="Eletrodomésticos">Eletrodomésticos</option>
            <option value="Panelas">Panelas</option>
            <option value="Artigos Escolares">Artigos Escolares</option> 
            <option value="Anatel">Anatel</option>
            <option value="ARLA-32">ARLA-32</option>
            <option value="Ventiladores">Ventiladores</option>
            <option value="Fotovoltaico">Fotovoltaico</option>          
          </Form.Select>
        </Form.Group>
        <Form.Group as={Col} controlId="formGridState">
          <Form.Label></Form.Label>
          <Form.Select
            name="status"
            value={formData.status}
            onChange={handleFormChange}
            required
          >
            <option>Status...</option>
            <option value="Ativo">Ativo</option>
            <option value="Bloqueado">Bloqueado</option>        
          </Form.Select>
        </Form.Group>
      </Row>
      <div id="form-buttons">
        <Button variant="secondary" id='search-button' type="submit">
          Pesquisar
        </Button>
        <Button variant="secondary" id='clear-button' type="button" onClick={handleClear}>
          Limpar
        </Button>
      </div>
      {error && <div>{error}</div>}
    </Form>
  );
}

export default FormCliente;
