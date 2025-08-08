import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

interface Pokemon {
  name: string;
  url: string;
}

const PokemonsPage = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchPokemons = async () => {
      setLoading(true);
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=1000`);
        const data = await response.json();
        setPokemons(data.results);
      } catch (error) {
        console.error('Error fetching pokemons:', error);
      }
      setLoading(false);
    };

    fetchPokemons();
  }, []);

  const filteredPokemons = pokemons.filter(pokemon =>
    pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const pokemonsPerPage = 10;
  const totalPages = Math.ceil(filteredPokemons.length / pokemonsPerPage);
  const paginatedPokemons = filteredPokemons.slice((page - 1) * pokemonsPerPage, page * pokemonsPerPage);

  if (loading) {
    return <div className="flex justify-center items-center h-screen">Chargement...</div>;
  }

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-5xl font-bold my-8 text-center text-blue-600 animate-fadeInDown">Pokémon Ville </h1>
        <input
          type="text"
          placeholder="Recherché un Pokémon..."
          className="w-full p-4 mb-8 border-2 border-blue-300 rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {paginatedPokemons.map((pokemon, index) => (
            <Link
              to={`/pokemons/${pokemon.name}`}
              key={pokemon.name}
              className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center justify-center transform hover:scale-105 hover:shadow-xl transition-all duration-300 animate-fadeInUp"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.url.split('/')[6]}.png`}
                alt={pokemon.name}
                className="w-24 h-24"
              />
              <p className="text-center capitalize font-semibold mt-2 text-gray-700">{pokemon.name}</p>
            </Link>
          ))}
        </div>
        <div className="flex justify-center items-center mt-8">
          <button
            disabled={page === 1}
            onClick={() => setPage(page - 1)}
            className="px-6 py-3 mx-2 bg-blue-500 text-white rounded-full shadow-md hover:bg-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed transition-all duration-300"
          >
            Avant
          </button>
          <span className="px-6 py-3 font-bold text-lg text-gray-700">{page} / {totalPages}</span>
          <button
            disabled={page === totalPages}
            onClick={() => setPage(page + 1)}
            className="px-6 py-3 mx-2 bg-blue-500 text-white rounded-full shadow-md hover:bg-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed transition-all duration-300"
          >
            Après
          </button>
        </div>
      </div>
    </div>
  );
};

export default PokemonsPage;
