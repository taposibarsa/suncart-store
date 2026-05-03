import Image from "next/image";
import Link from "next/link";

export default function ProductCard({ product }) {
  return (
      <div className="bg-white border border-gray-200 rounded-md p-4 shadow-sm hover:shadow-xl transition duration-300 group">
      
      {/* Image */}
      <div className="relative w-full h-60 overflow-hidden rounded-xl">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className=" object-contain group-hover:scale-105 transition duration-300"
        />
      </div>

      {/* Content */}
      <div className="text-center mt-4 space-y-1">
        <h2 className="text-lg font-semibold text-gray-800">
          {product.name}
        </h2>

        <p className="text-center text-sm text-gray-500">
          {product.brand}
        </p>

        {/* Price + Rating */}
        <div className="flex flex-col justify-center items-center  mt-2">
          <span className="text-yellow-500 text-sm">
            ⭐⭐⭐⭐⭐ {product.rating}
          </span>
          <span className="font-bold text-gray-900">
            ${product.price}
          </span>  
        </div>

        {/* Button */}
        <Link href={`/products/${product.id}`}>
          <button className="mt-4 mb-4  bg-black text-white py-2 px-5 rounded-lg hover:bg-gray-800 transition">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
}