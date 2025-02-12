import React from 'react';
import { ShoppingCart, Search, User } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="bg-teal-600 shadow-md">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-4">
        <span className='text-3xl font-bold'> BITE BAZZAR</span> 
            
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-lg">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search for snacks..."
                className="w-full p-2 pl-10 rounded-sm"
              />
            </div>
            <Search className=" bg-rose-600 right-3 p-2 rounded-sm hover:cursor-pointer focus-visible:border-none  text-white" size={40} />

          </div>

          {/* Icons (Cart & Profile) */}
          <div className="flex items-center gap-6">
            {/* Cart Icon */}
            <button className="relative text-white hover:text-gray-200">
              <ShoppingCart size={24} />
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full px-1">
                3
              </span>
            </button>

            {/* Profile Dropdown */}
            <div className="relative">
              <button
                type="button"
                className="overflow-hidden rounded-full border border-gray-300 shadow-inner"
              >
                <User size={24} className="text-white" />
              </button>

              <div
                className="absolute right-0 z-10 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg"
              >
                <a href="#" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">My Profile</a>
                <a href="#" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Orders</a>
                <button className="block w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100">
                  Logout
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="block md:hidden">
            <button className="text-white">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
