import React from 'react';

const Carregando = () => {
  return (
    <div className="flex items-center justify-center h-auto">
      <div>
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-orange-700">
          <div className="animate-ping rounded-full h-32 w-32 border-t-2 border-b-2 border-orange-700"></div>
        </div>
        <div className='mt-6'>
          <span className="text-2xl font-bold text-orange-700">Carregando...</span>
        </div>
      </div>

    </div>
  );
};

export default Carregando;