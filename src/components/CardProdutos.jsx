import { useState } from "react";
import { IoReturnDownForwardOutline } from "react-icons/io5";


const CardProdutos = ({ produtoInfo, onClick }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [tamanhoCard, setTamanhoCard] = useState("h-40");
  // gira o card
  const handleClick = () => {
    setIsFlipped(!isFlipped);

      //aumenta o tamanho do cor se tiver muitos caracteres
      if (!isFlipped && produtoInfo.descricaoMedicamento.length > 100) {
        setTamanhoCard("h-60");
      } else {
        setTamanhoCard("h-40");
      }
    };



  return (
    <div className="w-2/3 sm:w-10/12 items-center justify-center flex flex-wrap max-w-sm rounded overflow-hidden text-center shadow-lg my-1">
      <div className="flex justify-center mt-2 w-full"><img className="w-20" src="/remedio.png" alt="product" /></div>
      <div
      className={`relative w-full ${tamanhoCard}  bg-red-400 rounded-xl shadow-lg transition-all duration-700 ease-in-out`}
      style={{
        transformStyle: "preserve-3d",
        perspective: "1000px",
        transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
      }}
      onClick={handleClick}
    >
        <div className="mx-auto flex gap-2 flex-col w-full h-full p-4  rounded-xl bg-gray-200 ">
          <p className="font-semibold text-orange-600 text-base h-auto ">{produtoInfo.nomeMedicamento}</p>
          <p className="text-gray-700 text-sm">
            {produtoInfo.nomeLaboratorio}
          </p>
          <p className="text-orange-700 font-semibold text-base">
            {produtoInfo.precoUnitario}
          </p>
          <div
            className=" absolute bottom-1 right-1 items-center "
            onClick={onClick}
          >
            <span className="flex ml-28 items-center w-28 cursor-pointer bg-gray-100 px-2 rounded-xl text-xs  hover:bg-gray-300 hover:text-orange-800 " >Ver detalhes <IoReturnDownForwardOutline className="ml-2" /></span>
          </div>

        </div>
        <div
  className={`absolute top-0 left-0 w-full h-full bg-gray-50 rounded-xl z-10  ${isFlipped ? 'opacity-100 ' : 'opacity-0 '} transition-opacity duration-1000`}
  style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
>
  <div className="flex flex-col h-full justify-center px-2 items-center">
  <p className="text-orange-700 text-xs">
      Descrição 
      <br/>
      <span className="text-gray-700">{produtoInfo.descricaoMedicamento}</span>
    </p>
    <p className="text-orange-700 text-xs mt-3">
      Dosagem Medicamento 
      <br/>
      <span className="text-gray-700 ">{produtoInfo.dosagemMedicamento}</span>
    </p>
  </div>
</div>

      </div>
    </div>
  );
};

export default CardProdutos;
