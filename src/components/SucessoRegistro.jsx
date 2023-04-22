import { useNavigate } from "react-router-dom";

const SucessoRegistro = ({ isOpen, onClose }) => {
    const navigate = useNavigate();
  
    const fecharModalSucesso = () => {
        onClose();
        navigate("/farmacias");
      };
  
    return (
      <div className={isOpen ? "fixed z-50 inset-0 overflow-y-auto" : "hidden"}>
        <div className="flex items-center justify-center min-h-screen">
          <div
            className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
            aria-hidden="true"
          ></div>
          <div className="relative bg-white w-96 p-6 rounded-lg shadow-lg">
            <div className="flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-16 text-green-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 0a10 10 0 100 20 10 10 0 000-20zm3.53 14.582a1.25 1.25 0 01-1.768 1.768l-2.647-2.647-2.646 2.646a1.25 1.25 0 11-1.768-1.768l2.646-2.646-2.646-2.647a1.25 1.25 0 111.768-1.768l2.646 2.647 2.647-2.646a1.25 1.25 0 111.768 1.768l-2.647 2.646 2.647 2.647z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Registrado com Sucesso
              </h3>
              <p className="text-sm text-gray-500">
                Obrigado por se registrar em nossa plataforma.
              </p>
              <button
                className="px-4 py-2 mt-8 rounded-lg bg-orange-500 text-white hover:bg-orange-600"
                onClick={fecharModalSucesso}
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default SucessoRegistro;