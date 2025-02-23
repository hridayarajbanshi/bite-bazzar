"use client";
import React, { useState } from "react";

const ProductImg = () => {
  const imgs = [
    { id: 1, url: "https://m.media-amazon.com/images/I/51XMr5YhsBL.jpg" },
    { id: 2, url: "https://i0.wp.com/www.theramenrater.com/wp-content/uploads/2013/08/2013_8_25_1147_001.jpg?resize=500%2C411&ssl=1" },
    { id: 3, url: "https://cdn.shopify.com/s/files/1/0417/8149/3912/products/WhatsAppImage2020-08-08at12.26.48PM_1_grande.jpg?v=1596908104" }
  ];

  const [index, setIndex] = useState(0); // ✅ Fixed useState

  return (
    <div className="flex flex-col items-center">
      {/* Main Image */}
      <div className="h-[500px] w-[500px] overflow-hidden rounded-lg ">
        <img
          src={imgs[index].url}
          className="object-contain w-full h-full transition-transform duration-300 hover:scale-110"
          alt={`Product ${index + 1}`}
        />
        <div className="absolute top-4 right-4 z-10">
          {imgs.map((img, idx) => (
          <div
            key={img.id} // ✅ Added unique key
            className={`w-20 h-20 cursor-pointer rounded-md overflow-hidden border-2 
            }`}
            onClick={() => setIndex(idx)}
          >
            <img
              src={img.url}
              className="w-full h-full object-contain transition-transform duration-300 hover:scale-110"
              alt={`Thumbnail ${idx + 1}`}
            />
          </div>
        ))}
        </div>

      </div>
   <section className="p-4">
    <h2 className="my-2 text-2xl font-bold ">Description</h2>
<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum distinctio itaque facere iure quod voluptatibus modi quo eos earum, dignissimos aliquam illum maxime voluptatum. Labore iure tempore voluptas repellendus consectetur.</p>

   </section>
   
    </div>
  );
};

export default ProductImg;
