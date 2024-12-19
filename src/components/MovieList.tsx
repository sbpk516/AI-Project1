import MovieCard from './MovieCard';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/store';
import { useEffect } from 'react';
import { moviesActions } from '../store/features/movies/moviesSlice';
import styled from 'styled-components';

const MovieListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

const MovieList: React.FC = () => {
  const movies = useSelector((state: RootState) => state.movies.list);
  const dispatch = useDispatch();

  useEffect(() => {
    // Placeholder for fetching movies
    const placeholderMovies = [
        { id: 1, title: "Movie A", poster: "https://via.placeholder.com/150", year: "2020" },
        { id: 2, title: "Movie B", poster: "https://via.placeholder.com/150", year: "2019" },
        { id: 3, title: "Movie C", poster: "https://via.placeholder.com/150", year: "2021" },
        { id: 4, title: "Movie D", poster: "https://via.placeholder.com/150", year: "2022" },
        { id: 5, title: "Movie E", poster: "https://via.placeholder.com/150", year: "2018" },
        { id: 6, title: "Movie F", poster: "https://via.placeholder.com/150", year: "2017" },
        { id: 7, title: "Movie G", poster: "https://via.placeholder.com/150", year: "2023" },
        { id: 8, title: "Movie H", poster: "https://via.placeholder.com/150", year: "2016" },
        { id: 9, title: "Movie I", poster: "https://via.placeholder.com/150", year: "2015" },
        { id: 10, title: "Movie J", poster: "https://via.placeholder.com/150", year: "2024" },
      ];
    dispatch(moviesActions.fetchMoviesSuccess(placeholderMovies));
    // In the next steps, you will replace this with actual API call to fetch movies
  }, [dispatch]);

  return (
    <div>
      <h2>Available Movies</h2>
      <MovieListWrapper>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </MovieListWrapper>
    </div>
  );
};

export default MovieList;