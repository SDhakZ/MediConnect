import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center  h-[60svh] overflow-x-hidden">
      <div className="px-6 text-center">
        <h1 className="text-6xl font-bold text-gray-800">404</h1>
        <p className="mt-4 text-xl text-gray-600">Oops! Page not found.</p>
        <p className="mt-2 text-gray-500">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-block px-6 py-2 mt-6 text-white transition bg-blue-600 rounded-md hover:bg-blue-700"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}
