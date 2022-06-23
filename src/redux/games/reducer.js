import { createSlice } from "@reduxjs/toolkit";

const gamesReducer = createSlice({
    name: 'games',
    initialState: {
        currentGame: null
    },
    reducers: {
        setCurrentGame: (state, action) => {
            state.currentGame = action.payload
        }
    }
})

export const { setCurrentGame } = gamesReducer.actions;
export default gamesReducer.reducer;