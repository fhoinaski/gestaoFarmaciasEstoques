import React from 'react';
import propTypes from 'prop-types';

const AlertModal = ({ aberto, fechar, textoMensagem }) => {
  return (
    <div>
      {aberto && (
        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen px-4 pt-6 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>

            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            ></span>

<div
  className="absolute align-bottom bg-white rounded-lg px-10 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6 left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%]"
  role="dialog"
  aria-modal="true"
  aria-labelledby="modal-headline"
>
              <div>
                <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100">
                  <svg
                    className="h-6 w-6 text-red-600"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </div>
                <div className="mt-3 text-center sm:mt-5">
                  <h3
                    className="text-lg leading-6 font-medium text-gray-900"
                    id="modal-headline"
                  >
                    Atenção
                  </h3>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">{textoMensagem}</p>
                  </div>
                </div>
              </div>
              <div className="mt-5 sm:mt-6">
                <button
                  onClick={fechar}
                  type="button"
                  className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-orange-500 text-base font-medium text-white hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-600 sm:text-sm"
                >
                  OK Entendi
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

AlertModal.propTypes = {
  aberto: propTypes.bool.isRequired,
  textoMensagem: propTypes.string.isRequired,
};

export default AlertModal;
