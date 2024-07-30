import React from 'react'
import ReactDOM from 'react-dom/client'
import 'typeface-rubik';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

// Importação de paginas
import LogOn from './pages/LogOn/LogOn.jsx';
import Autenticacao from './pages/Autenticacao/Autenticacao.jsx';
import Inicio   from './pages/Inicio/Inicio.jsx';

//Analises e todos arquivos chamados na pagina.
import Analises from './pages/Analises/Analises.jsx';
import FormAnalisecliente  from './pages/Analises/FormAnalisecliente.jsx';
import TableAnalisecliente from './pages/Analises/TableAnalisecliente.jsx';
import ButtonsAnalises from './pages/Analises/ButtonsAnalises.jsx';

//Usuarios e todos arquivos chamados na pagina.
import Usuarios from './pages/Usuarios/Usuarios.jsx';
import FormUser from './pages/Usuarios/FormUser.jsx';
import TableUser from './pages/Usuarios/TableUser.jsx';

//Clientes e todos arquivos chamados na pagina.
import Clientes from './pages/Clientes/Clientes.jsx';
import FormCliente from './pages/Clientes/FormCliente.jsx';
import TableCliente from './pages/Clientes/TableCliente.jsx';

//MaisUsuarios e todos arquivos chamados na pagina.
import MaisUsuarios from './pages/MaisUsuarios/UsuariosMais.jsx';
import FormMais from './pages/MaisUsuarios/FormMais.jsx';
import Buttons from './pages/MaisUsuarios/Buttons.jsx';

//NovoCliente e todos arquivos chamados na pagina.
import NovoCliente from './pages/NovoCliente/NovoCliente.jsx';
import FormNovo0 from './pages/NovoCliente/FormNovo0.jsx';
import ButtonsNovocliente   from './pages/NovoCliente/ButtonsNovocliente.jsx';

//Detalhes e todos arquivos chamados na pagina.
import Detalhes from './pages/Detalhes/Detalhes.jsx';
import Formdetalhes from './pages/Detalhes/FormDetalhes.jsx';
import ContainerExport from './pages/Detalhes/ContainerExport.jsx';
import TableDetalhes from './pages/Detalhes/TableDetalhes.jsx';

//NovaAnalise e todos arquivos chamados na pagina.
import NovaAnalise from './pages/NovaAnalise/NovaAnalise.jsx';
import FormNovaAnalise from './pages/NovaAnalise/FormNovaAnalise.jsx';
import TableNovaAnalise from './pages/NovaAnalise/TableNovaAnalise.jsx';
import ButtonConfirmAnalise from './pages/NovaAnalise/ButtonConfirmAnalise.jsx';

//COMPONENTES
import AlertExport from './components/AlertExport/AlertExport.jsx';
import AlertConfirmAnalise from './components/AlertConfirmAnalise/AlertConfirmAnalise.jsx';
import AlertRotulo from './components/AlertRotulo/SaveRotulo.jsx';
//Importação de rotas de ADM

//AnaliseADM e todos arquivos chamados na pagina.
import AnaliseADM from './pages/AnaliseADM/AnaliseADM.jsx';
import FormAnaliseADM from './pages/AnaliseADM/FormAnaliseADM.jsx';
import TableAnaliseADM from './pages/AnaliseADM/TableAnaliseADM.jsx';
import ButtonAnaliseADM from './pages/AnaliseADM/ButtonAnaliseADM.jsx';

//DetalheADM e todos arquivos chamados na pagina.
import DetalheADM from './pages/DetalheADM/DetalheADM.jsx';
import FormdetalheADM from './pages/DetalheADM/FormDetalheADM.jsx';
import ContainerDetalheADM from './pages/DetalheADM/ContainerDetalheADM.jsx';
import TableDetalheADM from './pages/DetalheADM/TableDetalheADM.jsx';

//NovaAnaliseADM e todos arquivos chamados na pagina.
import NovaAnaliseADM from './pages/NovaAnaliseADM/NovaAnaliseADM.jsx';
import FormNovaAnaliseADM from './pages/NovaAnaliseADM/FormNovaAnaliseADM.jsx';
import TableNovaAnaliseADM from './pages/NovaAnaliseADM/TableNovaAnaliseADM.jsx';
import ButtonConfirmADM from './pages/NovaAnaliseADM/ButtonConfirmADM.jsx';

//CadastroAnalise e todos arquivos chamados na pagina.
import CadastroAnalise from './pages/CadastroAnalise/CadastroAnalise.jsx';
import FormCadastroAnalise from './pages/CadastroAnalise/FormCadastroAnalise.jsx';
import MenuCarrossel from './components/MenuCarrossel/MenuCarrossel.jsx';
import ContentInfo from './pages/CadastroAnalise/ContentInfo.jsx';
import ContentImg from './pages/CadastroAnalise/ContentImg.jsx';
import ButtonDescricao from './pages/CadastroAnalise/ButtonDescricao.jsx';

//CadastroEmpresa e todos arquivos chamados na pagina.
import CadastroEmpresa from './pages/CadastroEmpresa/CadastroEmpresa.jsx';
import CadastroEmpresa1 from './pages/CadastroEmpresa/CadastroEmpresa1.jsx';
import ButtonsCadastroEmpresa from './pages/CadastroEmpresa/ButtonsCadastroEmpresa.jsx';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';



const router = createBrowserRouter([
  {
    path: "/",
    element: <LogOn />
  },
  {
    path: "/Autenticacao",
    element: <Autenticacao />
  },
  {
    path: "/inicio",
    element: <Inicio />
  },


  //Rotas de Analises
  {
    path: "/analises",
    element: <Analises />
  },
  {
    path:"/FormAnalisecliente ", 
    element: <FormAnalisecliente />
  },
  {
    path:"/TableAnalisecliente",
    element: <TableAnalisecliente />
  },
  {
    path:"/ButtonsAnalises",
    element: <ButtonsAnalises />
  },


  //Rotas de usuarios
  {
    path: "/usuarios",
    element: <Usuarios />
  },
  {
    path:"/FormUser",
    element: <FormUser />
  },
  {
    path:"/TableUser",
    element: <TableUser />
  },


  //Rotas de Clientes
  {
    path: "/clientes",
    element: <Clientes />
  },
  {
    path:"/FormCliente",
    element: <FormCliente />
  },
  {
    path:"/TableCliente",
    element: <TableCliente />
  },

  //Rotas de MaisUsuarios
  {
    path: "/maisUsuarios",
    element: <MaisUsuarios />
  },
  {
    path:"/FormMais ",
    element: <FormMais />
  },
  {
    path:"/Buttons",
    element: <Buttons />
  },


  //Rotas de NovoCliente
  {
    path: "/novoCliente",
    element: <NovoCliente />
  },
  {
    path:"/FormNovo0 ",
    element: <FormNovo0 />
  },
  {
    path:"/ButtonsNovocliente",
    element: <ButtonsNovocliente />
  },


  //Rotas de Detalhes
  {
    path: "/detalhes",
    element: <Detalhes />
  },
  {
    path:"/Formdetalhes",
    element: <Formdetalhes />
  },
  {
    path:"/ContainerExport",
    element: <ContainerExport />
  },
  {
    path:"/TableDetalhes",
    element: <TableDetalhes />
  },

  //COMPONENTES
  {
    path: "/alertexport",
    element: <AlertExport  />
  },

  {
    path: "/alertconfirmanalise",
    element: <AlertConfirmAnalise />
  },
  {
    path: "/AlertRotulo",
    element: <AlertRotulo />
  },
  //Rotas de NovaAnalise
  {
    path: "/novaAnalise",
    element: <NovaAnalise />
  },
  {
    path:"/FormNovaAnalise",
    element: <FormNovaAnalise />
  },
  {
    path:"/TableNovaAnalise",
    element: <TableNovaAnalise />
  },
  {
    path:"/ButtonConfirmAnalise",
    element: <ButtonConfirmAnalise />
  },

  //Rotas de AnaliseADM
  {
    path: "/analiseADM",
    element: <AnaliseADM />
  },
  {
    path:"/FormAnaliseADM",
    element: <FormAnaliseADM />
  },
  {
      path:"/TableAnaliseADM",
      element: <TableAnaliseADM />
  },
  {
      path:"/ButtonAnaliseADM",
      element: <ButtonAnaliseADM />
  },
  
 
  
  
  //Rotas de DetalheADM
  {
    path: "/detalheADM",
    element: <DetalheADM />
  },
  {
    path:"/FormdetalheADM",
    element: <FormdetalheADM />
  },
  {
    path:"/ContainerDetalheADM",
    element: <ContainerDetalheADM />
  },
  {
   path:"/TableDetalheADM",
   element: <TableDetalheADM />
  },


  //Rotas de NovaAnaliseADM
  {
    path: "/novaanaliseADM",
    element: <NovaAnaliseADM />
  },
  {
    path:"/FormNovaAnaliseADM",
    element: <FormNovaAnaliseADM />
  },
  {
    path:"/TableNovaAnaliseADM",
    element: <TableNovaAnaliseADM />
  },
  {
    path:"/ButtonConfirmADM",
    element: <ButtonConfirmADM />
  },


  //Rotas de CadastroAnalise
  {
    path: "/cadastroAnalise",
    element: <CadastroAnalise />
  },
  {
     path:"/FormCadastroAnalise",
     element: <FormCadastroAnalise />
  },
  {
    path:"/MenuCarrossel",
    element: <MenuCarrossel />
  },
  {
    path:"/ContentInfo",
    element: <ContentInfo />
  },
  {
    path:"/ContentImg",
    element: <ContentImg />
  },
  {
    path:"/ButtonDescricao",
    element: <ButtonDescricao />
  },

  //Rotas de CadastroEmpresa
  {
    path: "/CadastroEmpresa",
    element: <CadastroEmpresa />
  },
  {
    path:"/CadastroEmpresa1",
    element: <CadastroEmpresa1 />
  },
  {
    path:"/ButtonsCadastroEmpresa", 
    element: <ButtonsCadastroEmpresa />
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
