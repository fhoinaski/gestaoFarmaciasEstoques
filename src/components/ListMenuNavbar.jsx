import { NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export const ListMenuNavbar = ({ nomeMenu, listaItens }) => {
  return (
    <NavDropdown title={nomeMenu} className="text-orange-400 font-bold">
      {listaItens.map((item) => (
        <LinkContainer to={item.caminho} key={item.nome}>
          <NavDropdown.Item>{item.nome}</NavDropdown.Item>
        </LinkContainer>
      ))}
    </NavDropdown>
  );
};
