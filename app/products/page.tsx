"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import Tabs from "@/components/Tabs";
import Footer from "@/components/Footer";
import Link from "next/link";
import { motion } from "framer-motion";

const Page = () => {
  const imgs = ["momos-snacks-street-foods-nepal.jpg", "nepal-sel-roti-street-foods.jpg", "snacks-street-foods-pakora-nepal.jpg","street-foods-snacks-nepal-shapale.jpg","samosa-snacks-street-foods-nepal.jpg" , "aloo-chop-street-foods-nepal.jpg"
    
  ];
  return (
    <>
      <Navbar />
      <Tabs />

      <nav
        aria-label="Breadcrumb navigation"
        className="container mx-auto px-4 sm:px-6 lg:px-8 py-4"
      >
        <ol className="flex items-center gap-1 text-md text-gray-600">
          <li>
            <Link href="/" className="block transition hover:text-gray-700">
              <span className="sr-only"> Home </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
            </Link>
          </li>
          <li className="rtl:rotate-180">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </li>
          <li>
            <Link href="/products" className="block transition hover:text-gray-700">
              Products
            </Link>
          </li>
        </ol>
      </nav>

      <div className="container mx-auto px-5 py-10">
        <h2 className="text-center text-3xl font-semibold text-black mb-10">
          All Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 200 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 + index * 0.1 }}
              className="relative overflow-hidden shadow-lg group"
            >
              <a href="#" className="block w-full h-full">
                {/* Image with Lowered Opacity */}
                <div className="relative h-80 rounded-md overflow-hidden">
                  <img
                    alt="Product"
                    src={`https://nomadsunveiled.com/wp-content/uploads/2023/09/${imgs[index]}`}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 transform group-hover:scale-110"
                  />
 
                  {/* Centered Text Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20 transition-opacity duration-300 group-hover:bg-opacity-40">
                    <p className="text-xl  text-white sm:text-2xl">
                      Product Title
                    </p>
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Page;
