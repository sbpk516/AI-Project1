import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch } from '../../store';
import { RootState } from '../../store';

interface Movie {
  id: number;
  title: string;
  poster: string;
  year: string;
}

interface MoviesState {
  list: Movie[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: MoviesState = {
  list: [],
  status: 'idle',
  error: null,
};

// Placeholder for the API call (replace with your actual API call)
const fetchMoviesFromAPI = async (): Promise<Movie[]> => {
  // Simulate an API call with a delay
  await new Promise((resolve) => setTimeout(resolve, 500));

  // Return some mock movie data (replace with your actual API response)
  return [
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
};

// Async thunk to fetch movies
export const fetchMovies = createAsyncThunk<
  Movie[], // Return type of the payload creator
  void, // Argument type for the payload creator (none in this case)
  {
    dispatch: AppDispatch;
    state: RootState;
  }
>('movies/fetchMovies', async (_, thunkAPI) => {
  try {
    const response = await fetchMoviesFromAPI();
    return response; // Automatically becomes the fulfilled action payload
  } catch (error) {
    const message = (error instanceof Error ? error.message : 'An error occurred');
    return thunkAPI.rejectWithValue(message); // Becomes the rejected action payload
  }
});

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    // You can add other synchronous reducers here if needed
    fetchMoviesSuccess: (state, action: PayloadAction<Movie[]>) => {
        state.list = action.payload;
        state.status = 'succeeded';
        state.error = null;
      },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchMovies.fulfilled, (state, action: PayloadAction<Movie[]>) => {
        state.status = 'succeeded';
        state.list = action.payload;
        state.error = null;
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string; // Cast payload to string
      });
  },
});

export const moviesActions = moviesSlice.actions;
export default moviesSlice.reducer;


