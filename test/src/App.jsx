import React, { useState, useEffect } from 'react';

function App() {
  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const url = 'https://flight-data4.p.rapidapi.com/get_airline_flights?airline=RYR';
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': 'ce0f83066emsh934fbd0a8ba5fd4p12fb1djsn42488df0c8b4',
          'X-RapidAPI-Host': 'flight-data4.p.rapidapi.com'
        }
      };

      try {
        const response = await fetch(url, options);
        const data = await response.json();
        setFlights(data);
        setLoading(false);
      } catch (error) {
        console.error('Error al obtener datos:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {loading ? (
        <p>Cargando...</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Vuelo</th>
              <th>Origen</th>
              <th>Destino</th>
              <th>Altitud</th>
              <th>Velocidad en Tierra</th>
              <th>Rumbo</th>
              {/* Agrega más encabezados según los datos que quieras mostrar */}
            </tr>
          </thead>
          <tbody>
            {flights.map((flight, index) => (
              <tr key={index}>
                <td>{flight.flight}</td>
                <td>{flight.departure}</td>
                <td>{flight.arrival}</td>
                <td>{flight.altitude}</td>
                <td>{flight.groundspeed}</td>
                <td>{flight.heading}</td>
                {/* Agrega más celdas según los datos que quieras mostrar */}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default App;
