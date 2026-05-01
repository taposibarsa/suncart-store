import Image from "next/image";

const PromoSection = () => {
    return (
        <div>
            <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-4">
      
      {/* Card 1 */}
      <div className="relative h-[200px] sm:h-[250px] rounded-xl overflow-hidden group">
        <Image
          src="/promo3.jpg"
          alt="promo1"
          fill
          className="object-cover group-hover:scale-105 transition duration-300"
        />
        <div className="absolute inset-0 bg-black/30 flex flex-col justify-end p-4 text-white">
          <p className="text-sm">Glossier</p>
          <h2 className="text-lg font-semibold">Bite Small Hand Cream</h2>
          <p className="text-xl font-bold">NOW 45% OFF</p>
        </div>
      </div>

      {/* Card 2 */}
      <div className="relative h-[200px] sm:h-[250px] rounded-xl overflow-hidden group">
        <Image
          src="/promo2.jpg"
          alt="promo2"
          fill
          className="object-cover group-hover:scale-105 transition duration-300"
        />
        <div className="absolute inset-0 bg-black/30 flex flex-col justify-end p-4 text-white">
          <p className="text-sm">MISSHA</p>
          <h2 className="text-lg font-semibold">Perfect Cover BB Cream</h2>
          <p className="text-xl font-bold">SPF42 PA+++</p>
        </div>
      </div>

      {/* Card 3 */}
      <div className="relative h-[200px] sm:h-[250px] rounded-xl overflow-hidden group">
        <Image
          src="/promo1.jpg"
          alt="promo3"
          fill
          className="object-cover group-hover:scale-105 transition duration-300"
        />
        <div className="absolute inset-0 bg-black/30 flex flex-col justify-end p-4 text-white">
          <p className="text-sm">DAILY</p>
          <h2 className="text-lg font-semibold">On-trend Products</h2>
          <p className="text-xl font-bold">Offer 70% OFF</p>
        </div>
      </div>

    </div>
        </div>
    );
};

export default PromoSection;