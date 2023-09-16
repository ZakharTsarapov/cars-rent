import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    filterCars: "",
    filterPrice: "",
    filterMileage: {
        from:"",
        to:""
    }
}

const filterSlice = createSlice({
    name: filter,
    initialState,
    reducers: {
        updateFilter(state, {payload}) {
            state.filterCars = payload.cars,
            state.filterPrice = payload.price,
            state.filterMileage.from = payload.mileageFrom,
            state.filterMileage.to = payload.mileageTo
        }
    }
})

export const filterReducer = filterSlice.reducer;
export const updateFilter = filterSlice.actions;