import { useState, useEffect } from "react";

interface Joke {
  id: number;
  type: string;
  setup: string;
  punchline: string;
}

export default function FavoriteJokes() {
  const [favorites, setFavorites] = useState<Joke[]>([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favoriteJokes") || "[]");
    setFavorites(storedFavorites);
  }, []);

  const removeFromFavorites = (id: number) => {
    const updatedFavorites = favorites.filter((joke) => joke.id !== id);
    setFavorites(updatedFavorites);
    localStorage.setItem("favoriteJokes", JSON.stringify(updatedFavorites));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Blagues Favorites</h1>
      {favorites.length === 0 ? (
        <p className="text-center text-gray-500">Vous n'avez aucune blague favorite pour le moment.</p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {favorites.map((joke) => (
            <div key={joke.id} className="bg-white shadow-lg rounded-lg p-6">
              <p className="text-xl mb-4">{joke.setup}</p>
              <p className="text-2xl font-semibold text-blue-600">{joke.punchline}</p>
              <div className="mt-6 text-center">
                <button
                  onClick={() => removeFromFavorites(joke.id)}
                  className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
                >
                  Supprimer
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
