import { Button } from "react-bootstrap";
import { FaWhatsapp } from "react-icons/fa";

export const FarmaciaRow = ({ farmacia, onClick }) => {
    return(
    <tr key={farmacia.cnpj}>
      <td>{farmacia.razaoSocial}</td>
      <td>{farmacia.bairro}</td>
      <td>{farmacia.telefone}</td>
      <td>
        <Button variant="outline-primary" onClick={onClick}>
          <FaWhatsapp size={20} className="mr-2" />
          Mostrar todas informações
        </Button>
      </td>
    </tr>
  );
    }