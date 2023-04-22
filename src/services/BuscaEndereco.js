

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

    const enderecoElocalizacao = {
      logradouro: data.logradouro,
      bairro: data.bairro,
      cidade: data.localidade,
      estado: data.uf,
      latitude: geolocalizacao.latitude,
      longitude: geolocalizacao.longitude,
    };

    return enderecoElocalizacao;
  } catch (error) {
    console.error(error.message);
  }
};



//pega a latitude e longitude com base no endereço
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
      }
    } catch (error) {
      console.error("Erro ao obter geolocalização:", error);
    }
  };

  export { buscarEndereco, buscarGeolocalizacao}