import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const ProductList = () => {
  return (
    <div className='w-full mx-auto px-4 py-8 sm:px-6 sm:py-12 lg:px-8'>
      <Carousel className="w-full">
        <CarouselContent className="-ml-1 flex">
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <a href="#" className="group relative block overflow-hidden">
                  <button className="absolute end-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75">
              
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                      />
                    </svg>
                  </button>
                  <img
                    src="https://images.unsplash.com/photo-1628202926206-c63a34b1618f?q=80&w=2574&auto=format&fit=crop"
                    alt="Product"
                    className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
                  />
                  <div className="relative border border-gray-100 bg-white p-6">
                    <p className="text-gray-700">
                      $49.99 
                    </p>
                    <h3 className="mt-1.5 text-lg font-medium text-gray-900">Wireless Headphones</h3>
                    <p className="mt-1.5 line-clamp-3 text-gray-700">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore nobis iure obcaecati pariatur.
                      Officiis qui, enim cupiditate aliquam corporis iste.
                    </p>
                    <form className="mt-4 flex gap-4">
                      <button className="block w-full rounded-sm bg-gray-100 px-4 py-3 text-sm font-medium text-gray-900 transition hover:scale-105">
                        Add to Cart
                      </button>
                      <button type="button" className="block w-full rounded-sm bg-gray-900 px-4 py-3 text-sm font-medium text-white transition hover:scale-105">
                        Buy Now
                      </button>
                    </form>
                  </div>
                </a>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default ProductList;
