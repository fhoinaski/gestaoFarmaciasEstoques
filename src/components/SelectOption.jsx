import React from 'react';

const SelectOption = ({ value, onChange }) => {
  return (
    <div className="select-option">
      <select value={value} onChange={onChange} className="select-input">
        <option value="todos">Todos Medicamentos</option>
        <option value="comum">Medicamento Comum</option>
        <option value="controlado">Medicamento Controlado</option>
      </select>
    </div>
  );
};

export default SelectOption;
