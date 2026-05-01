import Link from "next/link";

const NotFoundPage = () => {
    return (
            <div className="min-h-[60vh] flex items-center justify-center bg-white px-6">
      <div className="text-center max-w-xl">
        
        {/* 404 Heading */}
        <h1 className="text-7xl font-bold text-gray-900">404</h1>

        {/* Title */}
        <h2 className="mt-4 text-2xl font-semibold text-gray-800">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="mt-3 text-gray-500">
          The page you are looking for might have been removed, 
          had its name changed, or is temporarily unavailable.
        </p>

        {/* Actions */}
        <div className="mt-6">
          <Link href="/">
            <button className="px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition">
              Go Home
            </button>
          </Link>
        </div>

      </div>
    </div>
    );
};

export default NotFoundPage;