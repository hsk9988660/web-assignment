// src/components/Layout/Header.tsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  // Handle logout
  const handleLogout = () => {
    // Here, you would add your logout logic, like clearing the token or user data
    console.log('User logged out');
    navigate('/login');
  };

  return (
    <header className="flex justify-between items-center p-4 bg-blue-600 text-white shadow-md">
      {/* Left side: Logo and Title */}
      <div className="flex items-center space-x-4 sm:space-x-6">
        <img src="/assets/logo.png" alt="Logo" className="h-8 sm:h-10" />
        <h1 className="text-2xl sm:text-3xl font-semibold">My Application</h1>
      </div>

      {/* Right side: Username and dropdown */}
      <div className="relative">
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="flex items-center space-x-2 bg-blue-500 rounded-full px-4 py-2 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
        >
          <div className="w-8 h-8 bg-gray-500 text-white flex items-center justify-center rounded-full">
            <span className="text-lg font-bold">A</span> {/* Placeholder for the user's initial */}
          </div>
          <span className="hidden sm:block">Username</span> {/* Show username on larger screens */}
        </button>

        {/* Dropdown Menu */}
        {isDropdownOpen && (
          <div className="absolute right-0 mt-2 w-40 bg-white text-gray-700 shadow-lg rounded-lg">
            <ul>
              <li>
                <button
                  onClick={() => navigate('/settings')}
                  className="block px-4 py-2 text-sm hover:bg-gray-100 w-full text-left"
                >
                  Settings
                </button>
              </li>
              <li>
                <button
                  onClick={handleLogout}
                  className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 w-full text-left"
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
