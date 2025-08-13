
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function WeatherHistory() {
  const [history, setHistory] = useState<string[]>([]);

  useEffect(() => {
    const storedHistory = JSON.parse(
      localStorage.getItem("weatherHistory") || "[]"
    );
    setHistory(storedHistory);
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Historique des recherches météorologique</h1>
      <ul className="list-disc pl-5">
        {history.map((city) => (
          <li key={city}>
            <Link to={`/weather?city=${city}`} className="text-blue-500">
              {city}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
