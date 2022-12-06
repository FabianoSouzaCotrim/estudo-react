import './App.css';
import BtnSomar from './components/HelloWorld.js';

function App() {
  const name = 'Fabiano'

  return (
    <div className="App">
      <h1>Olá {name}</h1>
      <h1>Soma: {2+2}</h1>
      <BtnSomar/>
    </div>
  );
}

export default App;