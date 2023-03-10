import api from "./api/axiosConfig.js";
import { useState, useEffect } from "react";

function App() {
  const [movies, setMovies] = useState();

  const getMovies = async () => {
    try {
      const response = await api.get("/api/v1/movies");
      console.log(response.data);
      setMovies(response.data);
    } catch(err) {
      console.log(err);
    }
  };

  useEffect(() =>{
    getMovies();
  }, [])

  return (
    <div className="App">
      <header className="App-header">Hello</header>
    </div>
  );
}

export default App;
