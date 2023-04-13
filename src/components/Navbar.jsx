import { CiLogin } from 'react-icons/ci';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useAuthState } from '../contexts/userContext/useAuthHooks';
import { ListMenuNavbar } from './ListMenuNavbar';

//para renderizar o menu  da farmacia e do medicamento
const listaMenuFarmacia = ["Mapa de Farmácias", "Cadastrar Farmácia"];
const listaMenuMedicamentos = ["Medicamentos", "Cadastrar Medicamento"];


const Navbar = () => {
  const { isAuthenticated, logoutUser } = useAuthState();


  const navigate = useNavigate();
  const handleLogout = () => {
    logoutUser();
    navigate('/'); // redireciona para a página inicial
  };

  return (
    <nav className="bg-orange-50 p-4  flex justify-between pl-8 pr-8">
      <div className="flex items-center ">
        <Link to="/"><span className="text-orange-500  font-bold text-xl">My Website</span></Link>
      </div>
      <div className="flex items-center -mr-5">
        {isAuthenticated ? (
          <div className='flex items-center gap-4'>
            <ListMenuNavbar
              nomeMenu="Medicamentos"
              listaItens={listaMenuMedicamentos}
            />
            <ListMenuNavbar
              nomeMenu="Farmácia"
              listaItens={listaMenuFarmacia}
            />

            <div onClick={handleLogout} className="px-3 text-orange-500  flex items-center py-2 cursor-pointer rounded-md bg-white hover:bg-gray-200 focus:outline-none" >
              <CiLogin className='mr-1 rotate-180' />Logout
            </div>
          </div>

        ) : (
          <Link className="text-orange-500  flex items-center mr-4 px-3 py-2 rounded-md bg-white hover:bg-gray-200 focus:outline-none" to="/login">
            <CiLogin className='mr-1' />Login
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
