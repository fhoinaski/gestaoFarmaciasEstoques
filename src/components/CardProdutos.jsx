import { useState } from "react";
import { MdExpandMore } from 'react-icons/md';


const CardProdutos = ({ title, description, onClick }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  // gira o card
  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="w-2/3 sm:w-10/12 items-center justify-center flex flex-wrap max-w-sm rounded overflow-hidden text-center shadow-lg my-1">
      <div className="flex justify-center mt-2 w-full"><img className="w-20" src="/remedio.png" alt="product" /></div>
      <div
        className={`relative w-72  bg-white rounded-xl shadow-lg transition-all duration-700 ease-in-out`}
        style={{
          transformStyle: 'preserve-3d',
          perspective: '1000px',
          transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
        }}
        onClick={handleClick}
      >
        <div className="px-0 mx-auto py-4 w-full  rounded-xl bg-gray-50 ">
          <div className="font-bold text-sm mb-2">{title}</div>
          <p className="text-gray-700 text-base">
            {description}
          </p>
          <div
            className="justify-end  flex items-center mx-auto h-5"
            onClick={onClick}
          >
            <span className="flex items-center cursor-pointer bg-gray-100 px-2 rounded-xl -mb-4  hover:bg-slate-200 " >Ver detalhes <MdExpandMore className="ml-2" /></span>
          </div>

        </div>
        <div
          className={`absolute top-0 left-0 w-full h-full bg-gray-50 rounded-xl z-10  ${isFlipped ? 'opacity-100 ' : 'opacity-0 '} transition-opacity duration-1000`}
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          <div className="p-0">
            <h2 className="text-xl font-bold mb-2">Back Side</h2>
            <p className="text-orange-700">
              Nunc laoreet nulla id magna pellentesque, eu pulvinar nisi iaculis. Vivamus dapibus

            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardProdutos;
