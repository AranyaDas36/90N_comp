import React, { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex justify-between bg-gray-800 text-white p-4">
      <div className="flex justify-between items-center">
        <a href="#" className="text-4xl font-semibold px-6">Navbar</a>
        <button
          className="text-white focus:outline-none lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
      <div className={`${isOpen ? 'block' : 'hidden'} lg:flex lg:items-center lg:w-auto`}>
        <ul className="list-none px-5 mt-4 lg:flex lg:mt-0">
          <li className="nav-item active lg:ml-4 px-5">
            <a href="#" className="nav-link transition transform hover:text-gray-500 hover:scale-110">Home</a>
          </li>
          <li className="nav-item lg:ml-4 px-5">
            <a href="#" className="nav-link transition transform hover:text-gray-500 hover:scale-110">Features</a>
          </li>
          <li className="nav-item lg:ml-4 px-5">
            <a href="#" className="nav-link transition transform hover:text-gray-500 hover:scale-110">Pricing</a>
          </li>
          <li className="nav-item lg:ml-4 px-5">
            <a href="#" className="nav-link transition transform hover:text-gray-500 hover:scale-110 disabled:opacity-50" aria-disabled="true">Disabled</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
