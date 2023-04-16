import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    tableId: 1,
    account: 1000,
    minBet: 20,
    maxBet: 200,
    betName: "Mini Game",
    url: "mini-game",
    rotate: "rotate(0)",
  },
  {
    tableId: 2,
    account: 10000,
    minBet: 200,
    maxBet: 2000,
    betName: "Minor Game",
    url: "minor-game",
    rotate: "rotate(120deg)",
  },
  {
    tableId: 3,
    account: 100000,
    minBet: 2000,
    maxBet: 20000,
    betName: "Major Game",
    url: "major-game",
    rotate: "rotate(240deg)",
  },
];
export const betsSlice = createSlice({
  name: "bets",
  initialState,
  reducers: {
    bets: (state) => {
      return state;
    },
  },
});

export const { bets } = betsSlice.actions;

export default betsSlice.reducer;
