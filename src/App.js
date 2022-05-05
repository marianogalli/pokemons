import logo from './logo.svg';
import './App.css';
import PokemonList from './PokemonList'
import {Route,Routes} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/pokemons" element={<PokemonList class="poke-list-container"/>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
