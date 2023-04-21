import React, { useEffect, useState } from 'react';
import CardProdutos from '../components/CardProdutos';
import Carregando from '../components/Carregando';
import { useMedicamentoState } from '../contexts/medicamentoContext/useMedicamento';

import SelectOption from '../components/SelectOption';

const Medicamentos = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [detalheMedicamento, setDetalheMedicamento] = useState(null);
  const { todosMedicamentos, carregando } = useMedicamentoState();
  const [valorBuscado, setValorBuscado] = useState('');
  const [medicamentosFiltrados, setMedicamentosFiltrados] = useState([]);
  const [selectedOption, setSelectedOption] = useState('todos');

  useEffect(() => {
    let medicamentosFiltradosPorBusca = todosMedicamentos;
  
    medicamentosFiltradosPorBusca = valorBuscado
      ? medicamentosFiltradosPorBusca.filter((medicamento) =>
          medicamento.nomeMedicamento.toLowerCase().includes(valorBuscado.toLowerCase())
        )
      : medicamentosFiltradosPorBusca;
  
    medicamentosFiltradosPorBusca = medicamentosFiltradosPorBusca.filter((medicamento) =>
      selectedOption === 'todos'
        ? medicamento.tipoMedicamento === 'Comum' || medicamento.tipoMedicamento === 'Controlado'
        : selectedOption === 'Controlado'
        ? medicamento.tipoMedicamento === 'Controlado'
        : medicamento.tipoMedicamento === 'Comum'
    );
  
    // Atualize o estado com os medicamentos filtrados
    setMedicamentosFiltrados(medicamentosFiltradosPorBusca);
  }, [todosMedicamentos, valorBuscado, selectedOption]); // Adicione as dependências necessárias
  
  
  
  

  const mostrarMedicamento = (id) => {
    const medicamento = todosMedicamentos.find((dadosMedicamento) => dadosMedicamento.id === id);
    setIsOpen(true);
    setDetalheMedicamento(medicamento);
    console.log(medicamento);
  };

  return (
    <>
      {carregando ? (
        <div className='flex justify-center items-center h-96'>
          <Carregando />
        </div>
      ) : (
        <div>
          <SelectOption value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)} />
          <div className="flex justify-center w-full py-4">
            <div className="mb-4">
          
            </div>
            <InfoModal
              isOpen={isOpen}
              onClose={() => setIsOpen(false)}
              objetoInfo={detalheMedicamento}
              titulo={detalheMedicamento?.nomeMedicamento}
            />
            <div className="m-0 flex flex-wrap w-full left-0 right-0 justify-center gap-4">
              {(medicamentosFiltrados.length > 0 ? medicamentosFiltrados : todosMedicamentos).map((medicamentos, index) => (
                <div className="w-full md:w-1/3 lg:w-1/4 xl:w-1/4 px-1 flex justify-center"
                  key={medicamentos.id}>
                  <CardProdutos
                    title={medicamentos.nomeMedicamento}
                    description={medicamentos.nomeLaboratorio}
                    onClick={() => mostrarMedicamento(medicamentos.id)}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Medicamentos;
