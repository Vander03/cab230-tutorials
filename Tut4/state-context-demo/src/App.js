import { useState, useEffect } from 'react';
import { NameEntry } from './NameEntry';
import MyCtx from './MyCtx';
import './App.css';

function Abc() {
  return <NameEntry />
}

function App() {
  const [ name, setName ] = useState("");
  console.log("Called me!");

  useEffect(() => {
    if (name !== "") {
      
    }
  }, [name]);
  
  return (
    <div className="App">
      <MyCtx.Provider value={setName}>
        <Abc />
      </MyCtx.Provider>
      <h1>Hello {name}</h1>
    </div>
  );
}

export default App;
