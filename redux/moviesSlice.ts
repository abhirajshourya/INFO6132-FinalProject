import { createSlice } from "@reduxjs/toolkit";

export const moviesSlice = createSlice({
    name: 'movies',
    initialState: {
        values: [],
    },
    reducers: {
        setMovies: (state: any, action: any) => {
        state.movies = action.payload;
        },
    },
    });

export const { setMovies } = moviesSlice.actions;
export default moviesSlice.reducer;
