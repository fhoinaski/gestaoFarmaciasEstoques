import React from 'react';

const InfoModal = ({ isOpen, onClose, farmacia }) => {
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
                <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                  <svg
                    className="h-6 w-6 text-green-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div className="mt-3 text-center sm:mt-5">
                  <h3
                    className="text-lg leading-6 font-medium text-gray-900"
                    id="modal-headline"
                  >
                    {farmacia.nomeFantasia}
                  </h3>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Razão Social: {farmacia.razaoSocial}
                    </p>
                    <p className="text-sm text-gray-500">
                      CNPJ: {farmacia.cnpj}
                    </p>
                    <p className="text-sm text-gray-500">
                      Email: {farmacia.email}
                    </p>
                    <p className="text-sm text-gray-500">
                      Telefone: {farmacia.telefone}
                    </p>
                    <p className="text-sm text-gray-500">
                      Celular: {farmacia.celular}
                    </p>
                    <p className="text-sm text-gray-500">
                      CEP: {farmacia.cep}
                    </p>
                    <p className="text-sm text-gray-500">
                      Logradouro: {farmacia.logradouro} {farmacia.logradouroNumero}
                    </p>
                    <p className="text-sm text-gray-500">
                      Bairro: {farmacia.bairro}
                    </p>
                    <p className="text-sm text-gray-500">
                      Cidade: {farmacia.cidade}
                    </p>
                    <p className="text-sm text-gray-500">
                      Estado: {farmacia.estado}
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-5 sm:mt-6">
                <button
                  onClick={onClose}
                  type="button"
                  className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:text-sm"
                >
                  Sair
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default InfoModal;