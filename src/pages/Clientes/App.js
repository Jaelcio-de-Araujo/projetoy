import React, { useState } from 'react';
import FormCliente from './FormCliente';
import TableCliente from './TableCliente';

function App() {
  const [clientes, setClientes] = useState([]);

  return (
    <div className="App">
      <FormCliente clientes={clientes} setClientes={setClientes} />
      <TableCliente clientes={clientes} />
    </div>
  );
}

export default App;
