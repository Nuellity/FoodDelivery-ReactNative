import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  restaurants: {},
};

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { restaurantId, foodId, foodName, image, price, quantity } =
        action.payload;

      if (!state.restaurants[restaurantId]) {
        state.restaurants[restaurantId] = {
          items: {},
          totalItems: 0,
          totalPrice: 0,
        };
      }

      const restaurant = state.restaurants[restaurantId];

      if (!restaurant.items[foodId]) {
        restaurant.items[foodId] = {
          foodName,
          image,
          price,
          quantity: 0,
        };
      }

      const item = restaurant.items[foodId];
      item.quantity += quantity;
      restaurant.totalItems += quantity;
      restaurant.totalPrice += price * quantity;
    },
    removeFromCart: (state, action) => {
      const { restaurantId, foodId, quantity } = action.payload;

      if (
        state.restaurants[restaurantId] &&
        state.restaurants[restaurantId].items[foodId]
      ) {
        const restaurant = state.restaurants[restaurantId];
        const item = restaurant.items[foodId];

        restaurant.totalItems -= quantity;
        restaurant.totalPrice -= item.price * quantity;
        item.quantity -= quantity;

        if (item.quantity <= 0) {
          delete restaurant.items[foodId];
        }

        if (restaurant.totalItems <= 0) {
          delete state.restaurants[restaurantId];
        }
      }
    },
    deleteFoodFromCart: (state, action) => {
      const { restaurantId, foodId } = action.payload;

      if (
        state.restaurants[restaurantId] &&
        state.restaurants[restaurantId].items[foodId]
      ) {
        const restaurant = state.restaurants[restaurantId];
        const item = restaurant.items[foodId];

        restaurant.totalItems -= item.quantity;
        restaurant.totalPrice -= item.price * item.quantity;

        delete restaurant.items[foodId];

        if (restaurant.totalItems <= 0) {
          delete state.restaurants[restaurantId];
        }
      }
    },
    deleteCartByRestaurant: (state, action) => {
      const { restaurantId } = action.payload;

      if (state.restaurants[restaurantId]) {
        delete state.restaurants[restaurantId];
      }
    },
    clearCart: (state) => {
      state.restaurants = {};
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  clearCart,
  deleteFoodFromCart,
  deleteCartByRestaurant,
} = CartSlice.actions;

export default CartSlice.reducer;
