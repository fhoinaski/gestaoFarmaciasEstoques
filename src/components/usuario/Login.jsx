import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import SuccessLogin from './SucessLogin';
import { useAuthState } from '../../contexts/userContext/useAuthHooks';

const Login = () => {

    
    const { isAuthenticated, loginUser, getUserNameLocalStorage, updateUserData, userData } = useAuthState();

    const [erro, setErro] = useState('');
    const [textoLogin, setTextoLogin] = useState('Faça seu login')
    const [valorCss, setValorCss] = useState('p-8')
    const userName = getUserNameLocalStorage();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const user = await loginUser({ email: userData.email, password: userData.password });
        // Atualize a variável erro se o login falhar e mostra msg de erro
        if (!user) {
            setErro('Email ou Senha incorretos. Tente novamente.');
        } else {
            setErro('');
            setTextoLogin('')
            setValorCss('p-2')
        }
    };


    return (
        <div className="flex items-center justify-center h-screen  bg-gray-200">
            <div className={`bg-white w-96 ${valorCss} rounded-lg shadow-lg`}>
                <h1 className="md:text-2xl font-bold text-center text-gray-700">{textoLogin}</h1>
                {isAuthenticated ? (
                    <SuccessLogin text={`Bem Vindo ${userName}!`} info={"Você esta logado agora "} />
                ) : (

                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-600 font-bold mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="w-full border border-gray-300 p-2 rounded-lg"
                                value={userData.email}
                                onChange={(e) => updateUserData("email", e.target.value)}
                                placeholder="Digite seu Email"
                                required autoComplete="email"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="block text-gray-600 font-bold mb-2">
                                Senha
                            </label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                className="w-full border border-gray-300 p-2 rounded-lg"
                                value={userData.password}
                                onChange={(e) => updateUserData("password", e.target.value)}
                                placeholder="Digite sua senha"
                                required autoComplete="current-password"
                            />
                        </div>
                        {erro && <p className="text-red-500 font-semibold md:text-base text-sm mb-4">{erro}</p>}
                        <button
                            type="submit"
                            className="w-full rounded-3xl bg-orange-500 hover:bg-orange-600 px-6 py-2 text-xl font-medium uppercase text-white"
                        >
                            Entrar
                        </button>
                        <div className='bg-gray-50 rounded-xl flex-col h-20 w-auto px-3 pt-1 mt-5'>
                            <Link className='mt-2 text-orange-600 font-semibold hover:text-orange-800 cursor-pointer' to="/recuperar-senha">
                                Esqueci minha senha
                            </Link>
                            <div >
                                <hr className="border border-gray-200  mx-auto" />
                            </div>
                            <div className='mt-1'>
                                Não tem cadastrado? <Link to="/registrar-usuario" className='text-orange-600 font-semibold hover:text-orange-800'>Cadastre-se</Link>
                            </div>
                        </div>
                    </form>
                )}
            </div>
        </div>
    );
};

export default Login;