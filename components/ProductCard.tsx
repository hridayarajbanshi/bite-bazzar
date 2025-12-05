import React, { useState } from 'react'
import { ShoppingCart, Heart, Star } from 'lucide-react';
import Link from 'next/link';

export default function ProductCard() {
    const [isFavorite, setIsFavorite] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    return (
        <>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
            
                * {
                    font-family: 'Poppins', sans-serif;
                }

                @keyframes pulse {
                    0%, 100% { transform: scale(1); }
                    50% { transform: scale(1.05); }
                }
            `}</style>
            
            {/* Add margin to the main card container */}
            <div 
                className="relative bg-white shadow-lg hover:shadow-2xl w-full max-w-xs mx-auto rounded-xl transition-all duration-500"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {/* Image Container */}
                <div className="relative w-full h-48 overflow-hidden rounded-t-lg">
                    {/* Top left tags */}
                    <div className="absolute top-3 left-3 z-10 flex flex-col gap-2">
                        <span className="bg-green-700 text-white text-xs px-3 py-1 rounded-full animate-pulse">
                            NEW
                        </span>
                    </div>

                    {/* Favorite button */}
                    <button 
                        onClick={() => setIsFavorite(!isFavorite)}
                        className="absolute top-3 right-3 z-10 bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-all duration-300 hover:scale-110 active:scale-95"
                    >
                        <Heart 
                            className={`w-5 h-5 transition-all duration-300 ${isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-500 hover:text-red-500'}`}
                        />
                    </button>

                    {/* Product Image */}
                    <Link href={"#"} className="block h-full">
                        <img 
                            className={`w-full h-full object-cover transition-all duration-500 ${isHovered ? 'scale-110 cursor-pointer' : 'scale-100'}`}
                            src="https://images.unsplash.com/photo-1657560566744-06d0b69f6647?q=80&w=600&auto=format&fit=crop"
                            alt="Chris Jordan Product" 
                        />
                    </Link>
                </div>

                {/* Content */}
                <div className="p-4">
                    {/* Rating */}
                    <div className="flex items-center gap-1 mb-2">
                        {[...Array(5)].map((_, i) => (
                            <Star 
                                key={i} 
                                className={`w-4 h-4 ${i < 4 ? 'fill-yellow-400 text-yellow-400' : 'fill-gray-200 text-gray-200'}`} 
                            />
                        ))}
                        <span className="text-xs text-slate-500 ml-1">(4.2)</span>
                    </div>

                    {/* Category */}
                    <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded">
                       Product Type
                    </span>

                    {/* Stock Status */}
                    <div className="flex items-center gap-1 mt-2">
                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                        <span className='text-sm'>In Stock (Number)</span>
                    </div>

                    {/* Product Name */}
                    <h3 className="text-lg font-semibold text-slate-800 mt-2 mb-2 transition-colors duration-300">
                        Product Title
                    </h3>

                    {/* Price */}
                    <div className="flex items-center gap-2 mb-4">
                        <span className="text-lg font-semibold text-slate-800">$29.99</span>
                        <span className="text-sm text-slate-400 line-through">$39.99</span>
                    </div>

                    {/* Add to Cart Button */}
                    <button className="flex items-center justify-center gap-2 py-2.5 w-full rounded-lg bg-slate-700 text-white hover:bg-slate-800 transition-all duration-300 cursor-pointer group/btn active:scale-[0.98] overflow-hidden">
                        <ShoppingCart className="w-4 h-4 relative z-10 group-hover/btn:scale-110 group-hover/btn:rotate-12 transition-all duration-300" />
                        <span className="font-semibold relative z-10">Add to Cart</span>
                    </button>
                </div>
            </div>
        </>
    );
}