import { createSlice } from "@reduxjs/toolkit";

const seriesSlice = createSlice({
  name: "series",
  initialState: {
    airingToday: null,
    onTheAir: null,
    popular: null,
    topRated: null,
  },
  reducers: {
    addAiringTodaySeries: (state, action) => {
      state.airingToday = action.payload;
    },
    addOnTheAir: (state, action) => {
      state.onTheAir = action.payload;
    },
    addPopular: (state, action) => {
      state.popular = action.payload;
    },
    addTopRated: (state, action) => {
      state.topRated = action.payload;
    },
  },
});

export const { addAiringTodaySeries, addOnTheAir, addPopular, addTopRated } =
  seriesSlice.actions;

export default seriesSlice.reducer;
