import "./App.css";
import Navbar from "./components/Navbar";
import MovieCard from "./components/MovieCard";
import { data } from "./data";

function App() {
  return (
    <div className="App bg-black">
      <Navbar genre="Romantic Comedy" />
      <div className="grid p-15 grid-cols-3 px-[15px] md:grid-cols-6">
        {data.page["content-items"].content.map((item, index) => (
          <MovieCard data={item} />
        ))}
      </div>
    </div>
  );
}

export default App;
