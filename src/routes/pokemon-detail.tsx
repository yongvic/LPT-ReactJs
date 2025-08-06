import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

interface PokemonDetails {
  name: string;
  sprites: {
    front_default: string;
  };
  height: number;
  weight: number;
  types: {
    type: {
      name: string;
    };
  }[];
}

const typeColors: { [key: string]: string } = {
  fire: 'bg-red-500',
  water: 'bg-blue-500',
  grass: 'bg-green-500',
  electric: 'bg-yellow-500',
  psychic: 'bg-purple-500',
  ice: 'bg-teal-200',
  dragon: 'bg-indigo-500',
  dark: 'bg-gray-800',
  fairy: 'bg-pink-300',
  normal: 'bg-gray-400',
  fighting: 'bg-orange-700',
  flying: 'bg-indigo-300',
  poison: 'bg-purple-700',
  ground: 'bg-yellow-700',
  rock: 'bg-yellow-800',
  bug: 'bg-lime-500',
  ghost: 'bg-indigo-800',
  steel: 'bg-gray-500',
};

const PokemonDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [pokemon, setPokemon] = useState<PokemonDetails | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPokemon = async () => {
      setLoading(true);
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const data = await response.json();
        setPokemon(data);
      } catch (error) {
        console.error('Error fetching pokemon details:', error);
      }
      setLoading(false);
    };

    if (id) {
      fetchPokemon();
    }
  }, [id]);

  if (loading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  if (!pokemon) {
    return <div className="flex justify-center items-center h-screen">Pokémon Introuvable</div>;
  }

  const primaryType = pokemon.types[0].type.name;
  const bgColor = typeColors[primaryType] || 'bg-gray-200';

  return (
    <div className={`min-h-screen ${bgColor} text-white transition-colors duration-500`}>
      <div className="container mx-auto px-4 py-8">
        <Link to="/pokemons" className="bg-white text-black py-2 px-4 rounded-full hover:bg-gray-200 transition-colors duration-300 inline-block mb-4">
          &larr; Retour
        </Link>
        <div className="bg-white/20 backdrop-blur-md rounded-lg shadow-lg p-8 animate-fadeIn">
          <div className="flex flex-col md:flex-row items-center">
            <img
              src={pokemon.sprites.front_default}
              alt={pokemon.name}
              className="w-48 h-48 transform hover:scale-110 transition-transform duration-300"
            />
            <div className="ml-0 md:ml-8 mt-4 md:mt-0 text-center md:text-left">
              <h1 className="text-5xl font-bold capitalize">{pokemon.name}</h1>
              <div className="mt-4">
                <p className="text-xl"><strong>Hauteur:</strong> {pokemon.height / 10} m</p>
                <p className="text-xl"><strong>Largeur:</strong> {pokemon.weight / 10} kg</p>
                <p className="text-xl">
                  <strong>Types:</strong>{' '}
                  {pokemon.types.map((t) => (
                    <span key={t.type.name} className={`px-3 py-1 rounded-full text-sm font-semibold mr-2 ${typeColors[t.type.name] || 'bg-gray-500'}`}>
                      {t.type.name}
                    </span>
                  ))}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetailPage;
