"use client";
import { useState } from "react";
// import CategoryFilter from "@/components/CategoryFilter";
import { motion, AnimatePresence } from "framer-motion";

const dummyProducts = [
  { id: 1, name: "MacBook Pro M3", category: "laptop", price: 1800 },
  { id: 2, name: "iPhone 15", category: "smartphone", price: 1200 },
  { id: 3, name: "Sony WH-1000XM5", category: "headset", price: 350 },
  { id: 4, name: "Canon EOS R7", category: "camera", price: 1500 },
  { id: 5, name: "Dell XPS 13", category: "laptop", price: 1300 },
  { id: 6, name: "Samsung Galaxy S24", category: "smartphone", price: 999 },
];

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  const filtered = selectedCategory
    ? dummyProducts.filter((p) => p.category === selectedCategory)
    : dummyProducts;

  return (
    <div className="flex flex-col md:flex-row gap-8 p-8 bg-gray-50 dark:bg-zinc-950 min-h-screen transition-colors duration-300">
      {/* Sidebar Filter */}
      {/* <CategoryFilter onSelect={(cat) => setSelectedCategory(cat)} /> */}

      {/* Products Grid */}
      <div className="flex-1">
        <h1 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-100">
          {selectedCategory ? selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1) : "All Products"}
        </h1>

        <AnimatePresence>
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((product) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                className="bg-white dark:bg-zinc-900 rounded-2xl shadow-md p-6 hover:shadow-xl transition-all"
              >
                <div className="h-40 bg-gray-200 dark:bg-zinc-800 rounded-xl mb-4"></div>
                <h2 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-100">
                  {product.name}
                </h2>
                <p className="text-gray-600 dark:text-gray-300">${product.price}</p>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
