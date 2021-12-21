function Movie({ title, genres, rating, runtime, coverImg, summary }) {
  return (
    <div>
      <h2>{title}</h2>
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

export default Movie;
