"use client";
import React, { useState, useEffect, useCallback } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const slides = [
  {
    id: 1,
    image:
      "https://cdn.wccftech.com/wp-content/uploads/2024/10/M4-MacBook-Pro-4-1456x819.jpg",
    title: "Work Smart, Play Hard",
    description: "Powerful laptops for every need. Boost your productivity.",
    buttonText: "Explore Laptops",
    buttonLink: "#",
  },
  {
    id: 2,
    image:
      "https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/d9024151830117.58fb89c4d9a33.jpg",
    title: "Experience Sound Like Never Before",
    description: "Premium headphones for immersive audio experiences.",
    buttonText: "Shop Headphones",
    buttonLink: "#",
  },
  {
    id: 3,
    image:
      "https://tse1.mm.bing.net/th/id/OIP.rtkmb-fRwLhukORIhG0LzAHaDu?cb=12&w=1200&h=604&rs=1&pid=ImgDetMain&o=7&rm=3",
    title: "Capture Every Moment",
    description: "High-resolution cameras for stunning photography.",
    buttonText: "View Cameras",
    buttonLink: "#",
  },
  {
    id: 4,
    image:
      "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/34b5bf180145769.6505ae7623131.jpg",
    title: "Smart Living, Smarter Choices",
    description: "Innovative smart phones for a connected lifestyle.",
    buttonText: "Explore Smart Phones",
    buttonLink: "#",
  },
];

const HeroSlider = ({ autoSlide = true, autoSlideInterval = 5000 }) => {
  const [curr, setCurr] = useState(0);

  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  const next = useCallback(
    () => setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1)),
    []
  );

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, [autoSlide, autoSlideInterval, next]);

  return (
    <section className="relative w-full overflow-hidden h-[450px] md:h-[600px] lg:h-[500px] bg-gray-100">
      <div
        className="flex transition-transform ease-out duration-500 h-full"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {slides.map((s) => (
          <div
            key={s.id}
            className="min-w-full h-full bg-cover bg-center flex items-center justify-start relative"
            style={{ backgroundImage: `url(${s.image})` }}
          >
            {/* Overlay */}
            <div className="absolute inset-0  bg-black/50"></div>

            {/* Text Content */}
            <div className="relative  z-10 text-white max-w-xl px-6 md:px-16 py-8 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg ml-6 md:ml-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 leading-tight drop-shadow-lg">
                {s.title}
              </h2>
              <p className="text-md md:text-lg mb-8 text-gray-200 drop-shadow-sm">
                {s.description}
              </p>
              <a
                href={s.buttonLink}
                className="inline-block px-8 py-3  transition-all duration-100 text-white font-semibold rounded-full shadow-md hover:shadow-lg "
              >
                {s.buttonText}
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
     
    

      {/* Navigation Dots */}
      <div className="absolute bottom-5 left-0 right-0">
        <div className="flex items-center justify-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurr(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`transition-all w-4 h-1 rounded-full ${
                curr === i
                  ? "bg-[#60a785] w-8"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;
