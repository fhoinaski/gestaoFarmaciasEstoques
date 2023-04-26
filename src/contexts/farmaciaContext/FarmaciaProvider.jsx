import { createContext, useEffect, useState } from "react";
import { buscarEndereco } from "../../services/BuscaEndereco";
import farmaciasData from '../../farmacias.json';


const FarmaciaContext = createContext();
export { FarmaciaContext }
export const FarmaciaProvider = ({ children }) => {

  const [todasFarmacias, setTodasFarmacias] = useState([]);
  const [carregando, setCarregando] = useState(true);

  //criado para executar o useEffect quando o usuário cadastrar um novo medicamento
  const [atualizarLista, setAtualizarLista] = useState(false);


  const [dadosFarmacia, setFarmData] = useState({
    razaoSocial: '',
    cnpj: '',
    nomeFantasia: '',
    email: '',
    telefone: '',
    celular: '',
    cep: '',
    logradouroNumero: '',
    logradouro: '',
    bairro: '',
    complemento: '',
    cidade: '',
    estado: '',
    latitude: '',
    longitude: ''
  });



  useEffect(() => {
    const fetchStoredFarmacias = () => {
      return JSON.parse(localStorage.getItem("farmacias")) || [];
    };
    
    const farmacias = fetchStoredFarmacias();

    // Mescla as farmácias do localStorage com as farmácias do arquivo JSON
    const juntarFarmacias = [...farmacias, ...farmaciasData.farmacias];

    // Atualiza o estado todasFarmacias com as farmácias do localStorage e do arquivo JSON
    setTodasFarmacias(juntarFarmacias);

    const exibirMapa = () => setCarregando(false);
    // espera 1 segundo para exibir o mapa
    setTimeout(exibirMapa, 1000);
  }, [atualizarLista]);


  //função que busca o endereço e atualiza o estado
  const buscarAtualizarEndereco = async (cep) => {
    const enderecoData = await buscarEndereco(cep);
    if (enderecoData) {
      setFarmData((prevState) => ({
        ...prevState,
        ...enderecoData,
      }));
    }
  };


  const atualizaDadosFarmacia = (e) => {
    const { name, value } = e.target;
    setFarmData({ ...dadosFarmacia, [name]: value });
  };


  //função responsavel para cadastrar a farmacia
  const registerFarmacia = (farmacia) => {
    const {
      razaoSocial,
      cnpj,
      nomeFantasia,
      email,
      telefone,
      celular,
      cep,
      logradouro,
      logradouroNumero,
      bairro,
      complemento,
      cidade,
      estado,
      latitude,
      longitude } = farmacia;

    const storegFarmacias = JSON.parse(localStorage.getItem("farmacias")) || [];

    // verifica se o cnpj informado já está cadastrado
    const cnpjJaCadastrado = storegFarmacias.some(farmacia => farmacia.cnpj === cnpj);

    // se o cnpj já estiver cadastrado, retorna null para informar que o cnpj já está registrado
    if (cnpjJaCadastrado) {
      return null;

      // Caso cnpj não esteja cadastrado, cria um novo objeto com os dados da farmácia
    } else {
      const newFarmacia = {
        razaoSocial,
        cnpj,
        nomeFantasia,
        email,
        telefone,
        celular,
        cep,
        logradouro,
        logradouroNumero,
        bairro,
        complemento,
        cidade,
        estado,
        latitude,
        longitude
      };
      // Adiciona o novo objeto ao array de farmácias armazenadas 
      storegFarmacias.push(newFarmacia);

      // Atualiza o estado todasFarmacias
      setAtualizarLista(!atualizarLista);

      // Atualiza o localStorage com o novo array de farmácias com a nova farmácia
      localStorage.setItem("farmacias", JSON.stringify(storegFarmacias));

      return newFarmacia;
    }
  };


  //codigo responsavel por verificar se os campos obrigatorios foram preenchidos

  const nomeFormLabel = {
    razaoSocial: "Razão Social",
    cnpj: "CNPJ",
    nomeFantasia: "Nome Fantasia",
    email: "Email",
    telefone: "Telefone",
    celular: "Celular",
    cep: "CEP",
    logradouro: "Logradouro",
    logradouroNumero: "Número do Logradouro",
    bairro: "Bairro",
    cidade: "Cidade",
    estado: "Estado",
    latitude: "Latitude",
    longitude: "Longitude"
  };

  const verificaCamposObrigatorios = () => {
    const campoNaoPreenchido = Object.keys(nomeFormLabel).find((campo) => !Boolean(dadosFarmacia[campo]));
    return campoNaoPreenchido ? nomeFormLabel[campoNaoPreenchido] : null;
  };


  const value = {
    dadosFarmacia,
    atualizaDadosFarmacia,
    registerFarmacia,
    verificaCamposObrigatorios,
    todasFarmacias,
    buscarAtualizarEndereco,
    carregando

  }
  return (
    <FarmaciaContext.Provider value={value}>
      {children}
    </FarmaciaContext.Provider>
  )
}