import { createSlice } from "@reduxjs/toolkit";
import { fetchReadBestSellersProducts, fetchReadHeroProducts } from "../thunks/homeThunk";

const initialState = {
  loading: false,
  error: {},
  heroProducts: [],
  bestSellersProducts: []
};

export const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchReadHeroProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchReadHeroProducts.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.error = {};
      state.heroProducts = payload;
    });
    builder.addCase(fetchReadHeroProducts.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
      state.heroProducts = [];
    });
    builder.addCase(fetchReadBestSellersProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchReadBestSellersProducts.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.error = {};
      state.bestSellersProducts = payload;
    });
    builder.addCase(fetchReadBestSellersProducts.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
      state.bestSellersProducts = [];
    });
  }
});

export default homeSlice.reducer;