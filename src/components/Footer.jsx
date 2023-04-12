import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-400 text-white py-8">
      <div className="container mx-auto flex flex-wrap justify-center">
        <div className="w-full lg:w-6/12 px-4">
          <h4 className="text-3xl font-semibold">LABPharmacy Inc.</h4>
          <h5 className="text-lg mt-0 mb-2">
          Conectando Saúde e Bem-Estar: Seu Sistema de Farmácias Centralizado.
          </h5>
          <h6 className='text-sm mt-5'>Pharmacy Central System - Gerenciamento simplificado de farmácias e medicamentos para melhorar a saúde e o bem-estar.</h6>
          <div className="mt-6">
            <button
              className="bg-white text-gray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
              type="button"
            >
              <i className="fab fa-twitter"></i>
            </button>
            <button
              className="bg-white text-gray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
              type="button"
            >
              <i className="fab fa-facebook-square"></i>
            </button>
            <button
              className="bg-white text-gray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
              type="button"
            >
              <i className="fab fa-instagram"></i>
            </button>
          </div>
        </div>
      </div>
      <div className="container mx-auto pt-8 pb-4">
        <div className="flex flex-wrap justify-center">
          <div className="w-full lg:w-6/12 px-4">
            <p className="mb-4 text-sm">
            © 2023 LABPharmacy Inc. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;