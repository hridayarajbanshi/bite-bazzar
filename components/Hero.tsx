import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Hero = () => {
  return (
    <div className="bg-gray-100 h-auto  mx-auto flex flex-col justify-center items-center">
      <div className="relative w-full  overflow-hidden">
        <Carousel>
          <CarouselContent className="flex">
            <CarouselItem className="w-full h-96 flex justify-center items-center  text-white text-2xl font-bold rounded-lg shadow-lg">
             <img src="https://i.shgcdn.com/82c94020-a20f-4512-9603-ca0d187cfc4a/-/format/auto/-/preview/3000x3000/-/quality/lighter/" alt="hero" className="w-full h-full object-contain" />
            </CarouselItem>
            <CarouselItem className="w-full h-96 flex justify-center items-center  text-white text-2xl font-bold rounded-lg shadow-lg">
            <img src="https://smartcanucks.ca/wp-content/uploads/2018/11/blog-16.jpg" alt="hero" className="w-full h-full object-contain" />
            </CarouselItem>
            <CarouselItem className="w-full h-96 flex justify-center items-center  text-white text-2xl font-bold rounded-lg shadow-lg">
             <img src="https://cdn.dribbble.com/userupload/15289456/file/still-d38e9b41af462b7be479ea6fdf3c626f.png?resize=400x0" alt="hero" className="w-full h-full object-contain" />
            </CarouselItem>
          </CarouselContent>

          {/* Previous Button */}
          <CarouselPrevious className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-200">
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </CarouselPrevious>

          {/* Next Button */}
          <CarouselNext className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-200">
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </CarouselNext>
        </Carousel>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
  <div className="mx-auto max-w-3xl text-center">
    <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Trusted by eCommerce Businesses</h2>

    <p className="mt-4 text-gray-500 sm:text-xl">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione dolores laborum labore
      provident impedit esse recusandae facere libero harum sequi.
    </p>
  </div>

  <dl className="mt-6 grid grid-cols-1 gap-4 sm:mt-8 sm:grid-cols-2 lg:grid-cols-4">
    <div className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center">
      <dt className="order-last text-lg font-medium text-gray-500">Total Sales</dt>

      <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">$4.8m</dd>
    </div>

    <div className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center">
      <dt className="order-last text-lg font-medium text-gray-500">Official Addons</dt>

      <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">24</dd>
    </div>

    <div className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center">
      <dt className="order-last text-lg font-medium text-gray-500">Total Addons</dt>

      <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">86</dd>
    </div>

    <div className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center">
      <dt className="order-last text-lg font-medium text-gray-500">Downloads</dt>

      <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">86k</dd>
    </div>
  </dl>
</div>
      </div>
      
    </div>
    
    
  );
};

export default Hero;
