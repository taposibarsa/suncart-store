"use client";
import ProductCard from "@/components/ProductCard";
import { useProducts } from "@/context/ProductContext";

const PopularProducts = () => {
  const { products } = useProducts();
  const featuredProducts = products.slice(0, 3);

  return (
    <section className="py-14 px-4 md:px-10 bg-gray-50 ">
      
      {/* Header */}
      <div className="text-center mb-10">
        <p className="text-xs uppercase tracking-widest text-gray-400 mb-2">
          Products
        </p>
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
          Popular Products
        </h2>
        <p className="text-gray-500 mt-2 text-sm md:text-base">
          Discover our most loved summer essentials
        </p>
      </div>

      {/* Products */}
      {!products.length ? (
        <div className="flex justify-center items-center py-10">
          <p className="text-gray-500">Loading products...</p>
        </div>
      ) : (
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="transform transition duration-300 hover:-translate-y-1"
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default PopularProducts;
