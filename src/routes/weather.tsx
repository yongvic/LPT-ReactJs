
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

export default function Weather() {
  const [searchParams] = useSearchParams();
  const city = searchParams.get("city");
  const [weather, setWeather] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (city) {
      fetch(`https://wttr.in/${city}?format=j1`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setWeather(data);
          setLoading(false);
          const history = JSON.parse(localStorage.getItem("weatherHistory") || "[]");
          if (!history.includes(city)) {
            history.push(city);
            localStorage.setItem("weatherHistory", JSON.stringify(history));
          }
        })
        .catch(() => setLoading(false));
    }
  }, [city]);

  if (!city) {
    return (
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Météo</h1>
        <form method="get" action="/weather">
          <input
            type="text"
            name="city"
            placeholder="Enter a city"
            className="p-2 border rounded"
          />
          <button type="submit" className="p-2 bg-blue-500 text-white rounded">
            Rechecher
          </button>
        </form>
      </div>
    );
  }

  if (loading) {
    return <div>Chargement...</div>;
  }

  if (!weather) {
    return <div> {"Impossible d'accéder à cette information"} {city}</div>;
  }

  return (
    <div className="p-4 bg-blue-100">
      <h1 className="text-2xl font-bold mb-4">Météo de  {city}</h1>
      <div className="flex space-x-4">
        {weather.weather.slice(0, 3).map((day: any, index: number) => (
          <div key={index} className="p-4 shadow rounded-lg">
            <p className="font-bold">{day.date}</p>
            <p>Avg Temp: {day.avgtempC}°C</p>
            <p>Max Temp: {day.maxtempC}°C</p>
            <p>Min Temp: {day.mintempC}°C</p>
            <p>{day.hourly[0].weatherDesc[0].value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
