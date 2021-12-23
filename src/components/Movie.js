import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Movie({ id, title, genres, rating, runtime, coverImg, summary }) {
  return (
    <div>
      <Link to={`/movie/${id}`}>{title}</Link>
      <ul>
        {genres.map(g => (
          <li key={g}>{g}</li>
        ))}
      </ul>
      <h4>Rating: {rating}</h4>
      <h4>
        Runtime: {Math.floor(runtime / 60)}h {runtime % 60}m
      </h4>
      <img src={coverImg} alt={title} />
      <p>{summary}</p>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  rating: PropTypes.number.isRequired,
  runtime: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired
};

export default Movie;
