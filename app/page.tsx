import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Tabs from "@/components/Tabs";
import Hero from "@/components/Hero";
import ProductList from "@/components/ProductList";
import CatogoryList from "@/components/CatogoryList";
// import { Carousel } from "@/components/ui/carousel";
export default function Home() {
  return (
    <div>
      <Navbar/>
      <Tabs/>
      <Hero/>
      <div className=" mx-auto  px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
      <h2 className="text-2xl font-semibold text-gray-900  mb-8">Popular Categories</h2>
      <CatogoryList/>

        <h2 className="text-2xl font-semibold text-gray-900  mb-8">Best Selling</h2>
     
      <ProductList/>

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
      {/* <Carousel/> */}
      <Footer/>
      
    </div>
  );
}
