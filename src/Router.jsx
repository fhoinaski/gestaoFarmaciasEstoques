
import { createBrowserRouter } from 'react-router-dom';
import App  from './App';
import { Home } from "./pages/Home";
import Login from "./components/usuario/Login"
import CadastroFarmacia from "./pages/CadastroFarmacia"

//exercicio 1 adicionar as rodas home e Quemsou

export const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/login', element: <Login /> },
      { path: '/cadastro-farmacia', element: <CadastroFarmacia /> },
      
       
    ],
  },
]);

