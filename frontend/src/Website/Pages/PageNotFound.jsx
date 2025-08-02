import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

function PageNotFound() {
  return (
    <div className="min-h-screen  flex flex-col items-center justify-center px-4 text-center">

      {/* Car Illustration (Transparent PNG) */}
      <img
        src="https://cdn-icons-png.flaticon.com/512/7435/7435263.png" // car PNG with transparent background
        alt="Car Not Found"
        className="w-64 h-60 mb-5 animate-pulse"
      />

      <h1 className="text-8xl font-bold text-orange-500 mb-2 animate-pulse">404</h1>
      <p className="text-xl font-semibold text-gray-800 mb-3">Page Not Found </p>
      <p className="text-gray-600 max-w-md mb-6">
        The page you’re trying to access is either out of service or never existed.  
        Let's get you back on the road!
      </p>

      <Link
        to="/"
        className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-5 py-2 rounded-full text-sm font-medium shadow transition"
      >
        <FaArrowLeft />
        Back to Homepage
      </Link>
    </div>
  );
}

export default PageNotFound;
