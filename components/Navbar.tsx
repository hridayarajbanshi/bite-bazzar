"use client";

import React, { useState } from "react";
import { ShoppingCart, Search, User } from "lucide-react";
import {
  SignedIn,
  SignedOut,
  UserButton,
  SignInButton,
  SignUpButton,
} from "@clerk/nextjs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Link from "next/link";
import { useRouter } from "next/navigation";
const Navbar = () => {
  const cartItems = true;
  const router = useRouter();
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("searching...");
    const formData = new FormData(e.currentTarget);
    const search = formData.get("name") as string;
   if(search){
      router.push(`/products/${search}`);
   }   
  }
  const [isProfileOpen, setIsProfileOpen] = useState(false);
const [isCartOpen, setIsCartOpen] = useState(false);
const openCart = () => {
    setIsCartOpen(!isCartOpen);
}
  return (
    <header className="bg-lightGreen shadow-md">
      <div className="mx-auto  px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <Link href="/">
            <span className="text-3xl font-bold text-white">BITE BAZZAR</span>
            </Link>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1  max-w-lg relative">
            <form className="w-full flex " onSubmit={handleSearch}>
          <input
                type="search"
                placeholder="Search for snacks..."
                name="name"
                className="w-full p-2 pl-10 rounded-sm text-black focus-visible:outline-none focus-within:outline-none cursor-text " onChange={(e) => console.log(e.target.value)}
              />
           <button>
            <Search className="ml-2 bg-moonStone right-3 p-2 rounded-sm hover:cursor-pointer   text-white" size={40} />
            </button>
            </form>
          </div>

          {/* Icons (Cart & Profile) */}
          <div className="flex items-center gap-6">
            {/* Cart Icon */}
            <button className="relative text-white hover:text-gray-200">
              <ShoppingCart size={25} onClick={openCart}/>

              <span className="absolute -top-2 -right-2 bg-moonStone text-white text-xs rounded-full px-1">
                0
              </span>
            </button>
            <Card className="w-96 bg-white shadow-lg rounded-sm top-20 z-10 absolute right-10" hidden={!isCartOpen}>
  <CardHeader className="bg-gray-200 p-4 text-lg text-center ">
    <CardTitle>Shopping Cart</CardTitle>  
  </CardHeader>
  {cartItems ? (<CardContent>
    <div className="flex gap-4 p-4">
      <img src="https://th.bing.com/th/id/OIP.Cu7qo2FrfQru26vGArqSnwHaG1?w=618&h=571&rs=1&pid=ImgDetMain" className="w-28"></img>
    <div className="flex flex-col gap-2">
    <h2 className="my-2 font-semibold text-lime-700">Product Title</h2>
    <p>Card Content</p>
    <p> Product price</p> {/* Price */}
    <p> Is Available</p>
    </div>
    </div>
  </CardContent>): (
    <CardDescription>
      <p className="p-4 text-lg text-center font-semibold ">Your cart is empty : (</p>
    </CardDescription>
  )}
  <CardFooter>
   {cartItems? (<button className="bg-lime-700 text-white p-2 rounded-sm w-full">Checkout</button>): (
      <button className="bg-lime-700 text-white p-2 rounded-sm w-full">Shop our products</button>
   )}
  </CardFooter>
</Card>
            {/* Profile Button */}
            <SignedOut>
              <button
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="relative p-2 rounded-full hover:bg-gray-200 transition"
              >
                <User size={25} className="text-white" />
              </button>

              {/* Dropdown for Sign In/Sign Up */}
              {isProfileOpen && (
                <div className="absolute mt-36 w-48 bg-white border right-1 border-gray-200 rounded-md shadow-lg">
                  <SignInButton>
                    <button className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-100">
                      Login
                    </button>
                  </SignInButton>
                  <SignUpButton>
                    <button className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-100">
                     Register 
                    </button>
                  </SignUpButton>
                </div>
              )}
            </SignedOut>
<div className="text-white">
            <SignedIn>
             <UserButton showName />
            </SignedIn>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="block md:hidden">
            <button className="text-white">
              <svg
                className="w-6 h-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
