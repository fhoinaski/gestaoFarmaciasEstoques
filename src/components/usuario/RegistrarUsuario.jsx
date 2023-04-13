import React, {  useState } from 'react';
import { useAuthState } from '../../contexts/userContext/useAuthHooks';
import SuccessLogin from './SucessLogin';
import PasswordProgress from './PasswordProgress';


const RegistrarUsuario = () => {
  // importa as funções do contexto
  const { registerUser, updateUserData, userData, getUserNameLocalStorage, isAuthenticated,validatePassword} = useAuthState();
  // pega o nome do usuário do localStorage
  const userName = getUserNameLocalStorage();
  // estado para exibir mensagem de erro
  const [erro, setErro] = useState('');
  // estado para exibir mensagem de sucesso
  const [textoRegistro, setTextoRegistro] = useState('Registre-se')


//função para atualizar o estado do usuário
  const handleChange = (e) => {
    const { name, value } = e.target;
    updateUserData(name, value);
    
  };
//função para registrar o usuário
const handleSubmit = async (e) => {
  e.preventDefault();
  const { password } = userData;
  if (!validatePassword(password)) {
    setErro('Senha inválida. Deve conter pelo menos 8 caracteres, entre letras e números.');
    return;
  }
  try {
    setTextoRegistro('Cadastrando...');
    await registerUser(e);
    setTextoRegistro('');
    setErro('');
  } catch (error) {
    setErro(error.message);
  }
};



  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-200">
      <div className="w-full max-w-md">
        <div className="bg-white shadow-lg rounded-lg p-8 mb-4">
          <h2 className="text-2xl text-gray-700 text-center font-bold mb-4">{textoRegistro}</h2>
          {erro && <p className="text-red-500 text-center font-semibold md:text-base text-sm mb-4">{erro}</p>}
      {isAuthenticated ? (
            <SuccessLogin text={`Bem Vindo ${userName}!`} info={"Você esta cadastrado agora"} />
          ) : (
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="nome" className="block text-gray-800 font-bold mb-2">
                  Nome
                </label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  value={userData.nome}
                  onChange={handleChange}
                  className="w-full border border-gray-300 p-2 rounded-lg"
                  placeholder="Informe seu Nome"
                  required
                />
              </div>
              <div>
                <label htmlFor="telefone" className="block text-gray-800 font-bold mb-2">
                  Telefone
                </label>
                <input
                  type="tel"
                  id="telefone"
                  name="telefone"
                  value={userData.telefone}
                  onChange={handleChange}
                  className="w-full border border-gray-300 p-2 rounded-lg"
                  placeholder="(XX) XXXX-XXXX"
                  required
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
                  value={userData.email}
                  onChange={handleChange}
                  className="w-full border border-gray-300 p-2 rounded-lg"
                  placeholder="email@email.com"
                  required
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
                  value={userData.password}
                  onChange={handleChange}
                  className="w-full border border-gray-300 p-2 rounded-lg"
                  placeholder="Digite sua senha"
                  required
                />
                <PasswordProgress />
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
          )}
        </div>
      </div>
    </div>
  );
};

export default RegistrarUsuario;