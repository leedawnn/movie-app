import { useEffect, useState } from 'react';

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
  console.log(movies);
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {movies.map(movie => (
            <div key={movie.id}>
              <h2>{movie.title_long}</h2>
              <ul>
                {movie.genres.map(g => (
                  <li key={g}>{g}</li>
                ))}
              </ul>
              <h4>{movie.genres}</h4>
              <h4>Rating: {movie.rating}</h4>
              <h4>
                Runtime: {Math.floor(movie.runtime / 60)}h {movie.runtime % 60}m
              </h4>
              <img src={movie.medium_cover_image} alt={movie.title} />
              <p>{movie.summary}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
