import { createSlice } from "@reduxjs/toolkit";
import gameList from "../../assets/db/games";

const gamesReducer = createSlice({
  name: "games",
  initialState: {
    games: gameList,
    currentGame: null,
  },
  reducers: {
    setCurrentGame: (state, action) => {
      state.currentGame = action.payload;
    },
    setSortGames: (state, action) => {
      state.games = action.payload
    }
  },
});

export const { setCurrentGame, setSortGames } = gamesReducer.actions;
export default gamesReducer.reducer;
