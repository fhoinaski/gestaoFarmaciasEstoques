import React, { useEffect, useState } from 'react';
import CardProdutos from '../components/CardProdutos';
import Carregando from '../components/Carregando';
import { useMedicamentoState } from '../contexts/medicamentoContext/useMedicamento';
import {AiOutlineSearch} from "react-icons/ai"

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
          <div className='flex justify-center items-center h-10 bg-orange-50'>
            
            <div className="flex mr-4 items-center justify-center">
            <input className=' h-6 rounded-md w-28 md:w-auto border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent text-orange-400 text-center' type='text' placeholder='Pesquisar Medicamento' onChange={(e) => setValorBuscado(e.target.value)} />
            <AiOutlineSearch className="text-orange-500 w-5 h-6" />
            </div>

            <div className='flex items-center justify-center m-0'>
              <SelectOption value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)} />
            </div>
          </div>
          <div className="flex justify-center w-full py-4">
            <div className="mb-4">
          
            </div>

            <div className="m-0 flex flex-wrap w-full left-0 right-0 justify-center gap-4">
              {(medicamentosFiltrados.length > 0 ? medicamentosFiltrados : todosMedicamentos).map((medicamentos, index) => (
                <div className="w-full md:w-1/3 lg:w-1/4 xl:w-1/4 px-1 flex justify-center"
                  key={medicamentos.id}>
                  <CardProdutos
                    produtoInfo={medicamentos}
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
