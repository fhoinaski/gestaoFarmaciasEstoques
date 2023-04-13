import React, { useState } from 'react';
import { useAuthState } from '../../contexts/userContext/useAuthHooks';

const RecuperarSenha = () => {
  const [email, setEmail] = useState('');
  const [abrirInputSenha, setAbrirInputSenha] = useState(false);
  const [newPassword, setNewPassword] = useState('');
  const [statusMessage, setStatusMessage] = useState('');

  const { recoveryPassword,getUserByEmail,validatePassword } = useAuthState();

  const handleNewPasswordChange = (event) => {
    setNewPassword(event.target.value);
  };
  

  const handleInputChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const user = await getUserByEmail(email);
    if (user) {
      setAbrirInputSenha(true);
      setStatusMessage('');
    } else {
      setStatusMessage('Email não encontrado.');
    }
  };

  const handleUpdatePassword = async () => {
    if (!validatePassword(newPassword)) {
      setStatusMessage('Senha inválida. Deve conter pelo menos 8 caracteres, entre letras e números.');
      return;
    }
  
    const result = await recoveryPassword(email, newPassword);
    if (result) {
      setStatusMessage('Senha atualizada com sucesso.');
      setAbrirInputSenha(false);
    } else {
      setStatusMessage('Erro ao atualizar a senha.');
    }
  };
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <img className="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow" />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Recuperar minha Senha</h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <input type="hidden" name="remember" value="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Informe seu email
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={handleInputChange}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-orange-500 focus:border-orange-500 focus:z-10 sm:text-sm"
                placeholder="Email de cadastro"
              />
            </div>
          </div>

          <div>
            <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-3xl text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500">
              Recuperar senha
            </button>
          </div>

          {abrirInputSenha && (
            <div className="space-y-4">
              <div>
                <label htmlFor="new-password" className="sr-only">
                  Nova senha
                </label>
                <input
                  id="new-password"
                  name="new-password"
                  type="password"
                  autoComplete="new-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-orange-500 focus:border-orange-500 focus:z-10 sm:text-sm"
                  placeholder="Digite sua nova senha"
                  value={newPassword}
                  onChange={handleNewPasswordChange}
                />
              </div>
              <div>
                <button
                  type="button" // Altere o tipo para button
                  onClick={handleUpdatePassword} // Adicione um onClick handler
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-3xl text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                >
                  Atualizar senha
                </button>
              </div>
            </div>
          )}

          {statusMessage && (
            <div className="mt-4 text-red-500">{statusMessage}</div>
          )}
        </form>
      </div>
    </div>
  );
};
export default RecuperarSenha;