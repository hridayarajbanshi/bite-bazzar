"use client"

import React from 'react'
import {useParams} from "next/navigation";
import Navbar from '@/components/Navbar'
import Tabs from '@/components/Tabs'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { useState } from 'react';
// import { loadStripe } from '@stripe/stripe-js';
import ProductImg from '@/components/ProductImg';
const page = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const params = useParams();
// const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);
//   const handleCheckout = async () => {
//     const stripe = await stripePromise;
//     const response = await fetch('/api/checkout', { method: 'POST' });
//     const session = await response.json();
//     if (stripe) {
//       stripe.redirectToCheckout({ sessionId: session.id });
//     }
//   };
// eslint-disable-next-line react-hooks/rules-of-hooks
const [num, setNum] = useState(1);
const handleIncrement = () => {
  setNum((prev) => prev + 1);
};

const handleDecrement = () => {
  setNum((prev) => (prev > 1 ? prev - 1 : 1)); // Ensures quantity doesn't go below 1
};

  return (
    <>
      <Navbar />
      <Tabs />
    <section>
    <nav
        aria-label="Breadcrumb navigation"
        className="container mx-auto px-4 sm:px-6 lg:px-8 py-4"
      >
        <ol className="flex items-center gap-1 text-md text-gray-600">
          <li>
            <Link href="/" className="block transition hover:text-gray-700">
              <span className="sr-only"> Home </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
            </Link>
          </li>
          <li className="rtl:rotate-180">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </li>
          <li>
            <Link href="/products" className="block transition hover:text-gray-700">
              Products
            </Link>
          </li>
          <li className="rtl:rotate-180">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </li>
          <li>
            <Link href={`/products/${params.categoryID}`} className="block transition hover:text-gray-700">
              {params.categoryID}
            </Link>
          </li>
          <li className="rtl:rotate-180">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </li>
          <li>
            <Link href={`/products/${params.categoryID}/${params.productID}`} className="block transition hover:text-gray-700 turncate ...">
              {params.productID}
            </Link>
          </li>
        </ol>
      </nav>
  <div className="mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative group overflow-hidden rounded-lg shadow-lg">
          <ProductImg/>
          </div>
          <div className="flex flex-col p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-3xl mb-6">{params.productID}</h2>
            <span className='p-1 text-center text-sm bg-moonStone w-32 text-white font-semibold rounded-lg'>Discount 20%</span>
            <p className="text-lg mt-4 mb-4">
              Price: <b className='text-moonStone text-xl'>Rs.400</b>
              </p>
              <p className='text-lg '>Quantity: 
              <button className='p-2  mx-2 bg-gray-600 text-white w-10' onClick={handleIncrement}>+</button>  <input type='number' className='bg-gray-200 p-2 max-w-screen-md' readOnly value={num}></input> <button className='mx-2 p-2  bg-gray-600 text-white w-10' onClick={handleDecrement}>-</button>
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
        </div>
  </div>
</section>
      <Footer />
    </>
  )
}

export default page