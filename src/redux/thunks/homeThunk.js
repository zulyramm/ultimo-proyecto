import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../configs/axiosInstance";

export const fetchReadHeroProducts = createAsyncThunk(
  'home/fetchReadHeroProducts',
  async (_, { rejectWithValue }) => {
    try {
      const options = {
        method: 'GET',
        // url: `/productos?filters[posicion][slug][$eq]=cabecera&populate=subcategoria,marca,imagen`
        url:`http://localhost:1337/api/portadas?filters[slug][$eq]=portada&populate=nombrePortada,imagen`
      };
      const { data } = await axiosInstance(options);
      console.log("data.data")
      return data.data ?? [];
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const fetchReadBestSellersProducts = createAsyncThunk(
  'home/fetchReadBestSellersProducts',
  async (_, { rejectWithValue }) => {
    try {
      const options = {
        method: 'GET',
        url:`http://localhost:1337/api/portadas?filters[slug][$eq]=portada&populate=nombrePortada,imagen`
      };
      const { data } = await axiosInstance(options);
      return data.data ?? [];
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);