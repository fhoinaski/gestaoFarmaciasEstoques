import React from 'react';
import { CiLogin } from 'react-icons/ci';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-100 p-4  flex justify-between pl-8 pr-8">
      <div className="flex items-center ">
        <Link to="/"><span className="text-orange-500  font-bold text-xl">My Website</span></Link>
      </div>
      <div className="flex items-center">
        <Link className="text-orange-500  flex items-center mr-4 px-3 py-2 rounded-md bg-white hover:bg-gray-200 focus:outline-none" to="/login">
          <CiLogin className='mr-1' />Login
        </Link>
        <Link  className="px-3 text-orange-500  flex items-center py-2 rounded-md bg-white hover:bg-gray-200 focus:outline-none">
          <CiLogin className='mr-1 rotate-180' />Logout
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;