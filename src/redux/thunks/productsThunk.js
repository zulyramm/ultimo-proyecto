import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../configs/axiosInstance";

export const fetchReadProducts = createAsyncThunk(
  'products/fetchReadProducts',
  async ({ productsPage, productsPageSize }, { rejectWithValue }) => {
    try {
      const options = {
        method: 'GET',
        // url: `/productos?pagination[page]=${productsPage}&pagination[pageSize]=${productsPageSize}&populate=marca,imagen&sort=id%3Adesc`
          url: `http://localhost:1337/api/productos?populate=nombre,imagen`
      };
      const { data } = await axiosInstance(options);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const fetchReadProduct = createAsyncThunk(
  'products/fetchReadProduct',
  async (slug, { rejectWithValue }) => {
    try {
      const options = {
        method: 'GET',
        // url: `/productos?filters[slug][$eq]=${slug}&populate=subcategoria,especificaciones,marca,imagen,ficha_tecnica`
        url:`http://localhost:1337/api/productos?filters[slug][$eq]=produ&populate=nombre,imagen,precio,slug`
      };
      const { data } = await axiosInstance(options);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);