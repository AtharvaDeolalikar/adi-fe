import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

const Layout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex">
      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />

      <div className="fixed top-0 left-0 p-4 lg:hidden z-50">
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="bg-gray-900 text-white p-3 rounded-lg hover:bg-gray-800 transition-all"
        >
          <i
            className={`fas ${sidebarOpen ? "fa-times" : "fa-bars"} text-xl`}
          ></i>
        </button>
      </div>

      <main className="flex-1 ml-64 bg-gray-50 min-h-screen overflow-y-auto relative">
        <Header />
        {children}
      </main>
    </div>
  );
};

export default Layout;
