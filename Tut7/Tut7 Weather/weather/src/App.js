import './App.css';
import { useState } from 'react';
import Headline from './components/Headline';
import { useWeather } from './api';
import SearchBar from './components/SearchBar';

function App() {
  const [ search, setSearch ] = useState('Brisbane');
  const { loading, headlines, error, setError } = useWeather(search);
  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="App">
      <h1>{search} Weather Forecast Today</h1>
      <SearchBar onSubmit={setSearch}/>
      {
        error != null ? <p>Something went wrong... {error.message}</p> : headlines.map(headline => <Headline key={headline.time} {...headline} />)
      }
    </div>
  );
}

export default App;
