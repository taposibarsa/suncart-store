import Image from "next/image";

export default function ProductCard({ product }) {
  return (
    <div className="border rounded-xl p-4 shadow hover:shadow-lg transition">
      <Image
        src={product.image}
        alt={product.name}
        width={300}
        height={200}
        className="h-40 w-full object-cover rounded-md"
      />

      <h2 className="text-lg font-semibold mt-3">
        {product.name}
      </h2>

      <p className="text-sm text-gray-500">
        {product.brand}
      </p>

      <div className="flex justify-between items-center mt-2">
        <span className="font-bold">${product.price}</span>
        <span className="text-yellow-500">
          ⭐ {product.rating}
        </span>
      </div>
    </div>
  );
}