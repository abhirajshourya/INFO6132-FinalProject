import { configureStore } from "@reduxjs/toolkit";
import React from "react";
import { Provider } from "react-redux";
import moviesReducer from "./moviesSlice";
import seriesReducer from "./seriesSlice";

// Configure the Redux store
export const store = configureStore({
    reducer: {
        movies: moviesReducer,
        series: seriesReducer
    },
});

export const StoreContext = React.createContext(store);

export const StoreProvider = ({ children }: { children: React.ReactNode }) => {
    return (
      <StoreContext.Provider value={store}>
        <Provider store={store}>{children}</Provider>
      </StoreContext.Provider>
    );
};


