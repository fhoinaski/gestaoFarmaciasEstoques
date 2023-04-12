import React from 'react';

const RegistrarUsuario = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-200">
      <div className="w-full max-w-md">
        <div className="bg-white shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4">
          <h2 className="text-2xl text-gray-700 font-bold mb-4">Resgistre-se</h2>
          <form className="space-y-6">
          <div>
              <label htmlFor="name" className="block text-gray-800 font-bold mb-2">
                Nome
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full border border-gray-300 p-2 rounded-lg"
                placeholder="Informe seu Nome"
              />
            </div>
            <div>
              <label htmlFor="name" className="block text-gray-800 font-bold mb-2">
                Telefone
              </label>
              <input
                type="tel"
                id="telefon"
                name="telefon"
                className="w-full border border-gray-300 p-2 rounded-lg"
                placeholder="(XX) XXXX-XXXX"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-800 font-bold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full border border-gray-300 p-2 rounded-lg"
                placeholder="email@email.com"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-gray-800 font-bold mb-2">
                Senha
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full border border-gray-300 p-2 rounded-lg"
                placeholder="Digite sua senha"
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full rounded-3xl bg-orange-500 hover:bg-orange-600 px-6 py-2 text-xl font-medium uppercase text-white"
              >
                Confirmar Registro
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegistrarUsuario;