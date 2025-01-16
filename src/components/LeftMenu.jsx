import React, { useState } from 'react';

function LeftMenu({ content, onContentClick }) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleMenu = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={`bg-white-200 p-4 transition-all duration-300 ease-in-out ${isCollapsed ? 'w-12 bg-white' : 'w-1/4 bg-gray-200'} md:w-1/4 `}>
      <button 
        onClick={toggleMenu} 
        className="bg-gray-800 text-white border-none p-2 cursor-pointer mb-4 transition-all duration-300 ease-in-out hover:bg-gray-700">
        {isCollapsed ? '>' : '<'}
      </button>
      <ul className="list-none p-0">
        {content.map((item, index) => (
          <li key={index} className="mb-2">
            <button 
              onClick={() => onContentClick(index)} 
              className={`text-gray-800 no-underline text-2xl pt-2  ${isCollapsed ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300 hover:text-gray-500`}>
              {item.paragraph}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LeftMenu;
