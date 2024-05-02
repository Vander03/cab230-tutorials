import logo from './logo.svg';
import './App.css';

function AnimalComponent(props) {
  return (
    <div>
      <h1><em>{props.name}</em></h1>
      <p><b>{props.number}</b></p>
      <p><b>{props.eats}</b></p>
    </div>
  )
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {animals.map(animal => (
            <AnimalComponent {...animal} />
          ))}
        </p>
      </header>
    </div>
  );
}

export default App;
const animals = [
  {
    name: "Lion",
    number: 3,
    eats: ["zebra", "antelope", "buffalo", "hippopotamus"]
  },
  {
    name: "Tiger",
    number: 5,
    eats: ["moose", "deer", "buffalo"]
  },
  {
    name: "Giraffe",
    number: 6,
    eats: ["leaves", "twigs"]
  },
  {
    name: "Elephant",
    number: 4,
    eats: ["grass", "leaves", "flowers", "fruit"]
  },
  {
    name: "Monkey",
    number: 100,
    eats: ["fruit", "leaves", "vegetables", "insects"]
  },
  {
    name: "Lemur",
    number: 100100,
    eats: ["fruit", "leaves", "insects"]
  },
  {
    name: "Rhinoceros",
    number: 100100100100100100100,
    eats: ["grass", "shoots", "leaves", "berries"]
  }
];

