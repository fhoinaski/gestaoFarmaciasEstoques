import React from 'react';
import { BsInfoCircle } from 'react-icons/bs';
import { ImWhatsapp } from 'react-icons/im';
import {AiOutlineClose} from 'react-icons/ai';



const FarmaciaModal = ({ isOpen, onClose, titulo, objetoInfo }) => {

  const numeroCelular = objetoInfo?.celular;
  const formatarNumero = numeroCelular ? numeroCelular.replace(/[^\d]/g, "") : ""; 
  
  const linkWhatsapp = `https://wa.me/${formatarNumero}`;
  
  return (
    <>
      {isOpen && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen px-4 pt-32 pb-20 text-center sm:block sm:p-0">
            <div
              className="fixed inset-0 transition-opacity"
              aria-hidden="true"
              onClick={onClose}
            >
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            ></span>
            <div
              className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-headline"
            >
              <div>
              <div className="-mt-10 -mr-4 flex justify-end ">
                <AiOutlineClose onClick={onClose} className='cursor-pointer text-orange-500 h-8 w-8 p-1 rounded-xl border-2 border-solid border-orange-200 hover:text-orange-600 hover:border-orange-400 '/>
              </div>
                <div className="mx-auto flex items-center justify-center h-14 w-14 rounded-full border border-spacing-x-8 bg-orange-100 text-orange-500 ">
                  <BsInfoCircle className='h-8 w-8'/>
                </div>
                <div className="mt-3 text-center sm:mt-5">
                  <h3
                    className="text-lg leading-6 font-medium text-gray-900"
                    id="modal-headline"
                  >
                    {titulo}
                  </h3>
                  <div className="mt-2">
                    <div className="mb-2">
                      <p className="text-sm text-gray-500">
                        <span className='font-bold mr-1'>
                          Razão Social:
                        </span>
                        {objetoInfo.razaoSocial}
                      </p>
                      <p className="text-sm text-gray-500">
                        <span className="font-bold mr-1">
                          CNPJ: 
                        </span>
                        {objetoInfo.cnpj}
                      </p>
                      <p className="text-sm text-gray-500">
                        <span className="font-bold mr-1">
                          Nome Fantasia: 
                        </span>
                        {objetoInfo.nomeFantasia}
                      </p>
                      <p className="text-sm text-gray-500">
                        <span className="font-bold mr-1">
                          Telefone:
                        </span>
                        {objetoInfo.telefone}
                      </p>
                      <p className="text-sm text-gray-500">
                        <span className="font-bold mr-1">
                          Endereço: 
                        </span>
                        {objetoInfo.logradouro} ,
                        <span className="font-bold mr-1">
                          Nº: 
                        </span>
                        {objetoInfo.logradouroNumero}
                      </p>
                      <p className="text-sm text-gray-500">
                        {objetoInfo.complemento ? (
                          <>
                            <span className='font-bold mr-1'>Complemento: </span> {objetoInfo.complemento}
                          </>
                        ) : ("")}
                      </p>

                      <p className="text-sm text-gray-500">
                        <span className="font-bold mr-1">Bairro: </span> {objetoInfo.bairro} ,
                        <span className="font-bold mr-1">
                          Cidade:
                        </span>
                        {objetoInfo.cidade} ,
                        <span className="font-bold mr-1">
                          UF:
                        </span>
                        {objetoInfo.estado}
                      </p>
                      <span className="text-sm  flex justify-center items-center text-gray-500 my-4">
                        <a target="_blank" href={linkWhatsapp}>
                          <div className='flex bg-orange-400 py-2 px-4 text-white rounded-2xl font-semibold cursor-pointer hover:bg-orange-500'>
                            <ImWhatsapp className='w-12 h-5'/>
                            {objetoInfo.celular}
                          </div>
                        </a>
                      </span>
                    </div>
                  </div>


                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FarmaciaModal;
