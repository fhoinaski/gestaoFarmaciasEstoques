import React, { useState } from 'react';
import { CiLogin } from 'react-icons/ci';
import { Link } from 'react-router-dom';
import { useAuthState } from '../../contexts/userContext/useAuth';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import MenuMobile from './MenuMobile';

const ListMenuNavbar = ({ nomeMenu, listaItens }) => {
  return (
    <NavDropdown title={nomeMenu} className="text-orange-400 font-bold">
      {listaItens.map((item) => (
        <LinkContainer className="mb-6" to={item.caminho} key={item.nome}>
          <NavDropdown.Item>{item.nome}</NavDropdown.Item>
        </LinkContainer>
      ))}
    </NavDropdown>
  );
};

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
  const [mostrarModal, setMostrarModal] = useState(false);

  const abrirModalMobile = (isOpen) => {
    setMostrarModal(isOpen);
  };

  return (
    <Navbar bg="light" className=" p-4" expand="md">
      <Navbar.Brand as={Link} to="/" className="text-orange-500 font-bold text-xl">
        <img src="/logo.png" alt="" width={150} height={50} />
      </Navbar.Brand>
      {isAuthenticated && (
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="md:hidden border-orange-400 focus:shadow-none focus:border-2 focus:bg-orange-50"
          onClick={() => abrirModalMobile(true)}
        />
      )}
      <MenuMobile aberto={mostrarModal} abrirModal={abrirModalMobile} menu={{ listaMenuFarmacia, listaMenuMedicamentos }} />

      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          {isAuthenticated && (
            <div className="items-center hidden md:flex gap-4 mr-4">
              <ListMenuNavbar nomeMenu="Medicamentos" className="gap-4 mb-10" listaItens={listaMenuMedicamentos} />
              <ListMenuNavbar nomeMenu="Farmácia" listaItens={listaMenuFarmacia} />
              <Nav.Item
                onClick={logoutUser}
                className="text-orange-500 flex items-center py-2 cursor-pointer rounded-md bg-white hover:bg-gray-200 focus:outline-none"
              >
                <CiLogin className="mr-1 rotate-180" />
                <Link to="/" className="text-orange-500">
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
