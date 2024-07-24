import { createSlice } from "@reduxjs/toolkit";

export const seriesSlice = createSlice({
    name: 'series',
    initialState: {
        values: [],
    },
    reducers: {
        setSeries: (state: any, action: any) => {
        state.series = action.payload;
        },
    },
    });

export const { setSeries } = seriesSlice.actions;
export default seriesSlice.reducer;
