import { createContext, useState } from "react";

const MedicamentoContext = createContext();
export { MedicamentoContext }
export const MedicamentoProvider = ({ children }) => {

  const [medicamento, setMedicamento] = useState({
    id: 1,
    nomeMedicamento: '',
    nomeLaboratorio: '',
    dosagemMedicamento: '',
    descricaoMedicamento: '',
    precoUnitario: '',
    tipoMedicamento: '',
  });

  const updateMedicData = (name, value) => {
    setMedicamento({ ...medicamento, [name]: value });
  };

  const getStoredMedicamentos = () => JSON.parse(localStorage.getItem("medicamentos")) || [];

  const saveStoredMedicamentos = (medicamentos) => localStorage.setItem("medicamentos", JSON.stringify(medicamentos));

  const getNextId = (storedMedicamentos) => {
    const ultimoId = storedMedicamentos.length > 0 ? storedMedicamentos[storedMedicamentos.length - 1].id : 0;
    return ultimoId + 1;
  };

  const registerMedic = (medicamento) => {
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
      localStorage.setItem("medicamentos", JSON.stringify(storedMedicamentos));
      return newMedicamento;
    }
  };
  

  const camposObrigatorio = [
    'nomeMedicamento',
    'nomeLaboratorio',
    'dosagemMedicamento',
    'descricaoMedicamento',
    'precoUnitario',
    'tipoMedicamento',
  ];

  const verificaCamposObrigatorios = () => {
    return camposObrigatorio.every((campo) => Boolean(medicamento[campo]));
  };

  const value = {
    medicamento,
    updateMedicData,
    registerMedic,
    verificaCamposObrigatorios,
  }

  return (
    <MedicamentoContext.Provider value={value}>
      {children}
    </MedicamentoContext.Provider>
  )
}
