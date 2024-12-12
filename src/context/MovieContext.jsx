import { useContext, createContext,useEffect,useState } from "react";

const MovieContext = createContext();

export  function MovieProvider({ children }) {
  const [favoriteMovies, setFavoriteMovies] = useState([]);

useEffect(()=>{
 const storedFavs = localStorage.getItem("favorites");
 if(storedFavs) setFavoriteMovies(JSON.parse(storedFavs))
},[])


  function handleToggle(movie) {
    setFavoriteMovies((pre) => {
      if (pre.some((fav) => fav.id === movie.id)) {
    
        return pre.filter((fav) => fav.id !== movie.id);
      } else {
       
        return [...pre, movie];
      }
    });
  }

  function isFavorite(movie) {
    return favoriteMovies.some((fav) => fav.id === movie.id);
  }

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favoriteMovies));
  }, [favoriteMovies]);

  const values = {
    isFavorite,
    handleToggle,
    favoriteMovies,
  };

  return (
    <MovieContext.Provider value={values}>{children}</MovieContext.Provider>
  );
}

export function useMovieProvider() {
  return useContext(MovieContext);
}
