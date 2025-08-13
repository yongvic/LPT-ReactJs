import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white/80 backdrop-blur-md shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-2xl font-bold text-gray-800">
            LE-CHOCO
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-600 hover:text-blue-500 transition-colors duration-300">
              Accueil
            </Link>
            <Link to="/about" className="text-gray-600 hover:text-blue-500 transition-colors duration-300">
              À propos
            </Link>
            <Link to="/contact" className="text-gray-600 hover:text-blue-500 transition-colors duration-300">
              Contact
            </Link>
            <Link to="/projects" className="text-gray-600 hover:text-blue-500 transition-colors duration-300">
              Projets
            </Link>
            <Link to="/notes" className="text-gray-600 hover:text-blue-500 transition-colors duration-300">
              Notes
            </Link>
            <Link to="/blog" className="text-gray-600 hover:text-blue-500 transition-colors duration-300">
              Blog
            </Link>
            <Link to="/pokemons" className="text-gray-600 hover:text-blue-500 transition-colors duration-300">
              Pokémons
            </Link>
            <Link to="/jokes" className="text-gray-600 hover:text-blue-500 transition-colors duration-300">
              Blagues
            </Link>
            <Link to="/jokes/favorites" className="text-gray-600 hover:text-blue-500 transition-colors duration-300">
              Favoris
            </Link>
            <Link to="/quotes" className="text-gray-600 hover:text-blue-500 transition-colors duration-300">
              Citations
            </Link>
            <Link to="/weather" className="text-gray-600 hover:text-blue-500 transition-colors duration-300">
              Météo
            </Link>
            {/* <Link to="/signup" className="text-gray-600 hover:text-blue-500 transition-colors duration-300">
              Sign Up
            </Link> */}
          </div>
          <button
            className="md:hidden flex items-center"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden px-4 pt-2 pb-4 space-y-2">
          <Link to="/" className="block text-gray-600 hover:text-blue-500 transition-colors duration-300" onClick={() => setIsOpen(false)}>
            Accueil
          </Link>
          <Link to="/about" className="block text-gray-600 hover:text-blue-500 transition-colors duration-300" onClick={() => setIsOpen(false)}>
            À propos
          </Link>
          <Link to="/contact" className="block text-gray-600 hover:text-blue-500 transition-colors duration-300" onClick={() => setIsOpen(false)}>
            Contact
          </Link>
          <Link to="/projects" className="block text-gray-600 hover:text-blue-500 transition-colors duration-300" onClick={() => setIsOpen(false)}>
            Projets
          </Link>
          <Link to="/notes" className="block text-gray-600 hover:text-blue-500 transition-colors duration-300" onClick={() => setIsOpen(false)}>
            Notes
          </Link>
          <Link to="/blog" className="block text-gray-600 hover:text-blue-500 transition-colors duration-300" onClick={() => setIsOpen(false)}>
            Blog
          </Link>
          <Link to="/pokemons" className="block text-gray-600 hover:text-blue-500 transition-colors duration-300" onClick={() => setIsOpen(false)}>
            Pokémons
          </Link>
          <Link to="/jokes" className="block text-gray-600 hover:text-blue-500 transition-colors duration-300" onClick={() => setIsOpen(false)}>
            Blagues
          </Link>
          <Link to="/jokes/favorites" className="block text-gray-600 hover:text-blue-500 transition-colors duration-300" onClick={() => setIsOpen(false)}>
            Favoris
          </Link>
          <Link to="/quotes" className="block text-gray-600 hover:text-blue-500 transition-colors duration-300" onClick={() => setIsOpen(false)}>
            Quotes
          </Link>
          <Link to="/weather" className="block text-gray-600 hover:text-blue-500 transition-colors duration-300" onClick={() => setIsOpen(false)}>
            Météo
          </Link>
          <Link to="/signup" className="block text-gray-600 hover:text-blue-500 transition-colors duration-300" onClick={() => setIsOpen(false)}>
            Sign Up
          </Link>
        </div>
      )}
    </nav>
  );
}
