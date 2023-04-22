
import { BsInfoCircle } from "react-icons/bs";

export const TabelaFarmacia = ({ farmacia, onClick }) => {
    return(
    <tr key={farmacia.cnpj} className="text-xs items-center" >
      <td >{farmacia.razaoSocial}</td>
      <td >{farmacia.bairro}</td>
      <td>{farmacia.telefone}</td>
      <td>
   
          <div className="flex w-full justify-center  " onClick={onClick}>
            <BsInfoCircle className="h-auto w-7 p-1 cursor-pointer border-x  border-orange-500 rounded-full hover:text-orange-700 hover:w-8 " />
            
          </div>
    
      </td>
    </tr>
  );
    }