import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/store';
import styled from 'styled-components';
import { favoritesActions } from '../store/features/favorites/favoritesSlice';

const FavoritesList = styled.ul`
  /* Add styles for your favorites list */
`;

const Favorites: React.FC = () => {
  const favoriteMovieIds = useSelector((state: RootState) => state.favorites.list);
  const movies = useSelector((state: RootState) => state.movies.list);
  const dispatch = useDispatch();

  const handleRemoveFavorite = (movieId: number) => {
    dispatch(favoritesActions.removeFavorite(movieId));
  };

  // Get the details of the favorite movies
  const favoriteMovies = favoriteMovieIds.map(id => movies.find(movie => movie.id === id)).filter(movie => movie !== undefined);

  return (
    <div>
      <h2>My Favorite Movies</h2>
      <FavoritesList>
        {favoriteMovies.map(movie => (
          <li key={movie!.id}>
            {movie!.title}
            <button onClick={() => handleRemoveFavorite(movie!.id)}>
              Remove
            </button>
          </li>
        ))}
      </FavoritesList>
    </div>
  );
};

export default Favorites;