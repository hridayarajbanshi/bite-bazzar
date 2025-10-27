"use client";
import ProductCard from "@/components/ProductCard";
import React, { useState } from "react";

const Page = () => {
  const categories = ["Laptops", "Headphones", "Cameras", "Smart Phones"];
  const [selectedCategories, setSelectedCategories] = useState([]);


  

  return (
    <div className="max-w-7xl mx-auto p-4">
      <h1 className="text-3xl mb-6 text-slate-700 text-center">Shop</h1>
      <hr />

      <div className="flex flex-col md:flex-row gap-8 mt-6">
        {/* Sidebar Filter */}
        <div className="w-full md:w-1/5 bg-white shadow-md rounded-lg p-5 h-fit lg:sticky top-5">
          <h2 className="text-lg font-semibold text-slate-700 mb-4">
            Categories
          </h2>

          <ul className="space-y-3">
            {categories.map((cat) => (
              <li key={cat} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id={cat}
                  checked={selectedCategories.includes(cat)}
                  onChange={() => handleCategoryChange(cat)}
                  className="w-4 h-4 text-[#60a785] border-gray-300 rounded focus:ring-[#60a785]"
                />
                <label
                  htmlFor={cat}
                  className="text-slate-600 hover:text-[#60a785] cursor-pointer select-none"
                >
                  {cat}
                </label>
              </li>
            ))}
          </ul>
        </div>

        {/* Product Grid */}
        <div className="w-full md:w-4/5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5">
        {
          Array.from({ length: 8 }).map((_, index) => (
            <ProductCard key={index} />
          ))
        }
        </div>
      </div>
    </div>
  );

};

export default Page;
