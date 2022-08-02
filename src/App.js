import logo from './logo.svg';
import './App.css';
import CharactersList from './pages/CharactersList';
import { Routes, Route } from "react-router-dom";
import CharactersDetail from './pages/CharactersDeteil';
import Search from './pages/Search';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<CharactersList/>}/>
        <Route path="/search" element={<Search/>}/>
        <Route path="/:id" element={<CharactersDetail/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
