import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Tabs from "@/components/Tabs";
import Hero from "@/components/Hero";
import ProductList from "@/components/ProductList";
// import { Carousel } from "@/components/ui/carousel";
export default function Home() {
  return (
    <div>
      <Navbar/>
      <Tabs/>
      <Hero/>
      <div className=" mx-auto  px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <h2 className="text-2xl font-semibold text-gray-900  mb-8">Best Selling</h2>
     
      <ProductList/>
      </div>
      {/* <Carousel/> */}
      <Footer/>
      
    </div>
  );
}
