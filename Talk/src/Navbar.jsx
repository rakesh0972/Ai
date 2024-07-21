import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
          <div className="text-white text-xl font-bold">Gemini</div>
          <div className="flex space-x-4">
            <a href="#" className="text-white hover:text-gray-300">Home</a>
            <a href="#" className="text-white hover:text-gray-300">Campaigns</a>
            <a href="#" className="text-white hover:text-gray-300">Analytics</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
