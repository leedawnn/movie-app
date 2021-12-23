import PropTypes from 'prop-types';

function MovieDetail({ coverImg, title, description, like }) {
  return (
    <div>
      <img src={coverImg} alt={title} />
      <h1>{title}</h1>
      <h3>좋아요 : {like}</h3>
      <p>{description}</p>
    </div>
  );
}

MovieDetail.propTypes = {
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default MovieDetail;
