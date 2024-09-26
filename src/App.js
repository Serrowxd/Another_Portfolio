import logo from './logo.svg';
import './App.css';
import Button from "./Components/Button";

function App() {
  return (
    <div className="App">
      <div className="tempContainer">
        <h1> Kevin Jolley </h1>
          <Button>Normal Button</Button>
          <Button $primary>Primary Button</Button>
      </div>
    </div>
  );
}

export default App;
