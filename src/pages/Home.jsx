import { useState, useEffect, useRef } from "react";
import MovieCard from "../components/MovieCard";

import "../css/Home.css";
import { getPopularMovies, getSearchedMovies } from "../services/api";

export default function Home() {
  const inputRef = useRef(null);

  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchMovies = async (fetchFunction, query = "") => {
    setIsLoading(true);
    setError("");
    try {
      const results = await fetchFunction(query);
      setMovies(results);
    } catch (err) {
      
      setError("Failed to load movies.");
    } finally {
      setIsLoading(false);
    }
  };
  //Api Calling For  loading movies in Homepage
  useEffect(() => {
    fetchMovies(getPopularMovies);
  }, []);

  // Api calling  for Search Results

  const handleSearch = async (e) => {
    e.preventDefault();

    const searchQuery = inputRef.current.value.trim();
    if (searchQuery) {
      fetchMovies(getSearchedMovies, searchQuery);
    }else{
      alert("type somthing to search")
    }
  };

  //Maping through movies and rendering

  const renderMovies = () => {
    if (movies.length === 0 && !isLoading && !error) {
      return <div className="no-results">No movies found.</div>;
    }

    return movies.map((movie) => (
      <MovieCard
        key={movie.id}
        movie={movie}
        
      />
    ));
  };

  return (
    <div className="Home">
      <form onSubmit={handleSearch}>
        <input type="text" name="text" ref={inputRef} />

        <button type="submit">Search</button>
      </form>
      {isLoading && <div className="loading">Loading......</div>}
      {error && <div className="error">{error}</div>}
      <div className="movie_grid">{renderMovies()}</div>
    </div>
  );
}
