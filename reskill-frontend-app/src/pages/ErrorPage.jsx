import React from "react";

function ErrorPage() {
  return (
    <div className="text-center p-20">
      <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
      <p className="text-2xl text-gray-600 mb-8">
        Oops! The page you are looking for doesn't exist.
      </p>
      <a
        href="/"
        className="bg-black text-white px-6 py-3 rounded-lg shadow hover:bg-purple-500  hover:text-white duration-300"
      >
        Go Back Home
      </a>
    </div>
  );
}

export default ErrorPage;
