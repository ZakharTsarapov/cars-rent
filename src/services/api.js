import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://649ade98bf7c145d0239a19c.mockapi.io';

export const getAllCars = createAsyncThunk(
  "cars/getAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/Advert");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  }
)

export const getCars = createAsyncThunk(
  "cars/getMore",
  async (page, thunkAPI) => {
    try {
      const response = await axios.get(`/Advert?page=${page}&limit=8`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  }
)