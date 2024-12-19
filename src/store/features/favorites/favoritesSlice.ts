import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface FavoritesState {
  list: number[]; // Array of movie IDs
}

const initialState: FavoritesState = {
  list: [],
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<number>) => {
      if (!state.list.includes(action.payload)) {
        state.list.push(action.payload);
      }
    },
    removeFavorite: (state, action: PayloadAction<number>) => {
      state.list = state.list.filter((id) => id !== action.payload);
    },
    submitFavorites: (state) => {
        // Placeholder for submitting favorites
        // In a real application, you would send the state.list to the backend here
        console.log('Submitting favorites:', state.list);
        // After submitting, you might want to clear the favorites list
        state.list = [];
      },
  },
});

export const favoritesActions = favoritesSlice.actions;

// You can use this selector in your components to get the favorite movie IDs
export const selectFavoriteMovieIds = (state: RootState) => state.favorites.list;

export default favoritesSlice.reducer;