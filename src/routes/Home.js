import Movie from "../components/Movie";
import { useEffect, useState } from "react";

function Home(){
    const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=9.0&sort_by=year")
    .then((response) => response.json())
    .then(json => {
      setMovies(json.data.movies)
      setLoading(false);
    });
  }, []);
  return <div>
    {loading ? <h1>Loading...</h1> :
      <div>
        {movies.map((movie) => (
          <Movie
            key={movie.id}
            id={movie.id}
            coverImg={movie.medium_cover_image}
            title={movie.title}
            summary={movie.summary}
            genres={movie.genres}
            rating={movie.rating}
            />
        ))}
      </div>}
  </div>;
}

export default Home;