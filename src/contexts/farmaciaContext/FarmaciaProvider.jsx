import { createContext, useState } from "react";


const FarmaciaContext = createContext();
export { FarmaciaContext }
export const FarmaciaProvider = ({ children }) => {


    const [farmData, setFarmData] = useState({
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
    

    const updateFarmData = (name, value) => {
        setFarmData({ ...farmData, [name]: value });
    };

    const registerFarmacia = (farmacia) => {
      const { razaoSocial, cnpj, nomeFantasia, email, telefone, celular, cep, logradouro, logradouroNumero, bairro, complemento, cidade, estado, latitude, longitude } = farmacia;
  
      const storegFarmacias = JSON.parse(localStorage.getItem("farmacias")) || [];
      const cnpjJaCadastrado = storegFarmacias.some(farmacia => farmacia.cnpj === cnpj);
  
      // Verifica se o CNPJ já está cadastrado no localStorage e retorna null
      if (cnpjJaCadastrado) {
        return null;
      } else {
        const newFarmacia = { razaoSocial, cnpj, nomeFantasia, email, telefone, celular, cep, logradouro, logradouroNumero, bairro, complemento, cidade, estado, latitude, longitude};
        storegFarmacias.push(newFarmacia);
        localStorage.setItem("farmacias", JSON.stringify(storegFarmacias));
        return newFarmacia;
      }
  };
  

    const verificaCamposObrigatorios = () => {
        const camposObrigatorio = [
          "razaoSocial",
          "cnpj",
          "nomeFantasia",
          "email",
          "telefone",
          "celular",
          "cep",
          "logradouro",
          "logradouroNumero",
          "bairro",
          "cidade",
          "estado",
          "latitude",
          "longitude"
        ];        
      
        return camposObrigatorio.every((campo) => Boolean(farmData[campo]));
      };

      const buscarEndereco = async (cep) => {
        console.log(cep);
        try {
          const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);

      
          const data = await response.json();
      
          if (data.erro) {
            throw new Error('CEP não encontrado.');
          }
      
          const enderecoCompleto = `${data.logradouro}, ${data.bairro}, ${data.localidade}, ${data.uf}, ${data.cep}, Brasil`;
          const geolocalizacao = await buscarGeolocalizacao(enderecoCompleto);
      
          setFarmData(prevState => ({
            ...prevState,
            logradouro: data.logradouro,
            bairro: data.bairro,
            cidade: data.localidade,
            estado: data.uf,
            latitude: geolocalizacao.latitude,
            longitude: geolocalizacao.longitude,
          }));
        } catch (error) {
          console.error(error.message);
        }
        
      };
      
      

      const buscarGeolocalizacao = async (enderecoCompleto) => {
        console.log(enderecoCompleto);
        try {
          const url = `https://nominatim.openstreetmap.org/search?format=json&addressdetails=1&q=${encodeURIComponent(enderecoCompleto)}&limit=1`;
      
          const response = await fetch(url);
          if (response.ok) {
            const data = await response.json();
            if (data.length > 0) {
              const latitude = data[0].lat;
              const longitude = data[0].lon;
              return { latitude, longitude };
            } else {
              throw new Error("Endereço não encontrado.");
            }
          } else {
            throw new Error("Erro ao obter dados da API Nominatim.");
          }
        } catch (error) {
          console.error("Erro ao obter geolocalização:", error);
        }
      };
      
          
      
      

    const value = {
        farmData,
        updateFarmData,
        registerFarmacia,
        verificaCamposObrigatorios,
        buscarEndereco,
        buscarGeolocalizacao,
  

    }
    return (
        <FarmaciaContext.Provider value={value}>
            {children}
        </FarmaciaContext.Provider>
    )
}