import React from 'react';
import { Link } from 'react-router-dom';



const Apresentacao = () => {
    
    return (
        <section className="bg-gray-100">
            <div className="max-w-7xl flex mx-auto items-center py-16 px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                
                    <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-2xl sm:tracking-tight lg:text-3xl md:text-xl">

                    Bem-vindo(a) à <span className="text-orange-400">LABPharmacy</span> Inc!
                    </p>
                    <p className="max-w-xl mt-5 mx-auto text-justify text-xl text-gray-500">
                        Somos uma renomada empresa do ramo farmacêutico que está expandindo sua rede de lojas. Para gerenciar nossas farmácias e medicamentos de forma eficiente, criamos o Pharmacy Central System, uma plataforma online inovadora.

                        Com o Pharmacy Central System, nossos gestores têm acesso a informações precisas em tempo real sobre estoque, vendas, compras e distribuição dos produtos, garantindo segurança e qualidade aos nossos clientes.

                        Estamos comprometidos em oferecer sempre o melhor para nossos clientes e colaboradores. Para acessar o Pharmacy Central System, <span ><Link className='text-orange-600 underline font-semibold' to="/login">faça o login na área restrita</Link></span>. Obrigado por escolher a LABPharmacy Inc.
                    </p>
                </div>
                <div className=' opacity-70 ml-5 -mb-20 hidden md:block'>
                    <img src="/public/homeImg.jpeg" alt="" className='shadow-xl rounded-xl'  />
                </div>
            </div>
        </section>
    );
};

export default Apresentacao;