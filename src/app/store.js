import { configureStore } from "@reduxjs/toolkit";
import betsSlice from "../features/betsSlice";

export const store = configureStore({
  reducer: {
    bets: betsSlice,
  },
});
