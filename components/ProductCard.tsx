import React from 'react'

const ProductCard = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap');
        * {
          font-family: 'Poppins', sans-serif;
        }
      `}</style>

      <div className="flex flex-col bg-white shadow-md w-72 rounded-lg overflow-hidden relative">
        <div className="relative">
          <img
            className="w-72 h-48 object-cover"
            src="https://images.unsplash.com/photo-1657560566744-06d0b69f6647?q=80&w=600&auto=format&fit=crop"
            alt="image"
          />
          <span className="absolute top-2 left-2 bg-[#60a785] text-white text-xs px-2 py-1 rounded-md shadow-sm">
            Laptop
          </span>
        </div>

        <div className="p-4 text-sm">
          <p className="text-slate-800 text-lg font-bold">Rs. 3,800</p>
          <p className="text-slate-800 text-base font-medium my-1.5">Chris Jordan</p>
          <p className="text-slate-500">
            Looks amazing out of the box. I barely had to customize anything.
          </p>

          <div className="grid grid-cols-2 gap-2 mt-3">
            <button className="text-white bg-[#60a785] py-2 hover:bg-[#4a8467] transition rounded-md hover:cursor-pointer">
              Buy now
            </button>
            <button className="bg-slate-100 text-slate-600 py-2 hover:bg-slate-200 transition rounded-md hover:cursor-pointer">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
