import { useEffect, useState } from 'react';
import Movie from './Movie';

function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {movies.map(movie => (
            <Movie
              title={movie.title_long}
              genres={movie.genres}
              rating={movie.rating}
              runtime={movie.runtime}
              coverImg={movie.medium_cover_image}
              summary={movie.summary}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
