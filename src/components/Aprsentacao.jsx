import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthState } from '../contexts/userContext/useAuth';

const Apresentacao = () => {
    const {isAuthenticated} = useAuthState();
    
    const redirecionar = () => {
        if(isAuthenticated === true){
            return '/farmacias'
        }else{
            return '/login'
        }
    }


  return (
    <section className="bg-gray-100">
      <div className="container mx-auto py-12 px-4">
        <div className="flex flex-col md:flex-row justify-center items-center md:-mx-4">
          <div className="md:w-1/2 md:px-4">
            <h2 className="text-4xl text-orange-500 font-bold mb-4 text-center">Bem vindo a LabPharmacy System</h2>
            <p className="mb-4">
            Uma plataforma inovadora e otimizada para a gestão de farmácias e medicamentos, com foco na promoção da saúde e no aprimoramento do bem-estar geral da comunidade.
            </p>
            <Link to={isAuthenticated ? "/farmacias" : "/login"} className='flex justify-center m-10'>
                <button
                  className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
                >
                  {isAuthenticated ? "Lista de Farmacias" : "Acessar"}
                </button>
            </Link>
          </div>
          <div className="md:w-1/2 md:px-4 relative">
  <img
    src="/imagemHome.png"
    alt="Random Image"
    className="rounded-lg shadow-lg"
    style={{ filter: "saturate(0)" }} 
  />
  <div
    className="absolute top-0 left-0 w-full h-full bg-orange-500 opacity-20 rounded-lg shadow-lg"
  ></div>
</div>




        </div>
      </div>
    </section>
  );
};

export default Apresentacao;