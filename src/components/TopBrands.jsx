import "animate.css";
import Image from "next/image";

const brands = [
    { name: "BloomStyle", logo: "/dress.jpg" },
    { name: "CarryAll", logo: "/bag.jpg" },
    { name: "Zara", logo: "/sunscreen.jpg" },
    { name: "CoolFit", logo: "/ment.jpg" },
];

export default function TopBrands() {
    return (
        <section className="py-14 px-4 md:px-10 bg-white container mx-auto">

            {/* Header */}
            <div className="mb-10 text-center">
                <p className="text-xs uppercase tracking-widest text-gray-400 mb-2">
                    Brands
                </p>
                <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
                    Top Brands
                </h2>
            </div>

            {/* Brands Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                {brands.map((brand) => (
                    <div
                        key={brand.name}
                        className="group bg-blue-50 rounded-2xl p-5 h-44 flex items-center justify-center border border-gray-100 hover:border-gray-300 transition duration-300"
                    >
                        <div className="relative w-full h-full flex items-center justify-center">

                            <Image
                                src={brand.logo}
                                alt={brand.name}
                                fill
                                className="object-contain transition duration-300 group-hover:scale-105"
                            />

                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}