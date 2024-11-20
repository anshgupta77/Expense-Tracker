import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <div className="bg-white max-w-2xl w-full shadow-lg rounded-lg p-8">
        <h1 className="text-4xl font-bold text-blue-800 mb-4 text-center">
          Welcome to ExpenseTracker
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed">
          ExpenseTracker is a simple and efficient tool designed to help you 
          manage your personal finances. With this application, you can:
        </p>
        <ul className="list-disc list-inside text-gray-700 mt-4">
          <li>Track your daily expenses effortlessly.</li>
          <li>Categorize spending for better financial insight.</li>
          <li>Edit, delete, and manage records with ease.</li>
        </ul>
        <p className="text-lg text-gray-700 mt-4">
          Start your journey toward better financial health by logging your
          expenses and monitoring your spending patterns. Our intuitive interface
          ensures that managing your money is easier than ever.
        </p>
        <Link to="/add" className="mt-6 flex justify-center">
          <button className="px-6 py-3 bg-blue-800 text-white text-lg font-semibold rounded-md shadow-md hover:bg-blue-700">
            Get Started
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
