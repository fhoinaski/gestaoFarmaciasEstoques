import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`Email: ${email}, Password: ${password}`);
    };

    return (
        <div className="flex items-center justify-center h-screen bg-gray-200">
            <div className="bg-white p-8 rounded-lg shadow-lg">
                <h1 className="text-3xl font-bold mb-4 text-gray-700">Faça seu login</h1>
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
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Digite seu Email"
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
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Digite sua senha"
                        />
                    </div>
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
                            <hr class="border border-gray-200  mx-auto" />
                        </div>
                        <div className='mt-1'>
                            Não tem cadastrado? <Link to="/registrar-usuario" className='text-orange-600 font-semibold hover:text-orange-800'>Cadastre-se</Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;