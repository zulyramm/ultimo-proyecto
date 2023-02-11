import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../configs/axiosInstance";

export const fetchReadContactData = createAsyncThunk(
  'contact/fetchReadContactData',
  async (_, { rejectWithValue }) => {
    try {
      const options = {
        method: 'GET',
        url: 'http://localhost:1337/api/contactos?populate=imagen,titulo'
      };
      const { data } = await axiosInstance(options);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);