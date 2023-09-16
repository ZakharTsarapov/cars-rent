import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filterBrand: '',
  filterPrice: '',
  filterMileage: {
    from: '',
    to: '',
  },
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    updateFilter(state, { payload }) {
      state.filterBrand = payload.brand;
        state.filterPrice = payload.price;
        state.filterMileage.from = payload.mileageFrom;
        state.filterMileage.to = payload.mileageTo;
    },
  },
});

export const filterReducer = filterSlice.reducer;
export const { updateFilter } = filterSlice.actions;
