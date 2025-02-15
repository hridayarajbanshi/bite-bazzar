import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Tabs from "@/components/Tabs";
import Hero from "@/components/Hero";
// import { Carousel } from "@/components/ui/carousel";
export default function Home() {
  return (
    <div>
      <Navbar/>
      <Tabs/>
      <Hero/>
      {/* <Carousel/> */}
      <Footer/>
      
    </div>
  );
}
