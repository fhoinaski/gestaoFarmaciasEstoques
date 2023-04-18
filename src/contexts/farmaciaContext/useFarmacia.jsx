import { useContext } from "react";
import { FarmaciaContext } from "./FarmaciaProvider";


export const useFarmaciaState = () => {
    const context = useContext(FarmaciaContext);

    return context;
    }