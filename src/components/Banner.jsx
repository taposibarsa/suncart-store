import Image from 'next/image';


const Banner = () => {
    return (

        <div className="flex flex-col md:flex-row items-stretch container mx-auto gap-4 h-auto md:h-[65vh]">

            {/* Left Image */}
            <div className="relative w-full md:w-[60%] h-[250px] sm:h-[300px] md:h-full">
                <Image
                    src="/banner1.jpg"
                    alt="hero"
                    fill
                    className="object-cover rounded-xl"
                    priority
                />
            </div>

            {/* Right Content */}
            <div className="w-full md:w-[40%] bg-blue-200 flex flex-col justify-center p-6 sm:p-8 rounded-xl">
                <h1 className="text-3xl sm:text-4xl md:text-5xl leading-tight font-bold mb-4">
                    Summer Sale <br /> 50% OFF ☀️
                </h1>

                <p className="mb-4 text-base sm:text-lg md:text-xl text-gray-700">
                    Upgrade your summer style with cool essentials
                </p>

                <button className="bg-black text-white px-6 py-2 rounded-md w-fit">
                    Shop Now
                </button>


            </div>

        </div>
    );
};

export default Banner;