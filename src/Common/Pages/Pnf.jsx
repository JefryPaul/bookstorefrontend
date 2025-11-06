import React from "react";
import { Link } from "react-router-dom";

function Pnf() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-gray-800">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl mb-6">Oops! Page not found.</p>
      <Link
        to="/"
        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
      >
        Go Home
      </Link>
    </div>
  );
};

export default Pnf;