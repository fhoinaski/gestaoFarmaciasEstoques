import { Outlet, createBrowserRouter } from "react-router-dom";
import App from "./App";
import { Home } from "./pages/Home";
import Login from "./components/usuario/Login";
import CadastroFarmacia from "./pages/CadastroFarmacia";
import { FarmaciaProvider } from "./contexts/farmaciaContext/FarmaciaProvider";
import { MedicamentoProvider } from "./contexts/medicamentoContext/MedicamentoProvider";
import CadastroMedicamento from "./pages/CadastroMedicamento";
import Medicamentos from "./pages/Medicamentos";
import Farmacias from "./pages/Farmacias";
import PrivateRoute from "./PrivateRoute"; 

const FarmaciaOutlet = () => {
  return (
    <FarmaciaProvider>
      <Outlet />
    </FarmaciaProvider>
  );
};

const MedicamentoOutlet = () => {
  return (
    <MedicamentoProvider>
      <Outlet />
    </MedicamentoProvider>
  );
};

export const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/login", element: <Login /> },
      {
        path: "/farmacias",
        element: (
          <PrivateRoute>
            <FarmaciaOutlet />
          </PrivateRoute>
        ),
        children: [
          { path: "", element: <Farmacias /> },
          { path: "cadastrar", element: <CadastroFarmacia /> },
        ],
      },
      {
        path: "/medicamentos",
        element: (
          <PrivateRoute>
            <MedicamentoOutlet />
          </PrivateRoute>
        ),
        children: [
          { path: "", element: <Medicamentos /> },
          { path: "cadastrar", element: <CadastroMedicamento /> },
        ],
      },
    ],
  },
]);
