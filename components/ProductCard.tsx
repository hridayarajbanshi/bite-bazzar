import Link from 'next/link';

export const ProductCard = ({ categoryID, productID, name, tag, price, image } : {
  categoryID: string[];
  productID: string[];
  name: string;
  tag: string;
  price: string;
  image: string;
}) => {
  return (
    <Link
      href={`/products/${categoryID}/${productID}`}
      className="relative block rounded-tr-3xl border border-gray-100"
    >
      <span className="absolute -top-px -right-px rounded-tr-3xl rounded-bl-3xl bg-lightGreen px-6 py-4 font-medium tracking-widest text-white uppercase">
        Save 10%
      </span>

      <img
        src={image || 'https://th.bing.com/th/id/OIP.1BYnaayLy8GcsuHwYnSK6gHaE6?rs=1&pid=ImgDetMain'}
        alt={name || 'Product Image'}
        className="h-60 w-full rounded-tr-3xl object-cover"
      />

      <div className="p-4 text-gray-700 font-bold">
        {tag && (
          <strong className="text-md font-bold text-white bg-moonStone p-1 my-2 rounded-md">
            {tag}
          </strong>
        )}
        <br />

        <h1 className="text-xl font-medium text-gray-900 mt-3">{name}</h1>
        <p className="my-2">Rs. {price || '120'}</p>
        
        <form className="mt-4 flex gap-4">
          <button className="block w-full rounded-sm bg-lightGreen px-4 py-3 text-sm font-medium text-white transition hover:scale-105">
            Add to Cart
          </button>
        </form>
      </div>
    </Link>
  );
};
