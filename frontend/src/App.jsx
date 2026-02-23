import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";

function App() {
  const [games, setGames] = useState([]);
  const [search, setSearch] = useState("");

  const fetchGames = async (query = "") => {
    const res = await axios.get(
      `/api/list${
        query ? `?search=${query}` : ""
      }`
    );
    setGames(res.data);
  };

  useEffect(() => {
    fetchGames();
  }, []);

  return (
    <>
      <Navbar
        search={search}
        setSearch={setSearch}
        onSearch={() => fetchGames(search)}
      />
      <GameGrid games={games} />
    </>
  );
}

export default App;