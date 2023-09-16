import { createSelector } from '@reduxjs/toolkit';

export const selectCars = state => state.cars.items;
export const selectIsLoading = state => state.cars.isLoading;
export const selectError = state => state.cars.error;
export const selectFavorites = state => state.cars.favorites;
export const selectFilterCars = state => state.filter.filterCars;
export const selectFilterPrice = state => state.filter.filterPrice;
export const selectFilterMileageFrom = state => state.filter.filterMileage.from;
export const selectFilterMileageTo = state => state.filter.filterMileage.to;

export const selectByCar = createSelector(
  [selectFilterCars, selectCars],
  (filterCars, cars) => {
    const normalizeFilterCars = filterCars.toLowerCase();
    return cars.filter(car =>
      car.make.toLowerCase().includes(normalizeFilterCars)
    );
  }
);

export const selectByPrice = createSelector(
  [selectFilterPrice, selectCars],
  (filterPrice, cars) => {
    return cars.filter(car => car.rentalPrice <= filterPrice);
  }
);

export const selectCarsByMileage = createSelector(
  [selectFilterMileageFrom, selectFilterMileageFrom, selectCars],
  (filterMileageTo, filterMileageFrom, cars) => {
    return cars.filter(
      car => car.mileage <= filterMileageTo && car.mileage >= filterMileageFrom
    );
  }
);
