import React, { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export { AuthContext };



export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();
    const [dadosUsuario, setDadosUsuario] = useState({
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
        const existeUsuario = registroUsuario.find(
          (registroUsuario) => registroUsuario.email === email
        );
      
        // Se o usuário não existir, retorna um erro.
        if (!existeUsuario) {
          setIsAuthenticated(false);
          return { error: 'E-mail não encontrado.' };
        }
      
        // Se a senha estiver incorreta, retorna um erro.
        if (existeUsuario.senha !== password) {
          setIsAuthenticated(false);
          return { error: 'Senha incorreta.' };
        }
      
        // Se o usuário existir e a senha estiver correta, atualiza o estado de 'isAuthenticated' para true e salva os dados do usuário no localStorage.
        setIsAuthenticated(true);
        localStorage.setItem("user", JSON.stringify(user));

        //redireciona para a página de cadastro de farmácia
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

    // Função para atualizar os dados do usuário no estado dadosUsuario.
    const atualizaDadosUsuario = (name, value) => {
        setDadosUsuario({ ...dadosUsuario, [name]: value });
    };

    const value = {
        isAuthenticated,
        dadosUsuario,
        loginUser,
        logoutUser,
        validarSenha,
        atualizaDadosUsuario
  ,
        registrarUsuario
    };

    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
};
