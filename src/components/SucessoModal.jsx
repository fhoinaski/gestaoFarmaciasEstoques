import React from 'react';
import { Link } from 'react-router-dom';

const SucessoModal = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed z-10 inset-0 overflow-y-auto ${isOpen ? 'block' : 'hidden'}`}
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="flex items-end justify-center  min-h-screen pt-4 px-4 pb-48 text-center sm:block sm:p-0">
        <div
          className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          aria-hidden="true"
          onClick={onClose}
        ></div>

        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        ></span>

        <div
          className="inline-block align-bottom bg-white rounded-lg text-center overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div className="bg-orange-400 px-4 py-3 ">
            <div className="flex items-center justify-between">
              <h3 className="text-lg  font-medium text-white" id="modal-title">
                Sucesso!
              </h3>
              <button
                className="text-white hover:text-gray-200 focus:outline-none"
                onClick={onClose}
              >
                <span className="sr-only">Novo Cadastro</span>
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <p className="text-lg">Nova cadastro feito com sucesso!</p>
            <p className="text-gray-500 mt-2 text-sm">
              Uma nova Fármacia esta cadatsrada no sistema.
            </p>
          </div>

          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex items-center justify-center sm:flex-row-reverse">
            <Link to="/farmacias">
              <button
                type="button"
                className="w-full inline-flex justify-center rounded-md border my-3 border-transparent shadow-sm px-4 py-2 bg-orange-300 text-base font-medium text-white hover:bg-orange-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm"
                onClick={onClose}
              >
                Consultar
              </button>
            </Link>
            <Link to="/farmacias/cadastrar">
                <button
                  type="button"
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-orange-300 text-base font-medium text-white hover:bg-orange-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={onClose}
                >
                  Cadastra Nova
                </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SucessoModal;