"use client";

import { useParams } from "next/navigation";
import { useProducts } from "@/context/ProductContext";
import Image from "next/image";

const ProductDetailsPage = () => {
  const { id } = useParams();
  const { products } = useProducts();

  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="text-center py-20 text-gray-500">
        Loading product...
      </div>
    );
  }

  return (
    <div className="px-4 md:px-10 py-10">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        
        {/* Image */}
        <div className="overflow-hidden rounded-2xl shadow">
          <Image
            src={product.image}
            alt={product.name}
            width={500}
            height={400}
            className="w-full h-[350px] object-cover"
          />
        </div>

        {/* Info */}
        <div>
          <h1 className="text-2xl md:text-3xl font-bold mb-3">
            {product.name}
          </h1>

          <p className="text-gray-500 mb-2">
            Brand: {product.brand}
          </p>

          <p className="text-black mb-2">
            ⭐Rating:  {product.rating}
          </p>

          <p className="text-lg font-semibold mb-4">
            Price: ${product.price}
          </p>

          <p className="text-gray-600 mb-6">
            {product.description}
          </p>

          <p className="mb-4">
            Stock:{" "}
            <span className="font-medium">
              {product.stock}
            </span>
          </p>

          {/* Buttons */}
          <div className="flex gap-4">
            <button className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition">
              Add to Cart
            </button>

            <button className="border px-6 py-2 rounded-lg hover:bg-gray-100 transition">
              Buy Now
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProductDetailsPage;