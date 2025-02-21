import React from 'react'
import Navbar from '@/components/Navbar'
import Tabs from '@/components/Tabs'
import Footer from '@/components/Footer'
import ProductList from '@/components/ProductList'
import Link from 'next/link'
const page = ({params, }: {
    params: {slug: string[]}
}) => {
  return ( 
  <>
      <Navbar />
      <Tabs />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
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
            <Link href={`/products/${params.slug}`} className="block transition hover:text-gray-700">
              {params.slug}
            </Link>
          </li>
        </ol>
      </nav>

      

<section>
  <div className="mx-auto px-4 py-6 sm:px-6 sm:py-12 lg:px-4">
      <h2 className="text-lg font-bold text-gray-900 sm:text-2xl">Filters</h2>      
    <div className="mt-4 block lg:hidden">
      <button
        className="flex cursor-pointer items-center gap-2 border-b border-gray-400 pb-1 text-gray-900 transition hover:border-gray-600"
      >
        <span className="text-sm font-medium"> Filters & Sorting </span>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-4 rtl:rotate-180"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </button>
    </div>

    <div className="mt-4 lg:mt-8 lg:grid lg:grid-cols-4 lg:items-start lg:gap-8">
      <div className="hidden space-y-4 lg:block">
        <div>
          <label htmlFor="SortBy" className="block text-xs font-medium text-gray-700"> Sort By </label>

          <select id="SortBy" className="mt-1 rounded-sm border-gray-300 text-sm">
            <option>Sort By</option>
            <option value="Title, DESC">Title, DESC</option>
            <option value="Title, ASC">Title, ASC</option>
            <option value="Price, DESC">Price, DESC</option>
            <option value="Price, ASC">Price, ASC</option>
          </select>
        </div>

        <div>
          <p className="block text-xs font-medium text-gray-700">Filters</p>

          <div className="mt-1 space-y-2">
            <details
              className="overflow-hidden rounded-sm border border-gray-300 [&_summary::-webkit-details-marker]:hidden"
            >
              <summary
                className="flex cursor-pointer items-center justify-between gap-2 p-4 text-gray-900 transition"
              >
                <span className="text-sm font-medium"> Availability </span>

                <span className="transition group-open:-rotate-180">
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
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </span>
              </summary>

              <div className="border-t border-gray-200 bg-white">
                <header className="flex items-center justify-between p-4">
                  <span className="text-sm text-gray-700"> 0 Selected </span>

                  <button type="button" className="text-sm text-gray-900 underline underline-offset-4">
                    Reset
                  </button>
                </header>

                <ul className="space-y-1 border-t border-gray-200 p-4">
                  <li>
                    <label htmlFor="FilterInStock" className="inline-flex items-center gap-2">
                      <input
                        type="checkbox"
                        id="FilterInStock"
                        className="size-5 rounded-sm border-gray-300"
                      />

                      <span className="text-sm font-medium text-gray-700"> In Stock (5+) </span>
                    </label>
                  </li>

                  <li>
                    <label htmlFor="FilterPreOrder" className="inline-flex items-center gap-2">
                      <input
                        type="checkbox"
                        id="FilterPreOrder"
                        className="size-5 rounded-sm border-gray-300"
                      />

                      <span className="text-sm font-medium text-gray-700"> Pre Order (3+) </span>
                    </label>
                  </li>

                  <li>
                    <label htmlFor="FilterOutOfStock" className="inline-flex items-center gap-2">
                      <input
                        type="checkbox"
                        id="FilterOutOfStock"
                        className="size-5 rounded-sm border-gray-300"
                      />

                      <span className="text-sm font-medium text-gray-700"> Out of Stock (10+) </span>
                    </label>
                  </li>
                </ul>
              </div>
            </details>

            <details
              className="overflow-hidden rounded-sm border border-gray-300 [&_summary::-webkit-details-marker]:hidden"
            >
              <summary
                className="flex cursor-pointer items-center justify-between gap-2 p-4 text-gray-900 transition"
              >
                <span className="text-sm font-medium"> Price </span>

                <span className="transition group-open:-rotate-180">
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
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </span>
              </summary>

              <div className="border-t border-gray-200 bg-white">
                <header className="flex items-center justify-between p-4">
                  <span className="text-sm text-gray-700"> The highest price is $600 </span>

                  <button type="button" className="text-sm text-gray-900 underline underline-offset-4">
                    Reset
                  </button>
                </header>

                <div className="border-t border-gray-200 p-4">
                  <div className="flex justify-between gap-4">
                    <label htmlFor="FilterPriceFrom" className="flex items-center gap-2">
                      <span className="text-sm text-gray-600">$</span>

                      <input
                        type="number"
                        id="FilterPriceFrom"
                        placeholder="From"
                        className="w-full rounded-md border-gray-200 shadow-xs sm:text-sm"
                      />
                    </label>

                    <label htmlFor="FilterPriceTo" className="flex items-center gap-2">
                      <span className="text-sm text-gray-600">$</span>

                      <input
                        type="number"
                        id="FilterPriceTo"
                        placeholder="To"
                        className="w-full rounded-md border-gray-200 shadow-xs sm:text-sm"
                      />
                    </label>
                  </div>
                </div>
              </div>
            </details>

            <details
              className="overflow-hidden rounded-sm border border-gray-300 [&_summary::-webkit-details-marker]:hidden"
            >
              <summary
                className="flex cursor-pointer items-center justify-between gap-2 p-4 text-gray-900 transition"
              >
                <span className="text-sm font-medium"> Colors </span>

                <span className="transition group-open:-rotate-180">
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
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </span>
              </summary>

              <div className="border-t border-gray-200 bg-white">
                <header className="flex items-center justify-between p-4">
                  <span className="text-sm text-gray-700"> 0 Selected </span>

                  <button type="button" className="text-sm text-gray-900 underline underline-offset-4">
                    Reset
                  </button>
                </header>

                <ul className="space-y-1 border-t border-gray-200 p-4">
                  <li>
                    <label htmlFor="FilterRed" className="inline-flex items-center gap-2">
                      <input
                        type="checkbox"
                        id="FilterRed"
                        className="size-5 rounded-sm border-gray-300"
                      />

                      <span className="text-sm font-medium text-gray-700"> Red </span>
                    </label>
                  </li>

                  <li>
                    <label htmlFor="FilterBlue" className="inline-flex items-center gap-2">
                      <input
                        type="checkbox"
                        id="FilterBlue"
                        className="size-5 rounded-sm border-gray-300"
                      />

                      <span className="text-sm font-medium text-gray-700"> Blue </span>
                    </label>
                  </li>

                  <li>
                    <label htmlFor="FilterGreen" className="inline-flex items-center gap-2">
                      <input
                        type="checkbox"
                        id="FilterGreen"
                        className="size-5 rounded-sm border-gray-300"
                      />

                      <span className="text-sm font-medium text-gray-700"> Green </span>
                    </label>
                  </li>

                  <li>
                    <label htmlFor="FilterOrange" className="inline-flex items-center gap-2">
                      <input
                        type="checkbox"
                        id="FilterOrange"
                        className="size-5 rounded-sm border-gray-300"
                      />

                      <span className="text-sm font-medium text-gray-700"> Orange </span>
                    </label>
                  </li>

                  <li>
                    <label htmlFor="FilterPurple" className="inline-flex items-center gap-2">
                      <input
                        type="checkbox"
                        id="FilterPurple"
                        className="size-5 rounded-sm border-gray-300"
                      />

                      <span className="text-sm font-medium text-gray-700"> Purple </span>
                    </label>
                  </li>

                  <li>
                    <label htmlFor="FilterTeal" className="inline-flex items-center gap-2">
                      <input
                        type="checkbox"
                        id="FilterTeal"
                        className="size-5 rounded-sm border-gray-300"
                      />

                      <span className="text-sm font-medium text-gray-700"> Teal </span>
                    </label>
                  </li>
                </ul>
              </div>
            </details>
          </div>
        </div>
      </div>


      <div className="lg:col-span-3">
      <h2 className="text-xl font-bold text-gray-900 sm:text-3xl my-4">{params.slug}</h2>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            
          <li>
            <a href="#" className="group block overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                alt=""
                className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
              />

              <div className="relative bg-white pt-3">
                <h3
                  className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4"
                >
                  Basic Tee
                </h3>

                <p className="mt-2">
                  <span className="sr-only"> Regular Price </span>

                  <span className="tracking-wider text-gray-900"> £24.00 GBP </span>
                </p>
              </div>
            </a>
          </li>

          <li>
            <a href="#" className="group block overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                alt=""
                className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
              />

              <div className="relative bg-white pt-3">
                <h3
                  className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4"
                >
                  Basic Tee
                </h3>

                <p className="mt-2">
                  <span className="sr-only"> Regular Price </span>

                  <span className="tracking-wider text-gray-900"> £24.00 GBP </span>
                </p>
              </div>
            </a>
          </li>

          <li>
            <a href="#" className="group block overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                alt=""
                className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
              />

              <div className="relative bg-white pt-3">
                <h3
                  className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4"
                >
                  Basic Tee
                </h3>

                <p className="mt-2">
                  <span className="sr-only"> Regular Price </span>

                  <span className="tracking-wider text-gray-900"> £24.00 GBP </span>
                </p>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>
            </div>
    <Footer/>
    </>
  )
}

export default page