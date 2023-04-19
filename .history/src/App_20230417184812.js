import logo from './logo.svg';
import './App.css';
import { PruebasComponentes } from './PruebasComponentes';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Practicando el UseEffect</h1>
       <PruebasComponentes/>
      </header>
    </div>
  );
}

export default App;
