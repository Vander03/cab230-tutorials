import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import Headline from './components/Headline';
import useWeather from './api';





function App() {
  const { loading, headlines, error} = useWeather();

  if (loading) {
    <p>Loading...</p>
  }
  if (error) {
    <p>Something went wrong: {error.message}</p>
  }
  return (
    <div className="App">
      {headlines.map((headline) => (
        <Headline key={headline.time}
        icon = {headline.icon}
        time = {headline.time}
        text = {headline.text}
        temp = {headline.temp}
        wind = {headline.temp}
      />
      ))}
    </div>
  );
}

export default App;
