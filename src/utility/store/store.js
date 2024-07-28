import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../slices/userSlice";
import moviesReducer from "../slices/moviesSlice";
import seriesReducer from "../slices/seriesSlice";
import gptReducer from "../slices/gptSlice";
import configSlice from "../slices/configSlice";

const store = configureStore({
  reducer: {
    user: userSlice,
    movies: moviesReducer,
    series: seriesReducer,
    gpt: gptReducer,
    config: configSlice,
  },
});

export default store;
