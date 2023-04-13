import React from 'react';
import { HiCheckCircle } from "react-icons/hi2";



const SuccessLogin = ({text, info,}) => {

  return (
    <div className="flex flex-col items-center justify-center h-96 bg-orange-100">
      <HiCheckCircle className="w-16 h-16 text-green-500"/>
      <h1 className="text-2xl font-bold text-green-500 mt-4">{text}</h1>
      <p className="text-gray-600 mt-2 mx-5">{info}</p>
    </div>
  );
};

export default SuccessLogin;