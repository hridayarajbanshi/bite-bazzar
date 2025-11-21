"use client"
import React, { useState, useEffect } from 'react';

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    const slides = [
        {
            id: 1,
            title: "New iPhone 15 Pro",
            description: "Experience the future with Titanium design and powerful A17 Pro chip",
            price: "$999",
            oldPrice: "$1199",
            discount: "17% OFF",
            image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            bgGradient: "from-purple-600 to-blue-600",
            buttonText: "Shop Now",
            badge: "New"
        },
        {
            id: 2,
            title: "MacBook Air M2",
            description: "Supercharged by M2 chip. Incredible performance meets exceptional battery life.",
            price: "$1099",
            oldPrice: "$1299",
            discount: "15% OFF",
            image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
            bgGradient: "from-blue-500 to-cyan-500",
            buttonText: "Buy Now",
            badge: "Hot"
        },
        {
            id: 3,
            title: "Samsung Galaxy Watch",
            description: "Advanced health monitoring and premium design for your active lifestyle",
            price: "$299",
            oldPrice: "$399",
            discount: "25% OFF",
            image: "https://images.unsplash.com/photo-1551816230-ef5deaed4a26?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
            bgGradient: "from-green-500 to-emerald-600",
            buttonText: "Explore",
            badge: "Sale"
        },
        {
            id: 4,
            title: "Sony WH-1000XM5",
            description: "Industry-leading noise cancellation with exceptional sound quality",
            price: "$349",
            oldPrice: "$449",
            discount: "22% OFF",
            image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2068&q=80",
            bgGradient: "from-orange-500 to-red-500",
            buttonText: "Discover",
            badge: "Popular"
        }
    ];

    const nextSlide = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setTimeout(() => setIsAnimating(false), 500);
    };

    const prevSlide = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
        setTimeout(() => setIsAnimating(false), 500);
    };

    const goToSlide = (index: number) => {
        if (isAnimating || index === currentSlide) return;
        setIsAnimating(true);
        setCurrentSlide(index);
        setTimeout(() => setIsAnimating(false), 500);
    };

    // Auto-play functionality
    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 5000);

        return () => clearInterval(interval);
    }, [currentSlide]);

    return (
        <div className="relative w-full h-[500px] md:h-[400px] lg:h-[400px] overflow-hidden rounded-xl shadow-2xl ">
            {/* Slides Container */}
            <div className="relative w-full h-full">
                {slides.map((slide, index) => (
                    <div
                        key={slide.id}
                        className={`absolute inset-0 transition-all duration-500 ease-in-out transform ${
                            index === currentSlide
                                ? 'translate-x-0 opacity-100'
                                : index < currentSlide
                                ? '-translate-x-full opacity-0'
                                : 'translate-x-full opacity-0'
                        }`}
                    >
                        {/* Background Image with Overlay */}
                        <div className="absolute inset-0">
                            <img
                                src={slide.image}
                                alt={slide.title}
                                className="w-full h-full object-cover"
                            />
                            <div className={`absolute inset-0 bg-gradient-to-r ${slide.bgGradient} opacity-80`}></div>
                        </div>

                        {/* Content */}
                        <div className="relative z-10 flex items-center h-full px-4 md:px-12 lg:px-24">
                            <div className="max-w-2xl text-white">
                                {/* Badge */}
                                <span className="inline-block px-3 py-1 mb-4 text-sm font-semibold bg-white/20 backdrop-blur-sm rounded-full border border-white/30">
                                    {slide.badge}
                                </span>

                                {/* Title */}
                                <h2 className="text-5xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                                    {slide.title}
                                </h2>

                                {/* Description */}
                                <p className="text-lg md:text-xl mb-6 text-white/90 max-w-md leading-relaxed">
                                    {slide.description}
                                </p>

                                {/* Price */}
                                <div className="flex items-center gap-4 mb-6">
                                    <span className="text-2xl md:text-3xl font-bold">{slide.price}</span>
                                    <span className="text-xl line-through text-white/70">{slide.oldPrice}</span>
                                    <span className="px-3 py-1 bg-red-500 text-white text-sm font-bold rounded-full">
                                        {slide.discount}
                                    </span>
                                </div>

                                {/* CTA Button */}
                                <button className="group relative overflow-hidden bg-white text-gray-900 px-6 py-2 rounded-xl cursor-pointer font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                                    <span className="relative z-10">{slide.buttonText}</span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div> 
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Navigation Arrows */}
            <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 border border-white/30"
                disabled={isAnimating}
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
            </button>

            <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 border border-white/30"
                disabled={isAnimating}
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </button>

            {/* Indicators/Dots */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                            index === currentSlide
                                ? 'bg-white scale-125'
                                : 'bg-white/50 hover:bg-white/80'
                        }`}
                        disabled={isAnimating}
                    />
                ))}
            </div>

            {/* Progress Bar */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20 z-20">
                <div
                    className="h-full bg-white transition-all duration-5000 ease-linear"
                    style={{
                        width: isAnimating ? '100%' : '0%',
                        transition: isAnimating ? 'width 5s linear' : 'none'
                    }}
                    key={currentSlide}
                />
            </div>
        </div>
    );
};

export default Slider;