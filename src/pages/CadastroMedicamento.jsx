import React, { useState } from 'react';
import SuccessoModal from '../components/SucessoModal';
import { useMedicamentoState } from '../contexts/medicamentoContext/useMedicamento';
import AlertModal from '../components/AlertModal';


const CadastroMedicamento = () => {
  const [cadastroSucesso, setCadastroSucesso] = useState(false);
  const { medicamento, updateMedicData, registrarMedicamento } = useMedicamentoState();
  const [alertaAberto, setAlertaAberto] = useState(false);
  const [textoAlert, setTextoAlert] = useState('');
  const [valor, setValor] = useState('R$ ');
  const [valorFormatado, setValorFormatado] = useState('');

  const formatarValor = (valor) => {
    // Regex para extrair números, pontos e vírgulas
    const regex = /[\d.,]+/g; 
    const valorNumerico = valor.match(regex);

    if (!valorNumerico) {
      return '';
    }
    // Substitui a vírgula por um ponto
    const valorString = valorNumerico.join('').replace(',', '.');
    // Converte o valor extraído para número
    const numero = parseFloat(valorString);


    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(numero);
  };
  const handleFocus = (e) => {
    if (e.target.value === '') {
      setValor('R$ ');
      updateMedicData(e.target.name, 'R$ ');
    }
  };

  const handleBlur = (e) => {
    if (e.target.name === 'precoUnitario') {
      const valorFormatado = formatarValor(e.target.value);
      updateMedicData(e.target.name, valorFormatado);
    }
  };

  const handleChange = (e) => {
    updateMedicData(e.target.name, e.target.value);


  };

  const handleSubmi = (e) => {
    e.preventDefault();
    
      const novoMedicamento = registrarMedicamento(medicamento);
      if (novoMedicamento) {
        setCadastroSucesso(true);
      } if (!novoMedicamento) {
        setAlertaAberto(true);
        setTextoAlert('Medicamento já cadastrado');
      }else {
        setAlertaAberto(true);
        setTextoAlert('Preencha todos os campos obrigatórios');
        } 

  };


  return (

    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">

      <div className="relative py-3 sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl 2xl:max-w-5xl sm:mx-auto">
        <AlertModal
          aberto={alertaAberto}
          textoMensagem={textoAlert}
          fechar={() => setAlertaAberto(false)}

        />
        <SuccessoModal
          isOpen={cadastroSucesso}
          linkConsulta="/medicamentos"
          linkNovoCadastro="/medicamentos/cadastrar" textoBody='Medicamento cadastrado com sucesso'
          textoTitulo='Registro de Medicamento'
          onClose={() => setCadastroSucesso(false)}
        />

        <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div
          className="bg-white shadow-lg sm:rounded-3xl md:-pb-10 lg:-pb-10 sm:p-20 px-10 transform py-5 transition-all duration-1000 ease-in-out"
        >
          <div
            className="w-full h-full top-10 md:p-0 lg:p-0 sm:p-10 "
          >
            <h1 className="text-center md:text-2xl font-semibold mb-6"> Cadastro Medicamento </h1>
            <form onSubmit={handleSubmi} className="grid grid-cols-4 gap-4">

              <div className="mb-4 col-span-4">
                <label className="block text-sm font-medium text-gray-700" htmlFor="nomeMedicamento">
                  Nome Medicamento
                </label>
                <input
                  className="input-mask"
                  type="text"
                  id="nomeMedicamento"
                  name="nomeMedicamento"
                  value={medicamento.nomeMedicamento}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-4 col-span-4 md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 " htmlFor="nomeLaboratorio">
                  Nome Laboratorio
                </label>
                <input
                  className="input-mask"
                  type="text"
                  id="nomeLaboratorio"
                  name="nomeLaboratorio"
                  value={medicamento.nomeLaboratorio}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-4 col-span-4 md:col-span-2">
                <label className="block text-sm font-medium text-gray-700" htmlFor="dosagemMedicamento">
                  Dosagem Medicamento
                </label>
                <input
                  className="input-mask"
                  type="text"
                  id="dosagemMedicamento"
                  name="dosagemMedicamento"
                  value={medicamento.dosagemMedicamento}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-4 col-span-2">
                <label className="block text-sm font-medium text-gray-700" htmlFor="precoUnitario">
                  Preço Unitário
                </label>
                <input
                  className="input-mask"
                  type="text"
                  id="precoUnitario"
                  name="precoUnitario"
                  value={medicamento.precoUnitario}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  onFocus={handleFocus}
                  required
                />
              </div>
              <div className="mb-4 col-span-2 md:col-span-2">
                <label className="block text-sm font-medium text-gray-700" htmlFor="tipoMedicamento">
                  Tipo
                </label>
                <select
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  id="tipoMedicamento"
                  name="tipoMedicamento"
                  value={medicamento.tipoMedicamento}
                  onChange={handleChange}
                  required
                >
                  <option value="">Selecione um tipo</option>
                  <option value="Comum">Comum</option>
                  <option value="Controlado">Controlado</option>
                </select>

              </div>
              <div className="mb-4 col-span-4 md:col-span-4">
                <label className="block text-sm font-medium text-gray-700" htmlFor="descricaoMedicamento">
                  Descriçao Medicamento
                </label>
                <textarea
                  className="input-mask"
                  id="descricaoMedicamento"
                  name="descricaoMedicamento"
                  value={medicamento.descricaoMedicamento}
                  onChange={handleChange}
                  required
                ></textarea>

              </div>
              <button className='bg-orange-500 hover:bg-orange-600 py-1 px-2 col-span-4 rounded-3xl text-white -mt-2' type='submit'>
                Registrar Medicamento
              </button>
            </form>

          </div>
        </div>
      </div>
    </div>
  );
};

export default CadastroMedicamento;
