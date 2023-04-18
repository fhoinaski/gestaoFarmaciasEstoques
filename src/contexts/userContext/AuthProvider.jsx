import React, { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export { AuthContext };

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const navigate = useNavigate();
    const [userData, setUserData] = useState({
        email: '',
        password: '',
    });

    // Função para logar o usuário.
    const loginUser = async ({ email, password }) => {
        const user = {
            email,
            password,
        };

        if (validaPassword(password)) {
            setIsAuthenticated(true);
            localStorage.setItem("user", JSON.stringify(user));
            //redireciona o usuario após login com sucesso
            navigate('/farmacias/cadastrar');
            return user;
        } else {
            setIsAuthenticated(false);
            return null;
        }
    };

    // função para deslogar o usuário
    const logoutUser = () => {
        localStorage.removeItem("user");
        setIsAuthenticated(false);
        navigate('/');
    };

    // validar senha
    const validaPassword = (password) => {
        const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        return regex.test(password);
    };

    // atualizar dados do usuário
    const updateUserData = (name, value) => {
        setUserData({ ...userData, [name]: value });
    };

    

    const value = {
        isAuthenticated,
        userData,
        loginUser,
        logoutUser,
        validaPassword,
        updateUserData,
        
    };    

    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
};
