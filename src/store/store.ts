import { configureStore } from '@reduxjs/toolkit';
import userReducer from './features/user/userSlice';
import moviesReducer from './features/movies/moviesSlice';
import favoritesReducer from './features/favorites/favoritesSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
    favorites: favoritesReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
