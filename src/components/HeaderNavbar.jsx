import { CiLogin } from 'react-icons/ci';
import { Link } from 'react-router-dom';
import { useAuthState } from '../contexts/userContext/useAuth';
import { ListMenuNavbar } from './ListMenuNavbar';
import { Navbar, Nav } from 'react-bootstrap';

// Para renderizar o menu da farmacia e do medicamento
const listaMenuFarmacia = [
  { nome: 'Lista Farmácias', caminho: '/farmacias' },
  { nome: 'Cadastrar Farmácia', caminho: '/farmacias/cadastrar' },
];
const listaMenuMedicamentos = [
  { nome: 'Lista Medicamentos', caminho: '/medicamentos' },
  { nome: 'Cadastrar Medicamento', caminho: '/medicamentos/cadastrar' },
];

const HeaderNavbar = () => {
  const { isAuthenticated, logoutUser } = useAuthState();

  return (
    <Navbar bg="light" className="p-4" expand="lg">
      <Navbar.Brand as={Link} to="/" className="text-orange-500 font-bold text-xl">
        Logo Aqui
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          {isAuthenticated && (
            <div className="flex items-center gap-4">
              <ListMenuNavbar nomeMenu="Medicamentos" listaItens={listaMenuMedicamentos} />
              <ListMenuNavbar nomeMenu="Farmácia" listaItens={listaMenuFarmacia} />
              <Nav.Item onClick={logoutUser} className="text-orange-500 flex items-center py-2 cursor-pointer rounded-md bg-white hover:bg-gray-200 focus:outline-none">
                <CiLogin className="mr-1 rotate-180" />
                <Link to="#" className="text-orange-500">
                  Logout
                </Link>
              </Nav.Item>
            </div>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default HeaderNavbar;
