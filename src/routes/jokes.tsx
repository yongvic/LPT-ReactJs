import { useState, useEffect } from "react";

interface Joke {
  id: number;
  type: string;
  setup: string;
  punchline: string;
}

export default function Jokes() {
  const [joke, setJoke] = useState<Joke | null>(null);
  const [error, setError] = useState<string | null>(null);

  const fetchJoke = async () => {
    try {
      const response = await fetch("https://v2.jokeapi.dev/joke/Any?lang=fr");
      if (!response.ok) {
        throw new Error("Failed to fetch joke");
      }
      const data = await response.json();
      setJoke(data);
    } catch (error) {
      setError("Error fetching joke");
    }
  };

  useEffect(() => {
    fetchJoke();
  }, []);

  const saveToFavorites = () => {
    if (joke) {
      const favorites = JSON.parse(localStorage.getItem("favoriteJokes") || "[]");
      if (!favorites.some((fav: Joke) => fav.id === joke.id)) {
        localStorage.setItem("favoriteJokes", JSON.stringify([...favorites, joke]));
        alert("Blague sauvegardée !");
      } else {
        alert("Cette blague est déjà dans vos favoris.");
      }
    }
  };

  const copyToClipboard = () => {
    if (joke) {
      navigator.clipboard.writeText(`${joke.setup} - ${joke.punchline}`);
      alert("Blague copiée !");
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Blague Aléatoire</h1>
      {error && <p className="text-red-500 text-center">{error}</p>}
      {joke && (
        <div className="bg-white shadow-lg rounded-lg p-6 max-w-md mx-auto">
          <p className="text-xl mb-4">{joke.setup}</p>
          <p className="text-2xl font-semibold text-blue-600">{joke.punchline}</p>
          <div className="mt-6 flex justify-center space-x-4">
            <button
              onClick={saveToFavorites}
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            >
              Sauvegarder
            </button>
            <button
              onClick={copyToClipboard}
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
            >
              Copier
            </button>
          </div>
        </div>
      )}
      <div className="text-center mt-8">
        <button
          onClick={fetchJoke}
          className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-6 rounded-full"
        >
          Nouvelle Blague
        </button>
      </div>
    </div>
  );
}
