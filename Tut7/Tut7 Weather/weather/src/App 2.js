import { useState, useEffect } from 'react';
import { NameEntry } from './NameEntry';
import MyCtx from './MyCtx';
import './App.css';

function Abc() {
  return <NameEntry />
}

function App() {
  const [ locationId, setLocationId ] = useState("");
  const [ weather, setWeather ] = useState(null);
  console.log("Called me!");

  useEffect(() => {
    if (locationId !== "") {
      fetch(`http://api.weatherapi.com/v1/current.json?key=636199d97ce2419b861204940231603&q=id:${locationId}`)
      .then(r => r.json())
      .then(j => setWeather(j));
    }
  }, [locationId]);
  
  return (
    <div className="App">
      <MyCtx.Provider value={setLocationId}>
        <Abc />
      </MyCtx.Provider>
      { weather === null ?
        <></>
      :
        <div>
          <h1>Weather results for {weather.location.name}</h1>
          <h2>{weather.current.condition.text}</h2>
          <img src={weather.current.condition.icon} />
          <h3>{weather.current.temp_c}&deg;C</h3>
        </div>
      }
      
    </div>
  );
}

export default App;
