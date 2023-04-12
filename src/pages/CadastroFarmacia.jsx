import React, { useState } from 'react';
import { FiChevronsRight, FiChevronsLeft} from "react-icons/fi";

const CadastroFarmacia = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    // Implemente a lógica de envio do formulário
  };

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl 2xl:max-w-5xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div
          className={`bg-white shadow-lg sm:rounded-3xl ${isFlipped ? "pb-28" : "pb-10"
            } md:-pb-10 lg:-pb-10 sm:p-20 px-20 transform py-5 transition-all duration-1000 ease-in-out`}
          style={{
            transformStyle: 'preserve-3d',
            perspective: '1000px',
            transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
          }}
        >
          <div
            className={` w-full h-full top-10 md:p-0 lg:p-0 sm:p-10 ${isFlipped ? 'opacity-0' : 'opacity-100'} transition-opacity duration-350`} style={{ backfaceVisibility: 'hidden' }}
          >
            <h1 className="text-center md:text-2xl font-semibold mb-6"> Cadastro social Farmácia </h1>
            <form onSubmit={handleSubmit} className="grid grid-cols-4 gap-4">

              <div className="mb-4 col-span-4">
                <label className="block text-sm font-medium text-gray-700" htmlFor="razaoSocial">
                  Razão Social
                </label>
                <input
                  className="mt-1 block w-full py-2 border border-gray-300 rounded-md"
                  type="text"
                  id="razaoSocial"
                  name="razaoSocial"
                  required
                />
              </div>
              <div className="mb-4 col-span-4 md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 " htmlFor="cnpj">
                  CNPJ
                </label>
                <input
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  type="number"
                  id="cnpj"
                  name="cnpj"
                  required
                />
              </div>
              <div className="mb-4 col-span-4 md:col-span-2">
                <label className="block text-sm font-medium text-gray-700" htmlFor="nomeFantasia">
                  Nome Fantasia
                </label>
                <input
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  type="text"
                  id="nomeFantasia"
                  name="nomeFantasia"
                  required
                />
              </div>
              <div className="mb-4 col-span-4">
                <label className="block text-sm font-medium text-gray-700" htmlFor="email">
                  E-mail
                </label>
                <input
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  type="email"
                  id="email"
                  name="email"
                  required
                />
              </div>
              <div className="mb-4 col-span-2 md:col-span-2">
                <label className="block text-sm font-medium text-gray-700" htmlFor="telefone">
                  Telefone
                </label>
                <input
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  type="tel"
                  id="telefone"
                  name="telefone"
                  required
                />
              </div>
              <div className="mb-4 col-span-2 md:col-span-2">
                <label className="block text-sm font-medium text-gray-700" htmlFor="celular">
                  Celular
                </label>
                <input
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  type="tel"
                  id="celular"
                  name="celular"
                  required
                />
              </div>
            </form>
            <div className='flex justify-end mt-5'><span onClick={handleClick} className='text-sm flex bg-slate-50 px-3 py-1 rounded-3xl shadow-md  mx-auto md:mx-0 items-center cursor-pointer hover:bg-slate-100'>Endereço da Farmacia<FiChevronsRight className='ml-2 ' /></span></div>
          </div>

          <div
            className={`w-full h-full absolute top-10 md:top-20 lg:top-20 left-0 md:py-0 lg:py-0 px-20  ${isFlipped ? 'opacity-100' : 'opacity-0'} transition-opacity duration-350`} style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
          >
            <h1 className="text-center md:text-2xl font-semibold mb-6">Endereço da Farmácia</h1>
            <form onSubmit={handleSubmit} className=" grid grid-cols-4  gap-4  ">

              <div className="mb-4 md:col-span-1 col-span-4">
                <label className="block text-sm font-medium text-gray-700" htmlFor="cep">
                  Cep
                </label>
                <input
                  className="mt-1 block w-full py-2 border border-gray-300 rounded-md"
                  type="number"
                  id="cep"
                  name="cep"
                  required
                />
              </div>
              <div className="mb-4 md:col-span-3 col-span-4">
                <label className="block text-sm font-medium text-gray-700" htmlFor="lagradouro">
                  Lagradouro
                </label>
                <input
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  type="text"
                  id="lagradouro"
                  name="lagradouro"
                  required
                />
              </div>
              <div className="mb-4 col-span-2 md:col-span-1">
                <label className="block text-sm font-medium text-gray-700" htmlFor="lagradouroNumero">
                  Número
                </label>
                <input
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  type="text"
                  id="lagradouroNumero"
                  name="lagradouroNumero"
                  required
                />
              </div>
              <div className="mb-4 md:col-span-3 col-span-2">
                <label className="block text-sm font-medium text-gray-700" htmlFor="bairro">
                  Bairro
                </label>
                <input
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  type="text"
                  id="bairro"
                  name="bairro"
                  required
                />
              </div>
              <div className="mb-4 col-span-4">
                <label className="block text-sm font-medium text-gray-700" htmlFor="complemento">
                  Complemento
                </label>
                <input
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  type="text"
                  id="complemento"
                  name="complemento"
                  required
                />
              </div>
              <div className="mb-4 md:col-span-3 col-span-2">
                <label className="block text-sm font-medium text-gray-700" htmlFor="cidade">
                  Cidade
                </label>
                <input
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  type="text"
                  id="cidade"
                  name="cidade"
                  required
                />
              </div>
              <div className="mb-4 md:col-span-1 col-span-2">
                <label className="block text-sm font-medium text-gray-700" htmlFor="estado">
                  Estado
                </label>
                <input
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  type="text"
                  id="estado"
                  name="estado"
                  required
                />
              </div>
              <button className='bg-orange-500 hover:bg-orange-600 py-1 px-2 col-span-4 rounded-3xl text-white -mt-2' type='submit'>Registrar</button>
            </form>
            <div className='flex justify-start mt-8'><span onClick={handleClick} className='text-sm flex bg-slate-50 px-3 py-1 rounded-3xl shadow-md  mx-auto md:mx-0 items-center cursor-pointer hover:bg-slate-100'><FiChevronsLeft className='mr-2 ' />Dados da Farmacia</span></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CadastroFarmacia;
