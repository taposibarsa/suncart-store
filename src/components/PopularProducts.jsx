"use client";
import ProductCard from "@/components/ProductCard";
import { useProducts } from "@/context/ProductContext";

const PopularProducts = () => {
    const { products } = useProducts();

    const featuredProducts = products.slice(0, 3);
    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-6">
                Popular Products
            </h2>

            {!products.length ? (
                <p>Loading...</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {featuredProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default PopularProducts;