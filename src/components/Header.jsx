import React from "react";

const Header = () => {
  return (
    <header className="fixed top-0 right-0 left-64 bg-white border-b border-gray-200 z-40">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center flex-1">
          <div className="relative w-64">
            <input
              type="search"
              placeholder="Search..."
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-primary-500"
            />
            <i className="fas fa-search absolute left-3 top-3 text-gray-400"></i>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <button className="p-2 rounded-lg hover:bg-gray-100 transition-all relative">
            <i className="fas fa-bell text-gray-600"></i>
            <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
          </button>
          <button className="p-2 rounded-lg hover:bg-gray-100 transition-all">
            <i className="fas fa-cog text-gray-600"></i>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
