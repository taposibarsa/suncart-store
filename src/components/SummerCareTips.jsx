import Image from "next/image";

const tips = [
    {
        icon: "☀️",
        title: "Apply SPF daily",
        desc: "Use SPF 50+ sunscreen 20 minutes before going outside and reapply every 2 hours.",
        bg: "#E1F5EE",
        color: "#0F6E56",
    },
    {
        icon: "💧",
        title: "Stay hydrated",
        desc: "Drink at least 8 glasses of water daily. Add lemon or cucumber for extra freshness.",
        bg: "#E6F1FB",
        color: "#185FA5",
    },
    {
        icon: "🧴",
        title: "Moisturize skin",
        desc: "Use a light, oil-free moisturizer after showering to lock in hydration.",
        bg: "#FAEEDA",
        color: "#854F0B",
    },
    {
        icon: "🕶️",
        title: "Protect your eyes",
        desc: "Wear UV-blocking sunglasses to shield eyes from harmful rays.",
        bg: "#FAECE7",
        color: "#993C1D",
    },
];

export default function SummerCareTips() {
    return (
        <section className="py-14 px-4 md:px-10 bg-gray-50 ">

            <div className="container mx-auto">
                {/* image model */}

                <div className="relative w-full h-[45vh] sm:h-[55vh] md:h-[60vh] lg:h-[65vh] rounded-xl overflow-hidden flex items-center justify-center bg-gray-50 mb-15">

                    <Image
                        src="/model.jpg"
                        alt="model under sun"
                        fill
                        className="object-contain"
                        priority
                    />

                </div>

                {/* Header */}
                <div className="mb-10 text-center ">
                    <p className="text-xs uppercase tracking-widest text-gray-400 mb-2">
                        Tips
                    </p>
                    <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
                        Summer Care Tips
                    </h2>
                    <p className="text-gray-500 mt-2 text-sm  text-center ">
                        Stay fresh and protected during hot summer days with these essential care tips.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                    {tips.map((tip) => (
                        <div
                            key={tip.title}
                            className="group bg-white rounded-2xl p-5 shadow-sm hover:shadow-lg transition duration-300 border border-gray-100"
                        >
                            {/* Icon */}
                            <div
                                className="w-12 h-12 rounded-xl flex items-center justify-center text-xl mb-4 transition group-hover:scale-110"
                                style={{ background: tip.bg, color: tip.color }}
                            >
                                {tip.icon}
                            </div>

                            {/* Content */}
                            <h3 className="text-base font-semibold text-gray-900 mb-2">
                                {tip.title}
                            </h3>
                            <p className="text-sm text-gray-500 leading-relaxed">
                                {tip.desc}
                            </p>

                            {/* Hover line */}
                            <div className="mt-4 h-[2px] w-0 bg-gray-900 group-hover:w-full transition-all duration-300"></div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}