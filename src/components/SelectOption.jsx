import React from 'react';

const SelectOption = ({ value, onChange }) => {
  return (
    <div className="select-option">
      <select value={value} onChange={onChange} className="select-input">
        <option value="Todos">Todos Medicamentos</option>
        <option value="Comum">Medicamento Comum</option>
        <option value="Controlado">Medicamento Controlado</option>
      </select>
    </div>
  );
};

export default SelectOption;
