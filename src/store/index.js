import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart/cartSlice";
import gamesReducer from "./games/gameSlice";
import userReducer from "./user/userSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    game: gamesReducer,
    user: userReducer,
  },
});
