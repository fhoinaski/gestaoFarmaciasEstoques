import { useContext } from 'react';
import { FarmaciaContext } from './FarmaciaProvider';

export const useFarmaciaState = () => {
  return useContext(FarmaciaContext);
};
