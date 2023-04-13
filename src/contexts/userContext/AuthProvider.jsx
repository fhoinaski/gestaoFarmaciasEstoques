import React, { createContext, useState } from 'react';
//importa as funções para acessar a API do Baserow
import { createRow, fetchTableRows, isValueRegistered, updateRow } from '../../apis/baserow_api/rows';
//importa o id da tabela de usuários
import { USERS_TABLE_ID } from '../../apis/baserow_api/config';

const AuthContext = createContext();

export { AuthContext };

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const [userData, setUserData] = useState({
        nome: '',
        email: '',
        password: '',
        telefone: '',
    });

    // função que verifica se a senha fornecida é igual à senha armazenada no banco de dados
    const checkPassword = (infoPassword, salvoPassword) => {
        return infoPassword === salvoPassword;
    };

    // Verificar se o email já está cadastrado
    const isEmailRegistered = async (tableId, email) => {
        return await isValueRegistered(tableId, "Email", email);
        
    };

    // função para buscar usuário pelo e-mail
    const getUserByEmail = async (email) => {
        const rows = await fetchTableRows(USERS_TABLE_ID);
        const user = rows.find((row) => row.Email === email);
        return user;
    };

    // verifica se o usuário existe no banco de dados
    const checkUserExists = async (email, password) => {
        //verifica se o email existe no banco de dados
        const user = await getUserByEmail(email);

        if (user) {
            //compara a senha fornecida com a senha armazenada no banco de dados
            return checkPassword(password, user.Password) ? user : null;
        }
        return null;
    };

    // Função para logar o usuário.
    const loginUser = async ({ email, password }) => {
        const user = await checkUserExists(email, password);

        if (user) {
            //atualiza o IsAuthenticated para true
            setIsAuthenticated(true);
            //guarda o usuário no localStorage
            localStorage.setItem("user", JSON.stringify(user));
            return user;
        } else {
            setIsAuthenticated(false);
            return null;
        }
    };

    // função para deslogar o usuário 
    const logoutUser = () => {
        //remove o usuário do localStorage
        localStorage.removeItem("user");
        //atualiza o IsAuthenticated para false
        setIsAuthenticated(false);
    };

    // função para atualizar o estado do usuário com os dados fornecidos pelo usuário
    const updateUserData = (name, value) => {
        setUserData({ ...userData, [name]: value });
    };

    //função para registrar o usuário no banco de dados
    const registerUser = async (e) => {
        e.preventDefault();

        const { nome, telefone, email, password } = userData;

        if (await isEmailRegistered(USERS_TABLE_ID, email)) {
            throw new Error("Email já cadastrado.");
        }
        const newRowData = {
            "Nome_Usuario": nome,
            "Telefone_Usuario": telefone,
            "Email": email,
            "Password": password,
        };

        const newRow = await createRow(USERS_TABLE_ID, newRowData);

        if (newRow) {
            console.log("Usuário cadastrado com sucesso");
            localStorage.setItem("user", JSON.stringify(newRow));
            setIsAuthenticated(true);
        } else {
            console.log("Ocorreu um erro ao cadastrar o usuário");
        }
    };
    //pegar o nome do usuario do localstorage para usar em outras paginas
    const getUserNameLocalStorage = () => {
        const storedUser = localStorage.getItem("user");

        if (storedUser) {
            const user = JSON.parse(storedUser);
            return user.Nome_Usuario;
        } else {
            return null;
        }
    };

    //função para atualizar senha pelo email
    const recoveryPassword = async (email, newPassword) => {
        const user = await getUserByEmail(email);
        if (user) {
            const updatedData = {
                Password: newPassword,
            };
            const updatedUser = await updateRow(USERS_TABLE_ID, user.id, updatedData);
            if (updatedUser) {
                console.log('Senha atualizada com sucesso.');
                return true;
            } else {
                console.log('Erro ao atualizar a senha.');
                return false;
            }
        } else {
            console.log('Erro ao encontrar o usuário.');
            return false;
        }
    };

    //validar senha
    const validatePassword = (password) => {
        const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        return regex.test(password);
    }

    const value = {
        isAuthenticated,
        userData,
        loginUser,
        logoutUser,
        registerUser,
        updateUserData,
        getUserNameLocalStorage,
        recoveryPassword,
        getUserByEmail,
        validatePassword,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
