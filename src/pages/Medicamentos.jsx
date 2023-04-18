import { useEffect, useState } from "react";
import CardProdutos from "../components/CardProdutos";

const Medicamentos = () => {
    const [allMedicamentos, setAllMedicamentos] = useState([]);
    useEffect(() => {
        const storedMedicamentos = JSON.parse(localStorage.getItem("medicamentos")) || [];
        setAllMedicamentos(storedMedicamentos);
    }, []);
    console.log(allMedicamentos.indexOf("nomeMedicamento"));

    return (
        <div className="flex justify-center">
            <div className={`flex flex-wrap justify-center gap-4`}>
                {allMedicamentos.map((medicamento, index) => (
                    <div className={`w-1/3 md:w-1/3 lg:w-1/4 xl:w-1/4 px-1`} key={medicamento.id}>
                        <CardProdutos title={medicamento.nomeMedicamento} description={medicamento.nomeLaboratorio} />
                    </div>
                ))}
            </div>
        </div>
    );
};
export default Medicamentos;
