"use client"
import React from 'react'
import { useState } from 'react'
import Link from 'next/link'
// Define the Techcart logo component as a function (optional but cleaner)
// I am using the concepts from the logo you generated earlier (Tech circuit board design)
const TechcartLogo = ({ color = 'text-black', size = 'text-2xl' }) => (
    <div className={`flex items-center gap-1 font-sans font-bold ${size}`}>
        <span className={`circuit-text ${color}`}>Tech</span>
        <span className="text-[#60a785]">cart</span>
        <style jsx>{`
            .circuit-text {
                /* Simulating the circuit-board look with a subtle shadow/texture */
                letter-spacing: -0.5px;
                text-shadow: 1px 1px 0px rgba(0, 0, 0, 0.1);
            }
        `}</style>
    </div>
);

// Cart SVG (with the new color)
const CartIcon = ({ strokeColor = '#60a785', count = 3 }) => (
    <div className="relative cursor-pointer">
        <svg width="20" height="18" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path 
                d="M.583.583h2.333l1.564 7.81a1.17 1.17 0 0 0 1.166.94h5.67a1.17 1.17 0 0 0 1.167-.94l.933-4.893H3.5m2.333 8.75a.583.583 0 1 1-1.167 0 .583.583 0 0 1 1.167 0m6.417 0a.583.583 0 1 1-1.167 0 .583.583 0 0 1 1.167 0" 
                stroke={strokeColor} 
                strokeWidth="1" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
            />
        </svg>
        {/* Cart Item Count */}
        <div className="absolute -top-2 -right-3 text-xs text-white bg-[#60a785] w-[18px] h-[18px] rounded-full flex items-center justify-center font-medium">
            {count}
        </div>
    </div>
);


export default function Navbar() {
    const [open, setOpen] = useState(false);
    
    // Custom utility class for the primary brand color (#60a785)
    // In a real Tailwind setup, you'd add this to your tailwind.config.js
    const techGreenClasses = 'bg-[#60a785] hover:bg-[#4a8467]'; // Added a slightly darker hover state

    return (
        <nav className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-gray-200 bg-white relative transition-all">

            {/* Logo */}
            <Link href={'/'} aria-label="Techcart Home" className="flex items-center gap-2">
                <TechcartLogo />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden sm:flex items-center gap-8">

                {/* Search Bar */}
                <div className="hidden lg:flex items-center text-sm gap-2 border border-gray-300 px-3 rounded-full">
                    <input className="py-1.5 w-full bg-transparent outline-none placeholder-gray-500" type="text" placeholder="Search products" />
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.836 10.615 15 14.695" stroke="#7A7B7D" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                        <path clipRule="evenodd" d="M9.141 11.738c2.729-1.136 4.001-4.224 2.841-6.898S7.67.921 4.942 2.057C2.211 3.193.94 6.281 2.1 8.955s4.312 3.92 7.041 2.783" stroke="#7A7B7D" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>

                {/* Navigation Links */}
                <Link href={'/'} className="text-md text-gray-700 hover:text-[#60a785] transition font-medium">Home</Link>  
                <Link href={'/shop'} className="text-md text-gray-700 hover:text-[#60a785] transition font-medium">Shop</Link>
                
                {/* Cart Icon */}
               <Link href={'/cart'}>  <CartIcon count={3} /></Link>

                {/* Login Button */}
                <button className={`cursor-pointer px-8 py-2 ${techGreenClasses} transition text-white rounded-full font-medium`}>
                  <Link href={'/login'} >Login</Link>
                </button>
            </div>

            <button 
                onClick={() => setOpen(!open)} 
                aria-label="Toggle Menu" 
                className="sm:hidden z-10 p-1" 
            >
               
                <svg width="21" height="15" viewBox="0 0 21 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="21" height="1.5" rx=".75" fill="black" />
                    <rect x="8" y="6" width="13" height="1.5" rx=".75" fill="black" />
                    <rect x="6" y="13" width="15" height="1.5" rx=".75" fill="black" />
                </svg>
            </button>

            {/* Mobile Menu Panel */}
            <div className={`${open ? 'flex' : 'hidden'} absolute top-full left-0 w-full bg-white shadow-lg py-4 flex-col items-start gap-3 px-6 text-sm sm:hidden z-20`}>
                
                {/* Mobile Links */}
                <a href="#" className="block py-1 text-gray-800 hover:text-[#60a785]">Home</a>
                <a href="#" className="block py-1 text-gray-800 hover:text-[#60a785]">Shop</a>
                <a href="#" className="block py-1 text-gray-800 hover:text-[#60a785]">Cart (3)</a>
                {/* Mobile Login Button */}
                <button className={`cursor-pointer w-full mt-4 px-6 py-2 ${techGreenClasses} transition text-white rounded-lg text-sm font-medium`}>
               <Link href={'/login'}>Login</Link>
                   
                </button>
            </div>

        </nav>
    )
}