"use client"
import React from 'react'

const BrandGrid = () => {
  const brands = [
    {
      id: 1,
      name: "Apple",
      logo: "🍎",
      description: "Innovative technology and premium design",
      products: 15,
      color: "from-gray-100 to-gray-200",
      textColor: "text-gray-800"
    },
    {
      id: 2,
      name: "Dell",
      logo: "💻",
      description: "Reliable business and gaming laptops",
      products: 12,
      color: "from-blue-50 to-blue-100",
      textColor: "text-blue-800"
    },
    {
      id: 3,
      name: "HP",
      logo: "⚡",
      description: "Versatile laptops for every need",
      products: 18,
      color: "from-purple-50 to-purple-100",
      textColor: "text-purple-800"
    },
    {
      id: 4,
      name: "Lenovo",
      logo: "💼",
      description: "Business excellence and innovation",
      products: 14,
      color: "from-red-50 to-red-100",
      textColor: "text-red-800"
    },
    {
      id: 5,
      name: "ASUS",
      logo: "🎮",
      description: "Gaming and performance focused",
      products: 16,
      color: "from-orange-50 to-orange-100",
      textColor: "text-orange-800"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      {/* Header */}
      <div className=" mb-12">
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
          Popular Brands
        </h2>
       
      </div>

      {/* Brands Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {brands.map((brand) => (
          <div
            key={brand.id}
            className={`group relative bg-${brand.logo}  rounded-full shadow-lg hover:shadow-2xl transition-all duration-500 ease-out transform  hover:-translate-y-2 border border-gray-100 hover:cursor-pointer overflow-hidden`}
          >
            {/* Background Gradient */}
            <div className={`absolute inset-0 bg-gradient-to-br ${brand.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
            
            {/* Shine Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            
            {/* Content */}
            <div className="relative z-10 p-6">
              {/* Logo */}
              <div className="flex items-center justify-between mb-4">
              </div>
              {/* Brand Name */}
              <h3 className={`text-xl font-bold mb-2 transition-colors text-center duration-300 group-hover:${brand.textColor}`}>
                {brand.name}
              </h3>

            </div>

            {/* Hover Border Effect */}
            <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-padding opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10">
              <div className="absolute inset-[2px] rounded-2xl bg-white" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BrandGrid;