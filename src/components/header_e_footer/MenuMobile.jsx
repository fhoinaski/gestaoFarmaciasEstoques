import React, { useState } from 'react';
import { Link } from 'react-router-dom';


//função para controlar os itens do menu
const MenuItem = ({ onClick, label, items }) => {
  const [estaAberto, setEstaAberto] = useState(false);

  const alternarModal = () => {
    setEstaAberto(!estaAberto);
  };

  return (
    <div>
      <button onClick={alternarModal} className="text-gray-700 font-bold py-2 focus:outline-none">
        {label}
      </button>
      {estaAberto &&
        items.map((item) => (
          <div key={item.nome} className="mb-6">
            <Link to={item.caminho} className="text-gray-600 hover:text-gray-900" onClick={onClick}>
              {item.nome}
            </Link>
          </div>
        ))}
    </div>
  );
};

const MenuMobile = ({ aberto, abrirModal, menu }) => {

  const fecharModal = () => {
    abrirModal(false);
  };

  return (
    <>
      <div
        className={`fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 z-40 ${aberto ? 'block' : 'hidden'
          }`}
        onClick={() => abrirModal(false)}
      ></div>
      <div
        className={`fixed left-0 top-0 bottom-0 bg-white w-64 shadow-lg z-50 transform transition-all 
        duration-500 ${aberto ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="p-6">
          <h1 className="text-lg font-bold mb-4">Menu</h1>
          <div className="gap-4 block">
            <MenuItem onClick={fecharModal} label="Medicamentos" items={menu.listaMenuMedicamentos} />
            <MenuItem onClick={fecharModal} label="Farmácia" items={menu.listaMenuFarmacia} />
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuMobile;
