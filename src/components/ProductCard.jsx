import Image from "next/image";
import Link from "next/link";

export default function ProductCard({ product }) {
  return (
      <div className="bg-blue-50 border rounded-2xl p-4 shadow-sm hover:shadow-xl transition duration-300 group">
      
      {/* Image */}
      <div className="overflow-hidden rounded-xl">
        <Image
          src={product.image}
          alt={product.name}
          width={300}
          height={200}
          className="h-44 w-full object-cover group-hover:scale-105 transition duration-300"
        />
      </div>

      {/* Content */}
      <div className="mt-4 space-y-1">
        <h2 className="text-lg font-semibold text-gray-800">
          {product.name}
        </h2>

        <p className="text-sm text-gray-500">
          {product.brand}
        </p>

        {/* Price + Rating */}
        <div className="flex justify-between items-center mt-2">
          <span className="font-bold text-gray-900">
            ${product.price}
          </span>
          <span className="text-yellow-500 text-sm">
            ⭐ {product.rating}
          </span>
        </div>

        {/* Button */}
        <Link href={`/products/${product.id}`}>
          <button className="mt-4 w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
}