'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

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

// Sample product data
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

// Product type configuration
const productTypes = [
  { id: 'all', label: 'All Products', icon: '📱' },
  { id: 'laptops', label: 'Laptops', icon: '💻' },
  { id: 'headphones', label: 'Headphones', icon: '🎧' },
  { id: 'cameras', label: 'Cameras', icon: '📷' },
  { id: 'smartwatch', label: 'Smartwatch', icon: '⌚' },
  { id: 'smartphones', label: 'Smartphones', icon: '📱' },
  { id: 'airbuds', label: 'Airbuds', icon: '🎵' },
];

// Star rating component
const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, i) => (
        <span
          key={i}
          className={`text-lg ${
            i < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'
          }`}
        >
          ★
        </span>
      ))}
      <span className="ml-1 text-sm text-gray-600">({rating.toFixed(1)})</span>
    </div>
  );
};

// Product card component
const ProductCard = ({ product }: { product: Product }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
    >
      {/* Discount badge */}
      {product.discount && (
        <div className="absolute top-3 left-3 z-10 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
          -{product.discount}%
        </div>
      )}
      
      {/* New badge */}
      {product.isNew && (
        <div className="absolute top-3 right-3 z-10 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">
          NEW
        </div>
      )}

      {/* Product image */}
      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="w-full h-full flex items-center justify-center p-4">
          <div className="w-40 h-40 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 flex items-center justify-center">
            <span className="text-4xl">
              {product.type === 'laptops' && '💻'}
              {product.type === 'headphones' && '🎧'}
              {product.type === 'cameras' && '📷'}
              {product.type === 'smartwatch' && '⌚'}
              {product.type === 'smartphones' && '📱'}
              {product.type === 'airbuds' && '🎵'}
            </span>
          </div>
        </div>
        <div className="absolute inset-0 bg-black/5 group-hover:bg-black/10 transition-colors duration-300" />
      </div>

      {/* Product info */}
      <div className="p-5">
        {/* Product type badge */}
        <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-blue-50 text-blue-600 mb-2">
          {product.type.charAt(0).toUpperCase() + product.type.slice(1)}
        </span>
        
        {/* Product name */}
        <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-1 group-hover:text-blue-600 transition-colors">
          {product.name}
        </h3>
        
        {/* Rating */}
        <StarRating rating={product.rating} />
        
        {/* Price */}
        <div className="mt-3 flex items-center gap-2">
          <span className="text-2xl font-bold text-gray-900">
            ${product.price.toLocaleString()}
          </span>
          {product.originalPrice && (
            <span className="text-lg text-gray-500 line-through">
              ${product.originalPrice.toLocaleString()}
            </span>
          )}
        </div>

        {/* Action button */}
        <button className="mt-4 w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:-translate-y-0.5 active:scale-95">
          Add to Cart
        </button>
      </div>
    </motion.div>
  );
};

// Main ProductGrid component
const ProductGrid = () => {
  const [selectedType, setSelectedType] = useState<string>('all');
  const [visibleProducts, setVisibleProducts] = useState<number>(6);

  // Filter products based on selected type
  const filteredProducts = selectedType === 'all' 
    ? sampleProducts 
    : sampleProducts.filter(product => product.type === selectedType);

  // Load more products
  const loadMore = () => {
    setVisibleProducts(prev => Math.min(prev + 6, filteredProducts.length));
  };

  return (
    <div className="px-2 py-4">
      <div className="mx-auto">
          <div className="flex flex-wrap  gap-6 p-2">
            {productTypes.map((type) => (
              <label
                key={type.id}
                className={`flex items-center gap-2 px-5 py-3 rounded-xl cursor-pointer transition-all duration-300 ${
                  selectedType === type.id
                    ? 'bg-text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
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
                  className="sr-only" // Hide the actual radio button
                />
                
                <span className="">{type.label}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Product count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing <span className="font-bold text-blue-600">{Math.min(visibleProducts, filteredProducts.length)}</span> of{' '}
            <span className="font-bold text-gray-900">{filteredProducts.length}</span> products
          </p>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredProducts.slice(0, visibleProducts).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Load more button */}
        {visibleProducts < filteredProducts.length && (
          <div className="mt-12 text-center">
            <button
              onClick={loadMore}
              className="px-8 py-3 bg-white border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 hover:border-blue-700 hover:text-blue-700 transition-all duration-300 transform hover:-translate-y-0.5 active:scale-95"
            >
              Load More Products
            </button>
          </div>
        )}

        {/* Empty state */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">😕</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">No products found</h3>
            <p className="text-gray-600">Try selecting a different category</p>
          </div>
        )}
    </div>
  );
};

export default ProductGrid;