'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProductCard from './ProductCard';
// Product data interface
interface Product {
  id: number;
  name: string;
  type: 'laptops' | 'headphones' | 'cameras' | 'smartwatch' | 'smartphones' | 'airbuds';
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  isNew?: boolean;
  discount?: number;
}


const sampleProducts: Product[] = [
  // Laptops
  { id: 1, name: 'MacBook Pro 16"', type: 'laptops', price: 2399, originalPrice: 2599, image: '/api/placeholder/300/300', rating: 4.8, isNew: true },
  { id: 2, name: 'Dell XPS 15', type: 'laptops', price: 1699, image: '/api/placeholder/300/300', rating: 4.6 },
  { id: 3, name: 'HP Spectre x360', type: 'laptops', price: 1299, originalPrice: 1499, image: '/api/placeholder/300/300', rating: 4.5, discount: 13 },
  
  // Headphones
  { id: 4, name: 'Sony WH-1000XM5', type: 'headphones', price: 399, image: '/api/placeholder/300/300', rating: 4.9, isNew: true },
  { id: 5, name: 'Bose QuietComfort 45', type: 'headphones', price: 329, image: '/api/placeholder/300/300', rating: 4.7 },
  { id: 6, name: 'Apple AirPods Max', type: 'headphones', price: 549, originalPrice: 599, image: '/api/placeholder/300/300', rating: 4.6, discount: 8 },
  
  // Cameras
  { id: 7, name: 'Canon EOS R6 Mark II', type: 'cameras', price: 2499, image: '/api/placeholder/300/300', rating: 4.8 },
  { id: 8, name: 'Sony A7 IV', type: 'cameras', price: 2699, originalPrice: 2999, image: '/api/placeholder/300/300', rating: 4.9, discount: 10 },
  { id: 9, name: 'Nikon Z6 II', type: 'cameras', price: 1999, image: '/api/placeholder/300/300', rating: 4.7, isNew: true },
  
  // Smartwatches
  { id: 10, name: 'Apple Watch Ultra 2', type: 'smartwatch', price: 799, image: '/api/placeholder/300/300', rating: 4.8 },
  { id: 11, name: 'Samsung Galaxy Watch 6', type: 'smartwatch', price: 349, originalPrice: 399, image: '/api/placeholder/300/300', rating: 4.6, discount: 12 },
  { id: 12, name: 'Garmin Fenix 7', type: 'smartwatch', price: 699, image: '/api/placeholder/300/300', rating: 4.7, isNew: true },
  
  // Smartphones
  { id: 13, name: 'iPhone 15 Pro Max', type: 'smartphones', price: 1199, image: '/api/placeholder/300/300', rating: 4.9, isNew: true },
  { id: 14, name: 'Samsung Galaxy S23 Ultra', type: 'smartphones', price: 1199, originalPrice: 1299, image: '/api/placeholder/300/300', rating: 4.8, discount: 8 },
  { id: 15, name: 'Google Pixel 8 Pro', type: 'smartphones', price: 999, image: '/api/placeholder/300/300', rating: 4.7 },
  
  // Airbuds
  { id: 16, name: 'AirPods Pro (2nd Gen)', type: 'airbuds', price: 249, image: '/api/placeholder/300/300', rating: 4.8 },
  { id: 17, name: 'Sony WF-1000XM5', type: 'airbuds', price: 299, originalPrice: 349, image: '/api/placeholder/300/300', rating: 4.9, discount: 14 },
  { id: 18, name: 'Samsung Galaxy Buds2 Pro', type: 'airbuds', price: 229, image: '/api/placeholder/300/300', rating: 4.6, isNew: true },
];


const productTypes = [
  { id: 'all', label: 'All Products', icon: '📱' },
  { id: 'laptops', label: 'Laptops', icon: '💻' },
  { id: 'headphones', label: 'Headphones', icon: '🎧' },
  { id: 'cameras', label: 'Cameras', icon: '📷' },
  { id: 'smartwatch', label: 'Smartwatch', icon: '⌚' },
  { id: 'smartphones', label: 'Smartphones', icon: '📱' },
  { id: 'airbuds', label: 'Airbuds', icon: '🎵' },
];



// Main ProductGrid component
const ProductGrid = () => {
  const [selectedType, setSelectedType] = useState<string>('all');
  const [visibleProducts, setVisibleProducts] = useState<number>(6);

  // Filter products based on selected type
  const filteredProducts = selectedType === 'all' 
    ? sampleProducts 
    : sampleProducts.filter(product => product.type === selectedType);

  return (
    <div className=" mx-auto py-10">
      <div className="mx-auto">
          <div className="flex flex-wrap  gap-6 p-2">
            {productTypes.map((type) => (
              <label
                key={type.id}
                className={`flex items-center gap-2 px-5 py-3 rounded-lg cursor-pointer transition-all duration-300 ${
                  selectedType === type.id
                    ? 'bg-text-white shadow-lg  border-2 text-green-600'
            
                    : 'bg-slate-700 text-white border-2 border-slate-300  hover:bg-text-white hover:shadow-md'
                }`}
              >
                <input
                  type="radio"
                  name="productType"
                  value={type.id}
                  checked={selectedType === type.id}
                  onChange={(e) => {
                    setSelectedType(e.target.value);
                    setVisibleProducts(6);
                  }}
                  className="sr-only" 
                />
                
                <span className="">{type.label}</span>
              </label>
            ))}
          </div>
        </div>
    
        {/* Product grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mt-8">
          {
            filteredProducts.slice(0, visibleProducts).map((product) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: product.id * 0.05 }}
              >
                <ProductCard />
              </motion.div>
            ))
          }
        </div>
        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
          
            <h3 className="text-2xl font-bold text-gray-900 mb-2">No products found</h3>
            <p className="text-gray-600">Try selecting a different category</p>
          </div>
        )}
    </div>
  );
};

export default ProductGrid;