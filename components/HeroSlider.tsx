"use client"
import React, { useState, useEffect, useCallback } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // For slider arrows

const slides = [
    {
        id: 1,
        image: 'https://images.unsplash.com/photo-1610438258522-d04b6d4b9f29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
        title: 'Experience the Future of Sound',
        description: 'Immersive audio, unparalleled comfort. Get yours today!',
        buttonText: 'Shop Headphones',
        buttonLink: '#',
    },
    {
        id: 2,
        image: 'https://images.unsplash.com/photo-1547007798-34f7158fdf0b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Work Smart, Play Hard',
        description: 'Powerful laptops for every need. Boost your productivity.',
        buttonText: 'Discover Laptops',
        buttonLink: '#',
    },
    {
        id: 3,
        image: 'https://images.unsplash.com/photo-1606813293026-6466ad504a5c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Capture Every Moment',
        description: 'High-resolution cameras for stunning photography.',
        buttonText: 'View Cameras',
        buttonLink: '#',
    },
    {
        id: 4,
        image: 'https://images.unsplash.com/photo-1598387063462-23f269a835a6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Smart Living, Smarter Choices',
        description: 'Innovative smart home devices for a connected lifestyle.',
        buttonText: 'Explore Smart Home',
        buttonLink: '#',
    },
];

const HeroSlider = ({ autoSlide = true, autoSlideInterval = 5000 }) => {
    const [curr, setCurr] = useState(0);

    const prev = () => setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
    const next = useCallback(() => setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1)), []);

    useEffect(() => {
        if (!autoSlide) return;
        const slideInterval = setInterval(next, autoSlideInterval);
        return () => clearInterval(slideInterval);
    }, [autoSlide, autoSlideInterval, next]);

    return (
        <section className="relative w-full overflow-hidden h-[450px] md:h-[600px] lg:h-[700px] bg-gray-100">
            <div
                className="flex transition-transform ease-out duration-500 h-full"
                style={{ transform: `translateX(-${curr * 100}%)` }}
            >
                {slides.map((s) => (
                    <div
                        key={s.id}
                        className="min-w-full h-full bg-cover bg-center flex items-center justify-center relative"
                        style={{ backgroundImage: `url(${s.image})` }}
                    >
                        {/* Overlay for better text readability */}
                        <div className="absolute inset-0 bg-black opacity-40"></div>
                        
                        {/* Text Content */}
                        <div className="relative z-10 text-white text-center max-w-2xl px-6">
                            <h2 className="text-3xl md:text-5xl font-bold mb-4 drop-shadow-lg leading-tight">
                                {s.title}
                            </h2>
                            <p className="text-md md:text-lg mb-6 drop-shadow-md">
                                {s.description}
                            </p>
                            <a 
                                href={s.buttonLink} 
                                className="inline-block px-8 py-3 bg-[#60a785] hover:bg-[#4a8467] transition-all text-white font-semibold rounded-full shadow-lg text-lg"
                            >
                                {s.buttonText}
                            </a>
                        </div>
                    </div>
                ))}
            </div>

            {/* Slider Arrows */}
            <div className="absolute inset-0 flex items-center justify-between p-4">
                <button
                    onClick={prev}
                    aria-label="Previous Slide"
                    className="p-2 md:p-3 rounded-full shadow-md bg-white/70 text-gray-800 hover:bg-white transition"
                >
                    <FaChevronLeft size={20} />
                </button>
                <button
                    onClick={next}
                    aria-label="Next Slide"
                    className="p-2 md:p-3 rounded-full shadow-md bg-white/70 text-gray-800 hover:bg-white transition"
                >
                    <FaChevronRight size={20} />
                </button>
            </div>

            {/* Navigation Dots */}
            <div className="absolute bottom-4 left-0 right-0">
                <div className="flex items-center justify-center gap-2">
                    {slides.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurr(i)}
                            aria-label={`Go to slide ${i + 1}`}
                            className={`
                                transition-all w-3 h-3 bg-white rounded-full
                                ${curr === i ? 'p-2 ring-2 ring-[#60a785]' : 'bg-opacity-50'}
                            `}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HeroSlider;