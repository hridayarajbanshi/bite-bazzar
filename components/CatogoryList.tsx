import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const CatogoryList = () => {
  return (
    <div className='w-full mx-auto px-4 py-8 sm:px-6 sm:py-12 lg:px-8'>
      <Carousel className="w-full">
        <CarouselContent className="-ml-1 flex">
          {Array.from({ length: 10 }).map((_, index) => (
            <CarouselItem key={index} className="  m-auto md:basis-1/2 lg:basis-1/4">
                <div className=''>
                    <a href='#' className='group relative overflow-hidden '>
  <img
    src="https://english.makalukhabar.com/wp-content/uploads/2024/06/Yashoda-Foods-LOGO-1024x1024.png"
    alt=""
    className=" h-auto w-60  mx-auto rounded-full border-gray-300 object-contain"
  />

  <div className="p-4  text-center ">
    <strong className="text-xl font-medium text-gray-900"> Aloe Vera </strong>
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

export default CatogoryList;
