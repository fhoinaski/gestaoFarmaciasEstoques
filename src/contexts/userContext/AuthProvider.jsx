import React, { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export { AuthContext };



export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();
    const [userData, setUserData] = useState({
        email: '',
        password: '',
    });

    // Define o estado inicial de isAuthenticated com base no valor armazenado no localStorage, caso contrário, será falso.
    const initialAuthState = JSON.parse(localStorage.getItem('isAuthenticated')) || false;
    const [isAuthenticated, setIsAuthenticated] = useState(initialAuthState);

    // Atualiza o valor de 'isAuthenticated' no localStorage sempre que ele mudar.
    useEffect(() => {
        localStorage.setItem('isAuthenticated', JSON.stringify(isAuthenticated));
    }, [isAuthenticated]);

    // Função para autenticar o usuário.
    const loginUser = async ({ email, password }) => {
        const user = {
            email,
            password,
        };

        // Verifica se a senha é válida e, em caso afirmativo, autentica o usuário, armazena os dados do usuário e redireciona para a página desejada.
        if (validatePassword(password)) {
            setIsAuthenticated(true);
            localStorage.setItem("user", JSON.stringify(user));
            navigate('/farmacias/cadastrar');
            return user;
        } else {
            setIsAuthenticated(false);
            return null;
        }
    };

    // Função para deslogar o usuário, removendo os dados do usuário do localStorage e redirecionando para a página inicial.
    const logoutUser = () => {
        localStorage.removeItem("user");
        setIsAuthenticated(false);
        navigate('/');
    };

    // Função para validar a senha com base em uma expressão regular.
    const validatePassword = (password) => {
        const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        return regex.test(password);
    };

    // Função para atualizar os dados do usuário no estado userData.
    const updateUserData = (name, value) => {
        setUserData({ ...userData, [name]: value });
    };

    const value = {
        isAuthenticated,
        userData,
        loginUser,
        logoutUser,
        validatePassword,
        updateUserData,
    };

    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
};
