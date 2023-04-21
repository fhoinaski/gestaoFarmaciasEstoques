import React from 'react';
import {BsFacebook, BsInstagram, BsTwitter} from 'react-icons/bs';

const Footer = () => {
  return (
    <footer className="bg-gray-300 text-orange-500 py-8">
      <div className="container mx-auto flex flex-wrap justify-center">
        <div className="w-full lg:w-6/12 px-4">
          <h4 className="text-3xl font-semibold">LABPharmacy Inc.</h4>
          <h5 className="text-lg mt-0 mb-2">
          Conectando Saúde e Bem-Estar: Seu Sistema de Farmácias Centralizado.
          </h5>
          <h6 className='text-sm mt-5'>Pharmacy Central System - Gerenciamento simplificado de farmácias e medicamentos para melhorar a saúde e o bem-estar.</h6>
          <div className="mt-6 flex gap-4">
          <BsFacebook className='text-blue-500 w-10 h-7 cursor-pointer'/>
          <BsInstagram className='text-rose-600 w-10 cursor-pointer h-7'/>
          <BsTwitter className='text-blue-700 w-10 cursor-pointer h-7'/>
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