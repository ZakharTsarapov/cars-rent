import { createSelector } from '@reduxjs/toolkit';

export const selectCars = state => state.cars.items;
export const selectIsLoading = state => state.cars.isLoading;
export const selectError = state => state.cars.error;
export const selectFavorites = state => state.cars.favorites;
export const selectFilterBrand = state => state.filter.filterBrand;
export const selectFilterPrice = state => state.filter.filterPrice;
export const selectFilterMileageFrom = state => state.filter.filterMileage.from;
export const selectFilterMileageTo = state => state.filter.filterMileage.to;

export const selectFiltredCars = createSelector(
  [
    selectCars,
    selectFilterBrand,
    selectFilterPrice,
    selectFilterMileageFrom,
    selectFilterMileageTo,
  ],
  (cars, filterBrand, filterPrice, filterMileageFrom, filterMileageTo) => {
    if (filterBrand !== '') {
      const normalizeFilterBrand = filterBrand.toLowerCase();

      const selectCarsByBrand = cars.filter(car =>
        car.make.toLowerCase().includes(normalizeFilterBrand)
      );
      return selectCarsByBrand;
    }
    if (filterPrice !== '') {
      
      const selectCarsByPrice = cars.filter(
        car => car.rentalPrice <= filterPrice
      );
      return selectCarsByPrice;
    }
    if (filterMileageFrom !== '' && filterMileageTo !== '') {
      const selectCarsByMileage = cars.filter(
        car =>
          car.mileage <= filterMileageTo && car.mileage >= filterMileageFrom
      );

      return selectCarsByMileage;
    }
  }
);
