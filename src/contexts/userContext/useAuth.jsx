import { useContext } from 'react';
import { AuthContext } from './AuthProvider';

export const useAuthState = () => {
  const context = useContext(AuthContext);
  
  return context;
};
