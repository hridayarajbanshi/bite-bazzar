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
  const names = ["Momo", "Selroti", "Pakora", "Shapale", "Samosa", "Aloo Chop"];
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
              <Link href={`/products/${names[index]}`
              } className="block w-full h-full">
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
                     {names[index]}
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
      <section className="bg-gray-100 mb-8">
  <div className="p-8 md:p-12 lg:px-16 lg:py-24">
    <div className="mx-auto max-w-lg text-center">
      <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
      Join the mailing list
      </h2>

      <p className="hidden text-gray-500 sm:mt-4 sm:block">
      Why? Because we send out exclusive email offers, such as free gifts, free shipping & more! Plus, you will be the first to be notified of delicious new arrivals!

</p>
    </div>

    <div className="mx-auto mt-8 max-w-xl">
      <form action="#" className="sm:flex sm:gap-4">
        <div className="sm:flex-1">
          <label htmlFor="email" className="sr-only">Email</label>

          <input
            type="email"
            placeholder="Email address"
            className="w-full rounded-md border-gray-200 bg-white p-3 text-gray-700 shadow-xs transition focus:border-white focus:ring-3 focus:ring-yellow-400 focus:outline-hidden"
          />
        </div>

        <button
          type="submit"
          className="group mt-4 flex w-full items-center justify-center gap-2 rounded-md bg-rose-600 px-5 py-3 text-white transition focus:ring-3 focus:ring-yellow-400 focus:outline-hidden sm:mt-0 sm:w-auto"
        >
          <span className="text-sm font-medium"> Subscribe </span>

          <svg
            className="size-5 rtl:rotate-180"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </button>
      </form>
    </div>
  </div>
</section>
      <Footer />
    </>
  );
};

export default Page;
