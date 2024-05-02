import logo from './logo.svg';
import './App.css';
import { useState } from 'react';



function App() {
  const [name, setName] = useState('');
  const [error, setError] = useState(null);

  return (
    <div className="App">
        {
          name != '' ? <h1>Name is: {name}</h1> : null
        }
      <label htmlFor='name'></label>
      <input
        type="text"
        name="name"
        id="name"
        value={name}
        onChange={(event) => {
          const { value } = event.target; // use destructuring to get the value
          if (/[0-9]/.test(value)) {
            setError("Names shouldn't have numbers");
            setName(value);
          } else {
            setError(null);
            setName(value);
          }
        
          /*
          if (!/[0-9]/.test(value)) {
            setName(value);
          }
          */
        }}/>
        {
          error != null ? <p>Error: {error}</p> : null
        }


    </div>
  );
}

export default App;
