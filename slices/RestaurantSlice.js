import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  restaurants: [],
};

const RestaurantSlice = createSlice({
  name: "restaurant",
  initialState,
  reducers: {
    addRestaurant: (state, action) => {
      const newRestaurant = action.payload;
      const existingRestaurant = state.restaurants.find(
        (restaurant) => restaurant.id === newRestaurant.id
      );

      if (!existingRestaurant) {
        state.restaurants.push(newRestaurant);
      }
    },
    clearRestaurant: (state) => {
      state.restaurants = [];
    },
  },
});

export const { addRestaurant, clearRestaurant } = RestaurantSlice.actions;
export default RestaurantSlice.reducer;
