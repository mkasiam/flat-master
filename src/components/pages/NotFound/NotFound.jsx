import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-4xl font-semibold text-gray-800">
          404 - Page Not Found
        </h1>
        <p className="mt-4 text-gray-600">
          Sorry, the page you are looking for does not exist.
        </p>
        <div className="mt-6">
          <Link to="/" className="text-blue-500 hover:underline">
            Go back to the Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
