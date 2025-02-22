import React from 'react'
import Navbar from '@/components/Navbar'
import Tabs from '@/components/Tabs'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { ProductCard } from '@/components/ProductCard'
const page = ({params, }: {
    params: {slug: string[]}
}) => {
  const products = Array.from({length: 10}, (_, index) =>({
    id: index,
    tags: `${params.slug}`,
  }))
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


<section
  className="overflow-hidden bg-[url(https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?q=80&w=2670&auto=format&fit=crop)] bg-cover bg-top bg-no-repeat bg-fixed"
>
  <div className="bg-black/50 p-8 md:p-12 lg:px-16 lg:py-24">
    <div className=" ltr:sm:text-left rtl:sm:text-right">
      <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-5xl">Latest Skims</h2>

      <p className="hidden max-w-lg text-white/90 md:mt-6 md:block  md:text-lg md:leading-relaxed">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore officia corporis quasi
        doloribus iure architecto quae voluptatum beatae excepturi dolores.
      </p>

      <div className="mt-4 sm:mt-8">
        <a
          href="#"
          className="inline-block rounded-full bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:ring-3 focus:ring-yellow-400 focus:outline-hidden"
        >
          Get Started
        </a>
      </div>
    </div>
  </div>
</section>

      

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
                  <span className="text-sm text-gray-700"> The highest price is Rs.999 </span>

                  <button type="button" className="text-sm text-gray-900 underline underline-offset-4">
                    Reset
                  </button>
                </header>

                <div className="border-t border-gray-200 p-4">
                  <div className="flex justify-between gap-4">
                    <label htmlFor="FilterPriceFrom" className="flex items-center gap-2">
                      <span className="text-sm text-gray-600">Rs.</span>

                      <input
                        type="number"
                        id="FilterPriceFrom"
                        placeholder="From"
                        className="w-full rounded-md border-gray-200 shadow-xs sm:text-sm"
                      />
                    </label>

                    <label htmlFor="FilterPriceTo" className="flex items-center gap-2">
                      <span className="text-sm text-gray-600">Rs.</span>

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

           
          </div>
        </div>
      </div>


      <div className="lg:col-span-3">
      <h2 className="text-xl font-bold text-gray-900 sm:text-3xl my-4">{params.slug}</h2>
      
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {
            products.map((product) =>(
              <li key={product.id}>
                <ProductCard product={product} tag={product.tags}/>
              </li>
            ))
          }
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