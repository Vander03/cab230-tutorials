import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function Headline(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <LikeCounter />
    </div>
  )
}

function LikeCounter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Overall Likes: {count}</p>
      <button onClick={() => setCount( (oldCount) => oldCount + 1)}>Like</button>
      <button onClick={() => setCount((oldCount) => oldCount - 1)}>Dislike</button>
    </div>
  )
}


function App() {
  return (
    <div className="App">
    <Headline title="Popularity Contest" />
    </div>
  );
}

export default App;
