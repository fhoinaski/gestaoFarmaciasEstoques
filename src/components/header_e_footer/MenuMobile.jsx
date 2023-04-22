import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {MdOutlineKeyboardArrowDown,MdOutlineKeyboardArrowUp} from 'react-icons/md';
  import {CiLogout} from 'react-icons/ci';
import { useAuthState } from '../../contexts/userContext/useAuth';
import {AiOutlineClose} from 'react-icons/ai';


//função para controlar os itens do menu
const MenuItem = ({ onClick, label, items }) => {
  const [estaAberto, setEstaAberto] = useState(false);
   

  const alternarModal = () => {
    setEstaAberto(!estaAberto);
  };

  return (
    <div>
      <button onClick={alternarModal} className="text-orange-500 mb-2 flex items-center  text-lg font-bold py-2 focus:outline-none">
        {label}{estaAberto ? <MdOutlineKeyboardArrowUp className="ml-2" /> : <MdOutlineKeyboardArrowDown className="ml-2" />}
      </button>
      {estaAberto &&
        items.map((item) => (
          <div key={item.nome} className="mb-3">
            <Link to={item.caminho} className="text-orange-500 hover:text-orange-600" onClick={onClick}>
              {item.nome}
            </Link>
          </div>
        ))}
    </div>
  );
};

const MenuMobile = ({ aberto, abrirModal, menu }) => {

  const {logoutUser } = useAuthState();
  
  const fecharModal = () => {
    abrirModal(false);
  };
  const sairFecharModal = () => {
    abrirModal(false);
    logoutUser();
  };

  return (
    <>
      <div
        className={`fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 z-40 ${aberto ? 'block' : 'hidden'
          }`}
        onClick={() => abrirModal(false)}
      ></div>
      <div
        className={`fixed left-0 top-0 bottom-1/3 bg-white w-full shadow-lg z-50 transform transition-all 
        duration-500 ${aberto ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className='flex w-full justify-end p-2 '>
          <AiOutlineClose  onClick={fecharModal} className='cursor-pointer hover:text-orange-600 w-6 h-6 m-2 absolute'/>
        </div>
        <div className="p-6">
          <h1 className="text-lg font-bold mb-4">Menu</h1>
          <div className="gap-4 block">
            <MenuItem onClick={fecharModal} label="Medicamentos" items={menu.listaMenuMedicamentos}/>
            <MenuItem onClick={fecharModal} label="Farmácia" items={menu.listaMenuFarmacia} />
            <div>
              <Link to="/login" className="text-orange-500 absolute bottom-10 flex items-center hover:text-orange-600" onClick={sairFecharModal}>
              <CiLogout/> Logout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuMobile;
