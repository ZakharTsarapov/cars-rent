import { createSlice } from '@reduxjs/toolkit';
import { getCars } from 'services/api';

const pendingReducer = state => {
  state.isLoading = true;
};

const rejectedReducer = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const getCarsFulfilledReducer = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.items = [...state.items, ...action.payload];
};



const carsSlice = createSlice({
  name: 'cars',
  initialState: {
    items: [],
    favorites: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    addFavorite: (state, action) => {
      state.favorites.push(action.payload);
    },
    removeFavorite: (state, action) => {
      state.favorites = state.favorites.filter(
        item => item.id !== action.payload.id
      );
    },
    clearCarsData: state => {
      state.items = [];
    },
  },
  extraReducers: builder =>
    builder
      .addCase(getCars.pending, pendingReducer)
      .addCase(getCars.fulfilled, getCarsFulfilledReducer)
      .addCase(getCars.rejected, rejectedReducer)
});

export const { addFavorite, removeFavorite, clearCarsData } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;
