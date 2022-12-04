import logo from './logo.svg';
import './App.css';
import FCHooksDemo from './FCHooksDemo';
import FCShowNum from './FCShowNum';
import FCSetNumFromConstext from './FCSetNumFromConstext';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <FCHooksDemo /> <br />
        <FCShowNum />
        <FCShowNum />
        <FCSetNumFromConstext />
      </header>
    </div>
  );
}

export default App;
