import "./App.css";
import MovieCard from "./components/MovieCard";
import { data } from "./data";

function App() {
  return (
    <div className="App p-15 bg-black">
      <div className="grid grid-cols-3 px-[15px] md:grid-cols-6">
        {data.page["content-items"].content.map((item, index) => (
          <MovieCard data={item} />
        ))}
      </div>
    </div>
  );
}

export default App;
