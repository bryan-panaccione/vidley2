import logo from "./cuppy.png";
import "./App.css";
import MovieCard from "./components/movieCard";
import MovieAlbum from "./components/movieAlbum";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>AHHHHHHHHHHHHHHH</p>
        <div>
          <MovieAlbum />
        </div>
      </header>
    </div>
  );
}

export default App;
