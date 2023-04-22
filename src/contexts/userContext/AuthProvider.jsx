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

    const initialAuthState = JSON.parse(localStorage.getItem('isAuthenticated')) || false;
    const [isAuthenticated, setIsAuthenticated] = useState(initialAuthState);
    const inicialRegistroUsuario = JSON.parse(localStorage.getItem('registroUsuario')) || [];
    const [registroUsuario, setRegistroUsuario] = useState(inicialRegistroUsuario);

    // Atualiza o valor de 'isAuthenticated' no localStorage sempre que ele mudar.
    useEffect(() => {
        localStorage.setItem('isAuthenticated', JSON.stringify(isAuthenticated));
    }, [isAuthenticated]);


    const registrarUsuario = async ({ nome, email, senha }) => {
        const novoUsuario = {
          nome,
          email,
          senha,
        };
      
        try {
          const atualizarRegistroUsuario = [...registroUsuario, novoUsuario];
          setRegistroUsuario(atualizarRegistroUsuario);
          localStorage.setItem('registroUsuario', JSON.stringify(atualizarRegistroUsuario));
          setIsAuthenticated(true);
        //   navigate('/');
          return true; 
        } catch (error) {
          console.error('Erro ao registrar usuário', error);
          return false; 
        }
      };
      



    // Função para autenticar o usuário.
    const loginUser = async ({ email, password }) => {
        const user = {
          email,
          password,
        };
    
        // Verifica se o usuário existe nos usuários cadastrados.
        const existingUser = registroUsuario.find(
          (registroUsuario) => registroUsuario.email === email
        );
      
        if (!existingUser) {
          setIsAuthenticated(false);
          return { error: 'E-mail não encontrado.' };
        }
      
        if (existingUser.senha !== password) {
          setIsAuthenticated(false);
          return { error: 'Senha incorreta.' };
        }
      
        setIsAuthenticated(true);
        localStorage.setItem("user", JSON.stringify(user));
        navigate('/farmacias/cadastrar');
        return user;
      };
      


    // Função para deslogar o usuário, removendo os dados do usuário do localStorage e redirecionando para a página inicial.
    const logoutUser = () => {
        localStorage.removeItem("user");
        setIsAuthenticated(false);
        navigate('/');
    };

    // Função para validar a senha com base em uma expressão regular.
    const validarSenha = (senha) => {
        const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        return regex.test(senha);
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
        validarSenha,
        updateUserData,
        registrarUsuario
    };

    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
};
