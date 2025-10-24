import React from 'react'
import {
    FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube, FaEnvelope
} from 'react-icons/fa'; // Using react-icons for social media

// Define the Techcart logo component for consistency
const TechcartLogo = ({ size = 'text-3xl' }) => (
    <div className={`flex items-center gap-1 font-sans font-bold ${size}`}>
        <span className={`circuit-text text-black`}>Tech</span>
        <span className="text-[#60a785]">cart</span>
    </div>
);

// Define Link Group component for cleaner code
const FooterLinkGroup = ({ title, links }) => (
    <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4 border-b-2 border-[#60a785] pb-1 inline-block">
            {title}
        </h3>
        <ul className="space-y-2">
            {links.map((link, index) => (
                <li key={index}>
                    <a href={link.href} className="text-gray-600 hover:text-[#60a785] transition text-sm">
                        {link.label}
                    </a>
                </li>
            ))}
        </ul>
    </div>
);

const Footer = () => {
    // Data for the link groups
    const quickLinks = [
        { label: 'About Us', href: '#' },
        { label: 'Contact', href: '#' },
        { label: 'Careers', href: '#' },
        { label: 'FAQ', href: '#' },
        { label: 'Privacy Policy', href: '#' },
    ];

    const categories = [
        { label: 'Laptops & PCs', href: '#' },
        { label: 'Smartphones', href: '#' },
        { label: 'Accessories', href: '#' },
        { label: 'Gaming Gear', href: '#' },
        { label: 'Wearables', href: '#' },
    ];

    const customerService = [
        { label: 'Track Order', href: '#' },
        { label: 'Returns & Refunds', href: '#' },
        { label: 'Shipping Info', href: '#' },
        { label: 'Warranty', href: '#' },
        { label: 'Help Center', href: '#' },
    ];

    return (
        // Changed background to a clean white/light gray to match modern tech aesthetic
        <footer className="w-full bg-white text-gray-800 border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 py-12">
                
                {/* Main Content Grid */}
                <div className="grid grid-cols-2 md:grid-cols-5 gap-10 lg:gap-16 pb-12">
                    
                    {/* Brand Info & Socials */}
                    <div className="col-span-2 md:col-span-2 space-y-4">
                        <TechcartLogo />
                        <p className="text-sm font-normal text-gray-600 max-w-sm">
                            Your destination for the latest electronics and tech gear. Quality products, competitive prices.
                        </p>

                        {/* Social Icons */}
                        <div className="flex space-x-4 pt-2">
                            <a href="#" aria-label="Facebook" className="text-gray-500 hover:text-[#60a785] transition">
                                <FaFacebookF size={20} />
                            </a>
                            <a href="#" aria-label="Twitter" className="text-gray-500 hover:text-[#60a785] transition">
                                <FaTwitter size={20} />
                            </a>
                            <a href="#" aria-label="Instagram" className="text-gray-500 hover:text-[#60a785] transition">
                                <FaInstagram size={20} />
                            </a>
                            <a href="#" aria-label="LinkedIn" className="text-gray-500 hover:text-[#60a785] transition">
                                <FaLinkedinIn size={20} />
                            </a>
                            <a href="#" aria-label="YouTube" className="text-gray-500 hover:text-[#60a785] transition">
                                <FaYoutube size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Link Groups */}
                    <FooterLinkGroup title="Quick Links" links={quickLinks} />
                    <FooterLinkGroup title="Shop Categories" links={categories} />
                    <FooterLinkGroup title="Customer Care" links={customerService} />
                </div>

                {/* Newsletter & Payment Section (Optional but good for E-commerce) */}
                <div className="border-t border-gray-200 pt-8 mt-4 flex flex-col lg:flex-row justify-between items-center">
                    
                    {/* Newsletter Signup */}
                    <div className="mb-6 lg:mb-0 lg:w-1/3">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                            Stay Updated
                        </h3>
                        <p className="text-sm text-gray-600 mb-3">
                            Subscribe for 10% off your first order!
                        </p>
                        <div className="flex relative max-w-md">
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="w-full py-2 pl-4 pr-16 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#60a785] text-sm"
                            />
                            <button className="absolute right-0 top-0 bottom-0 px-4 text-white bg-[#60a785] hover:bg-[#4a8467] rounded-full transition text-sm font-medium m-1">
                                <FaEnvelope size={18} />
                            </button>
                        </div>
                    </div>

                    {/* Payment Logos (Placeholder) */}
                    <div className="lg:w-2/3 flex justify-center lg:justify-end items-center space-x-4">
                        <p className="text-sm text-gray-600">Secure Payments:</p>
                        {/* Replace with actual payment logo SVGs or images */}
                        <img 
                            src="https://img.icons8.com/color/48/000000/visa.png" 
                            alt="Visa" 
                            className="h-6 opacity-75" 
                        />
                         <img 
                            src="https://img.icons8.com/color/48/000000/mastercard.png" 
                            alt="MasterCard" 
                            className="h-6 opacity-75" 
                        />
                         <img 
                            src="https://img.icons8.com/fluency/48/000000/paypal.png" 
                            alt="PayPal" 
                            className="h-6 opacity-75" 
                        />
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer