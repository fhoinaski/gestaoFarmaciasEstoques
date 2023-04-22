// import { Outlet, createBrowserRouter } from "react-router-dom";
import { Outlet, Routes, Route, BrowserRouter } from "react-router-dom";



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
import NovoUsuario from "./components/usuario/NovoUsuario";

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

export const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registrar" element={<NovoUsuario />} />
        <Route path="/farmacias" element={<PrivateRoute><FarmaciaOutlet /></PrivateRoute>}>
          <Route index element={<Farmacias />} />
          <Route path="cadastrar" element={<CadastroFarmacia />} />
        </Route>
        <Route path="/medicamentos" element={<PrivateRoute><MedicamentoOutlet /></PrivateRoute>}>
          <Route index element={<Medicamentos />} />
          <Route path="cadastrar" element={<CadastroMedicamento />} />
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
);
