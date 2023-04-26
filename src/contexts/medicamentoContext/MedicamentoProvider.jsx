import { createContext, useEffect, useState } from "react";
import medicamentosData from '../../medicamentos.json';

const MedicamentoContext = createContext();
export { MedicamentoContext }
export const MedicamentoProvider = ({ children }) => {


  const [todosMedicamentos, setTodosMedicamentos] = useState([]);
  const [carregando, setCarregando] = useState(true);
  //criado para executar o useEffect quando o usuário cadastrar um novo medicamento
  const [atualizarLista, setAtualizarLista] = useState(false);



  const [medicamento, setMedicamento] = useState({
    id: 1,
    nomeMedicamento: '',
    nomeLaboratorio: '',
    dosagemMedicamento: '',
    descricaoMedicamento: '',
    precoUnitario: '',
    tipoMedicamento: '',
  });

  useEffect(() => {
    const fetchStoredMedicamentos = () => {
      return JSON.parse(localStorage.getItem("medicamentos")) || [];
    };
    const medicamentos = fetchStoredMedicamentos();
   
    // Mescla as farmácias do localStorage com as farmácias do arquivo JSON
      const medicamentosJuntos = [...medicamentos, ...medicamentosData.medicamentos];
      
      setTodosMedicamentos(medicamentosJuntos);
  
    const exibirDados = () => setCarregando(false);
    // espera 1 segundo para exibir os dados
    setTimeout(exibirDados, 1000);
  }, [atualizarLista]);


 


  const atualizaDadosMedicamento = (name, value) => {
    setMedicamento({ ...medicamento, [name]: value });
  };



  const registrarMedicamento = (medicamento) => {
    const { nomeMedicamento, nomeLaboratorio, dosagemMedicamento, descricaoMedicamento, precoUnitario, tipoMedicamento } = medicamento;
  
    const storedMedicamentos = JSON.parse(localStorage.getItem("medicamentos")) || [];
    const ultimoId = storedMedicamentos.length > 0 ? storedMedicamentos[storedMedicamentos.length - 1].id : 0;
  
    const medicamentoJaCadastrado = storedMedicamentos.some(medicamento => medicamento.nomeMedicamento === nomeMedicamento);
   
    // verifica se o medicamento já foi cadastrado
    if (medicamentoJaCadastrado) {
      return null;
    } else {
      const newMedicamento = { 
        id: ultimoId + 1, 
        nomeMedicamento, 
        nomeLaboratorio, 
        dosagemMedicamento, 
        descricaoMedicamento, 
        precoUnitario, 
        tipoMedicamento 
      };
      storedMedicamentos.push(newMedicamento);
       // Atualiza o estado todasFarmacias
      //  setTodosMedicamentos([...storedMedicamentos]);
      setAtualizarLista(!atualizarLista);

      localStorage.setItem("medicamentos", JSON.stringify(storedMedicamentos));
      return newMedicamento;
    }
  };
  

  const value = {
    medicamento,
    atualizaDadosMedicamento,
    registrarMedicamento,
    todosMedicamentos,
    carregando,

  }

  return (
    <MedicamentoContext.Provider value={value}>
      {children}
    </MedicamentoContext.Provider>
  )
}
