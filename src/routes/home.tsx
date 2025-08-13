import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-blue-400 to-indigo-600 text-white">
      <div className="text-center animate-fadeInDown">
        <h1 className="text-6xl font-extrabold mb-4">Weather App</h1>
        <p className="text-xl mb-8">Get the weather forecast for any city</p>
      </div>
      <div className="flex flex-col items-center space-y-4">
        <form method="get" action="/weather" className="flex items-center">
          <input
            type="text"
            name="city"
            placeholder="Enter a city"
            className="p-2 border rounded-l text-black"
          />
          <button type="submit" className="p-2 bg-blue-500 text-white rounded-r">
            Search
          </button>
        </form>
        <Link to="/weather/history" className="text-white hover:underline">
          View Search History
        </Link>
      </div>
    </div>
  );
}

export default Home;
