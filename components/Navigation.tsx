"use client"
import React from 'react';
import { ClerkLoaded, SignedIn, UserButton } from '@clerk/nextjs';
import SignIn from './SignIn';
interface NavigationProps {
    navLinks: { name: string; path: string }[];
    initialCartCount: number;
    initialFavoriteCount: number;
    user: {
        firstName: string | null;
        lastName: string | null;
        imgUrl: string | null;
        email: string;
    }
    userId: string | null;
}

const Navigation: React.FC<NavigationProps> = ({ 
    navLinks, 
    initialCartCount, 
    initialFavoriteCount,
    user,
    userId 
}) => {
    const [isScrolled, setIsScrolled] = React.useState(false);
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [cartCount, setCartCount] = React.useState(initialCartCount);
    const [favoriteCount, setFavoriteCount] = React.useState(initialFavoriteCount);
    const [isFavorited, setIsFavorited] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleFavoriteClick = () => {
        setIsFavorited(!isFavorited);
        setFavoriteCount(prev => isFavorited ? prev - 1 : prev + 1);
    };

    return (
        <nav className={`fixed top-0 left-0 w-full flex items-center justify-between px-4 md:px-16 lg:px-24 xl:px-32 transition-all duration-500 z-50 ${isScrolled ? "bg-white/80 shadow-md text-gray-700 backdrop-blur-lg py-3 md:py-4" : "bg-gray-700 py-4 md:py-4 text-white"}`}>
            {/* Logo */}
            <a href="/" className="flex items-center gap-2">
                <span className={`font-bold text-2xl ${isScrolled ? "text-black" : "text-white"}`}>Techcart</span>
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-4 lg:gap-8">
                {navLinks.map((link, i) => (
                    <a key={i} href={link.path} className={`group flex flex-col gap-0.5 ${isScrolled ? "text-gray-700" : "text-white"}`}>
                        {link.name}
                        <div className={`${isScrolled ? "bg-gray-700" : "bg-white"} h-0.5 w-0 group-hover:w-full transition-all duration-300`} />
                    </a>
                ))}
                <button className={`border px-4 py-1 text-sm font-light rounded-full cursor-pointer ${isScrolled ? 'text-black border-black' : 'text-white border-white'} transition-all`}>
                    New Launch
                </button>
            </div>

            {/* Desktop Right */}
            <div className="hidden md:flex items-center gap-4">
                {/* Search Button */}
                <button className={`p-2 rounded-full transition-all duration-500 ${isScrolled ? "text-gray-700 hover:bg-gray-100" : "text-white hover:bg-white/10"}`}>
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <circle cx="11" cy="11" r="8" />
                        <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    </svg>
                </button>

                {/* Favorite Button */}
                <button 
                    className={`relative p-2 rounded-full transition-all duration-500 ${isScrolled ? "text-gray-700 hover:bg-gray-100" : "text-white hover:bg-white/10"}`}
                    onClick={handleFavoriteClick}
                >
                    <svg 
                        className={`h-5 w-5 transition-all duration-300 ${isFavorited ? "fill-red-500 stroke-red-500" : ""}`}
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        viewBox="0 0 24 24"
                    >
                        <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                    {favoriteCount > 0 && (
                        <span className={`absolute -top-1 -right-1 flex items-center justify-center w-5 h-5 text-xs rounded-full ${isScrolled ? "bg-black text-white" : "bg-white text-black"}`}>
                            {favoriteCount}
                        </span>
                    )}
                </button>

                {/* Cart Button with Badge */}
                <button className={`relative p-2 rounded-full transition-all duration-500 ${isScrolled ? "text-gray-700 hover:bg-gray-100" : "text-white hover:bg-white/10"}`}>
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    {cartCount > 0 && (
                        <span className={`absolute -top-1 -right-1 flex items-center justify-center w-5 h-5 text-xs rounded-full ${isScrolled ? "bg-black text-white" : "bg-white text-black"}`}>
                            {cartCount}
                        </span>
                    )}
                </button>

                {/* Orders Button */}
                <button className={`p-2 rounded-full transition-all duration-500 ${isScrolled ? "text-gray-700 hover:bg-gray-100" : "text-white hover:bg-white/10"}`}>
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                </button>

             {
                    <ClerkLoaded>
                        <SignedIn>
                            <div className="flex ">
                                <UserButton 
                                    appearance={{
                                        elements: {
                                            avatarBox: "w-10 h-10"
                                        }
                                    }}
                                />
                              
                            </div>
                        </SignedIn>
                     {
                        !user && <SignIn isScrolled={isScrolled}/>
                     }
                    </ClerkLoaded>
                }
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-3 md:hidden">
                {/* Mobile Cart Button */}
                <button className="relative p-2">
                    <svg className={`h-5 w-5 ${isScrolled ? "text-black" : "text-white"}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    {cartCount > 0 && (
                        <span className={`absolute -top-1 -right-1 flex items-center justify-center w-4 h-4 text-xs rounded-full ${isScrolled ? "bg-black text-white" : "bg-white text-black"}`}>
                            {cartCount}
                        </span>
                    )}
                </button>

                {/* Mobile Menu Toggle */}
                <svg 
                    onClick={() => setIsMenuOpen(!isMenuOpen)} 
                    className={`h-6 w-6 cursor-pointer ${isScrolled ? "text-black" : "text-white"}`} 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    viewBox="0 0 24 24"
                >
                    <line x1="4" y1="6" x2="20" y2="6" />
                    <line x1="4" y1="12" x2="20" y2="12" />
                    <line x1="4" y1="18" x2="20" y2="18" />
                </svg>
            </div>

            {/* Mobile Menu */}
            <div className={`fixed top-0 left-0 w-full h-screen bg-white text-base flex flex-col md:hidden items-center justify-center gap-6 font-medium text-gray-800 transition-all duration-500 ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}>
                <button className="absolute top-4 right-4" onClick={() => setIsMenuOpen(false)}>
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                </button>

                {navLinks.map((link, i) => (
                    <a key={i} href={link.path} onClick={() => setIsMenuOpen(false)} className="text-lg">
                        {link.name}
                    </a>
                ))}

                <button className="border border-gray-800 px-4 py-1 text-sm font-light rounded-full cursor-pointer transition-all">
                    New Launch
                </button>

                {/* Mobile Action Buttons */}
                <div className="flex items-center gap-4 mt-4">
                    <button className="p-3 rounded-full bg-gray-100">
                        <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                    </button>
                    <button className="p-3 rounded-full bg-gray-100">
                        <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                        </svg>
                    </button>
                    <button className="relative p-3 rounded-full bg-gray-100">
                        <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        {cartCount > 0 && (
                            <span className="absolute -top-1 -right-1 flex items-center justify-center w-5 h-5 text-xs rounded-full bg-black text-white">
                                {cartCount}
                            </span>
                        )}
                    </button>
                </div>
                {
                    <ClerkLoaded>
                        <SignedIn>
                            <div className="flex flex-col items-center gap-2 mt-4">
                                <UserButton 
                                    appearance={{
                                        elements: {
                                            avatarBox: "w-10 h-10"
                                        }
                                    }}
                                />
                                <span className="text-sm text-gray-500">
                                    {user?.firstName}
                                </span>
                            </div>
                        </SignedIn>
                     {
                        !user && <SignIn isScrolled />
                     }
                    </ClerkLoaded>
                }
            </div>
        </nav>
    );
};

export default Navigation;