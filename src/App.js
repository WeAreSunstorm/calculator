import logo from './logo.svg';
import './App.css';
import Calculator from "./components/calculator/calculator"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
      </header>
<Calculator></Calculator>
    </div>
  );
}

export default App;
