import { createSlice } from "@reduxjs/toolkit";

const seriesSlice = createSlice({
  name: "series",
  initialState: {
    airingTodayTV: null,
    trendingTV: null,
    topRatedTV: null,
  },
  reducers: {
    addAiringTodayTV: (state, action) => {
      state.airingTodayTV = action.payload;
    },
    addTrendingTV: (state, action) => {
      state.trendingTV = action.payload;
    },
    addTopRatedTV: (state, action) => {
      state.topRatedTV = action.payload;
    },
  },
});

export const { addAiringTodayTV, addTrendingTV, addTopRatedTV } =
  seriesSlice.actions;

export default seriesSlice.reducer;
