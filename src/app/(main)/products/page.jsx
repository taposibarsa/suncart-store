"use client";
import { useProducts } from "@/context/ProductContext";
import ProductCard from "@/components/ProductCard";


const Products = () => {
    const { products } = useProducts();
    return (
        <div className="px-4 md:px-10 py-10">
            <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center">
                All Products
            </h1>

            {products.length === 0 ? (
                <p className="text-center text-gray-500">Loading products...</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Products;