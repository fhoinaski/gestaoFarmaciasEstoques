export const ListMenuNavbar = ({ nomeMenu, listaItens }) => {
    return (
      <div className="hidden md:block group relative bg-white py-2 px-3 rounded-lg">
        <span className="text-orange-400 font-bold cursor-pointer">{nomeMenu}</span>
        <ul className="absolute left-0 cursor-pointer hidden w-48 group-hover:block bg-white rounded-md shadow-lg py-2">
          {listaItens.map((item) => (
            <li className="hover:bg-gray-100 px-4 py-2">{item}</li>
          ))}
        </ul>
      </div>
    );
  };
  