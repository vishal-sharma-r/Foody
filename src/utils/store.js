import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";

/*
All this reducer put inside the store

*/
const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
});
export default store;
