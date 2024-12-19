import styled from 'styled-components';

const Card = styled.div`
  border: 1px solid #ccc;
  padding: 1rem;
  margin-bottom: 1rem;
  width: 300px; // Adjust width as needed
`;

const Poster = styled.img`
  max-width: 100%;
  height: auto;
`;

interface Movie {
    id: number;
    title: string;
    poster: string;
    year: string;
}

interface MovieCardProps {
    movie: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  return (
    <Card>
      <Poster src={movie.poster} alt={movie.title} />
      <h3>{movie.title}</h3>
      <p>Year: {movie.year}</p>
      {/* Add more movie details here */}
    </Card>
  );
};

export default MovieCard;