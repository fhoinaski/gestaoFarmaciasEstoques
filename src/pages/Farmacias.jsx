import React, { useEffect, useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import InfoModal from '../components/InfoModal';
import { Table, Button } from 'react-bootstrap';
import MapaFarmacia from '../components/MapaFarmacia';

const Farmacias = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [pharmacy, setPharmacy] = useState(null);
  const [allFarmacias, setAllFarmacias] = useState([]);

  useEffect(() => {
    const storedFarmacias = JSON.parse(localStorage.getItem("farmacias")) || [];
    setAllFarmacias(storedFarmacias);
  }, []);

  const mostrarFarmacia = (cnpj) => {
    const farmacia = allFarmacias.find((f) => f.cnpj === cnpj);
    setIsOpen(true);
    setPharmacy(farmacia);
  };
  console.log(allFarmacias);

  const positions = allFarmacias
    .map((farmacia) => {
      const latitude = parseFloat(farmacia.latitude);
      const longitude = parseFloat(farmacia.longitude);

      if (isNaN(latitude) || isNaN(longitude)) {
        return null;
      }

      return {
        latitude,
        longitude,
        farmacia: farmacia,
        
      };
    })
    .filter((position) => position !== null);

  console.log(positions);


  return (
    <div className="w-11/12 mx-auto my-10">
      <InfoModal isOpen={isOpen} onClose={() => setIsOpen(false)} farmacia={pharmacy} />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Nome Fantasia</th>
            <th>Bairro</th>
            <th>Telefone</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {allFarmacias.map((farmacia, index) => (
            <tr key={farmacia.cnpj}>
              <td>{farmacia.razaoSocial}</td>
              <td>{farmacia.bairro}</td>
              <td>{farmacia.telefone}</td>
              <td>
                <Button variant="outline-primary" onClick={() => mostrarFarmacia(farmacia.cnpj)}>
                  <FaWhatsapp size={20} className="mr-2" />
                  Mostrar todas informações
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div className='flex mx-auto' style={{ height: '400px', width: '550px' }}>
      <MapaFarmacia positions={positions} />
      </div>
    </div>
  );
};

export default Farmacias;
