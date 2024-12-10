import React from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = ({ isOpen, setIsOpen }) => {
  const location = useLocation();

  const navItems = [
    { path: "/overview", icon: "fa-home", label: "Overview" },
    { path: "/research", icon: "fa-microscope", label: "Research" },
    { path: "/analytics", icon: "fa-chart-line", label: "Analytics" },
    { path: "/recognition", icon: "fa-award", label: "Recognition" },
    { path: "/collaboration", icon: "fa-users", label: "Collaborate" },
    { path: "/reports", icon: "fa-file-alt", label: "Reports" },
  ];

  return (
    <nav
      className={`fixed h-screen w-64 bg-gray-900 text-white flex flex-col py-6 transition-all duration-300 ${
        !isOpen && "lg:translate-x-0 -translate-x-full"
      }`}
    >
      <div className="px-6 mb-8">
        <h1 className="text-2xl font-heading font-bold">InnoTrack</h1>
      </div>

      <div className="flex-1">
        <ul className="space-y-2 px-4">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`flex items-center px-4 py-3 rounded-lg transition-all ${
                  location.pathname === item.path
                    ? "bg-primary-600 text-white"
                    : "hover:bg-gray-800"
                }`}
              >
                <i className={`fas ${item.icon} w-5`}></i>
                <span className="ml-3">{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="px-6">
        <div className="flex items-center p-4 border-t border-gray-700">
          <img
            src="https://placehold.co/40x40"
            alt="Profile"
            className="rounded-full w-10 h-10"
          />
          <div className="ml-3">
            <p className="text-sm font-medium">Admin User</p>
            <p className="text-xs text-gray-400">admin@innotrack.com</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
