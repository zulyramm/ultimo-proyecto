import { configureStore } from "@reduxjs/toolkit";
import aboutReducer from "./slices/aboutUsSlice";
import contactReducer from "./slices/contactSlice";
import homeReducer from "./slices/homeSlice";
import productsReducer from "./slices/productsSlice";

export const store = configureStore({
  reducer: {
    home: homeReducer,
    products: productsReducer,
    aboutUs: aboutReducer,
    contact: contactReducer
  }
});