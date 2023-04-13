import React, { useState, useEffect } from 'react';
import { useAuthState } from '../../contexts/userContext/useAuthHooks';

const PasswordProgress = () => {
  const { userData, validatePassword } = useAuthState();
  const [passwordProgresso, setPasswordProgresso] = useState('weak');

  //efeito da barra embaixo da senha
  useEffect(() => {
    const checkPassword = () => {
      if (userData.password.length >= 8 && validatePassword(userData.password)) {
        setPasswordProgresso('strong');
      } else if (userData.password.length >= 4) {
        setPasswordProgresso('medium');
      } else if (userData.password.length >= 2 && userData.password.length < 4) {
        setPasswordProgresso('weak');
      } else {
        setPasswordProgresso('nothing');
      }
    };

    checkPassword();
  }, [userData.password, validatePassword]);

  const BarColor = {
    nothing: 'hidden',
    weak: 'bg-red-500 w-1/3 block',
    medium: 'bg-yellow-500 w-2/3',
    strong: 'bg-green-500 w-full',
  };


  return (
    <div
      className={`  h-2 rounded-xl mt-2 ${BarColor[passwordProgresso]} transition-all duration-300`}
    ></div >
    
  );
};

export default PasswordProgress;
