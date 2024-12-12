import MovieCard from "../components/MovieCard";
import { useMovieProvider } from "../context/MovieContext";
import "../css/favorite.css";

export default function Favorites() {
  const { favoriteMovies } = useMovieProvider();

  // const renderMovies = () => {
  //   if (!favoriteMovies ||  favoriteMovies.length === 0) {
  //     return <div className="no-results">No favorite movies found.</div>;
  //   }

  //   return  favoriteMovies.map((movie) => (
  //     <MovieCard key={movie.id} movie={movie} />
  //   ));
  // };

  // return <div className="favorite_movies-grid">{renderMovies()}</div>;

  console.log(favoriteMovies)

  if (!favoriteMovies.length <=0) {
    return (
      <div className="favorite_movies-grid">
        {favoriteMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    );
  }

  return (
    <div className="favorites-empty">
      <h2>No Favorite Movies Yet</h2>
      <p>Start adding movies to your favorites and they will appear here!</p>
    </div>
  );
}
