import React from 'react';

const SelectOption = ({ value, onChange }) => {
  return (
    <div className="select-option  rounded-xl">
      <select value={value} onChange={onChange} className="select-input h-6 rounded-md border-2 border-gray-300 w-32 md:w-auto focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent">
        <option className='font-medium text-orange-500' value="todos">Todos Medicamentos</option>
        <option className='font-medium text-orange-500'value="Comum">Medicamento Comum</option>
        <option className='font-medium text-orange-500'value="Controlado">Medicamento Controlado</option>
      </select>
    </div>
  );
};

export default SelectOption;
