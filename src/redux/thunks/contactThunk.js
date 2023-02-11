import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../configs/axiosInstance";

export const fetchReadContactData = createAsyncThunk(
  'contact/fetchReadContactData',
  async (_, { rejectWithValue }) => {
    try {
      const options = {
        method: 'GET',
        url: '/contacto?populate=componentes,imagen,hero.banner,formulario'
      };
      const { data } = await axiosInstance(options);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);