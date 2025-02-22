import React from 'react'
import Link from 'next/link'
const Tabs = () => {
  return (
    <>


<div>
  <div className="sm:hidden ">
    <label htmlFor="Tab" className="sr-only">Tab</label>

    <select id="Tab" className="w-full rounded-md ">
      <option > Settings</option>
      <option>Messages</option>
      <option>Archive</option>
      <option >Notifications</option>
      <option >Notifications</option>
      <option >Notifications</option>
      <option >Notifications</option>
    </select>
  </div>

  <div className="hidden sm:block">
    <div className="border-b flex bg-white items-center justify-center border-gray-200">
      <nav className="-mb-px  mt-2  flex gap-6 " aria-label="Tabs">
        <Link
          href="/products/"
          className="shrink-0 border-b-2 border-transparent px-1 pb-4 text-sm font-medium text-gray-700 hover:border-gray-300 hover:text-moonStone text-lg"
        >
        Baked Goods
        </Link>
        <Link
          href="/"
          className="shrink-0 border-b-2 border-transparent px-1 pb-4 text-sm font-medium text-gray-700 hover:border-gray-300 hover:text-moonStone text-lg"
        >
          Cookies
        </Link>
        <Link
          href="/"
          className="shrink-0 border-b-2 border-transparent px-1 pb-4 text-sm font-medium text-gray-700 hover:border-gray-300 hover:text-moonStone text-lg"
        >
          Noodles
        </Link>
        <Link
          href="/"
          className="shrink-0 border-b-2 border-transparent px-1 pb-4 text-sm font-medium text-gray-700 hover:border-gray-300 hover:text-moonStone text-lg"
        >
          Chips & Crackers
        </Link>
        <Link
          href="/"
          className="shrink-0 border-b-2 border-transparent px-1 pb-4 text-sm font-medium text-gray-700 hover:border-gray-300 hover:text-moonStone text-lg"
        >
         Chocolates
        </Link>
  
      </nav>
    </div>
  </div>
</div>
    </>
  )
}

export default Tabs