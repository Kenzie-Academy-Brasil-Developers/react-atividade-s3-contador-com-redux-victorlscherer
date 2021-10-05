import './App.css';
import Counter from './Components/Counter';
import Display from './Components/Display';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Display />
        <Counter />
      </header>
    </div>
  );
}

export default App;
