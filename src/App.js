import './App.css';
import hellWorld from './components/helloWorld';

function App() {
  const name = 'Fabiano Gostoso'

  return (
    <div className="App">
      <h1>Olá {name}</h1>
      <h1>Soma: {2+2}</h1>
      <hellWorld></hellWorld>
    </div>
  );
}

export default App;