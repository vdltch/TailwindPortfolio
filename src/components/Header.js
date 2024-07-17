import React from 'react';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white py-6 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-extrabold">Mon Portfolio</h1>
        <nav>
          <ul className="flex space-x-8">
            <li><a href="#about" className="hover:text-gray-200 transition duration-300">À propos</a></li>
            <li><a href="#projects" className="hover:text-gray-200 transition duration-300">Projets</a></li>
            <li><a href="#contact" className="hover:text-gray-200 transition duration-300">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
