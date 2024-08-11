
import React, { useState } from 'react';

const MainMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav>
        <ul className="hidden md:flex space-x-4">
          <li><a href="#">Home</a></li>
          <li><a href="#">Products</a></li>
          <li><a href="#">Blog</a></li>
          <li className="relative">
            <a href="#" onClick={toggleDropdown}>About</a>
            
            <ul className={`absolute ${isOpen ? 'grid' : 'hidden'} grid-rows-2 space-y-2 bg-white text-black shadow-md p-2 top-10 right-3 rounded-lg`}>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Management</a></li>
              <li><a href="#">Vision</a></li>
              <li><a href="#">Career</a></li>
            </ul>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default MainMenu;
