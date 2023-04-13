import React, { useState } from 'react';
import { useAuthState } from '../../contexts/userContext/useAuthHooks';

const Login = () => {
    const {loginUser, updateUserData, userData } = useAuthState();
    const [erro, setErro] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const user = await loginUser({ email: userData.email, password: userData.password });
        if (!user) {
            setErro('Senha deve ter 8 caracteres');
        } else {
            setErro('');             
        }
    };

    return (
        <div className="flex items-center justify-center h-screen bg-gray-200">
            <div className={`bg-white w-96 p-8 rounded-lg shadow-lg`}>
                <h1 className="md:text-2xl font-bold text-center text-gray-700">Faça seu login</h1>

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
                            required
                            autoComplete="email"
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
                            required
                            autoComplete="current-password"
                        />
                    </div>
                    {erro && (
                        <p className="text-red-500 font-semibold md:text-base text-sm mb-4">{erro}</p>
                    )}
                    <button
                        type="submit"
                        className="w-full rounded-3xl bg-orange-500 hover:bg-orange-600 px-6 py-2 text-xl font-medium uppercase text-white"
                    >
                        Entrar
                    </button>
                </form>

            </div>
        </div>
    );
};

export default Login;
