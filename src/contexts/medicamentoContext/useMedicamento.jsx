import { useContext } from "react";
import { MedicamentoContext } from "./MedicamentoProvider";


export const useMedicamentoState = () => {
    const context = useContext(MedicamentoContext);

    return context;
    }