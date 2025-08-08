import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-blue-400 to-indigo-600 text-white">
      <div className="text-center animate-fadeInDown">
        <h1 className="text-6xl font-extrabold mb-4">Welcome to My App</h1>
        <p className="text-xl mb-8">Your ultimate guide to the world of Pokémon and Jokes</p>
      </div>
      <div className="flex space-x-4">
        <Link
          to="/pokemons"
          className="bg-yellow-400 text-gray-800 font-bold py-4 px-10 rounded-full hover:bg-yellow-500 transition-transform transform hover:scale-110 duration-300 shadow-lg animate-bounce"
        >
          Explore Pokémon
        </Link>
        <Link
          to="/jokes"
          className="bg-green-400 text-gray-800 font-bold py-4 px-10 rounded-full hover:bg-green-500 transition-transform transform hover:scale-110 duration-300 shadow-lg animate-bounce"
        >
          Get a Joke
        </Link>
      </div>
    </div>
  );
}

export default Home;
