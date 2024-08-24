import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  location: {},
};

const LocationSlice = createSlice({
  name: "location",
  initialState,
  reducers: {
    addLocation: (state, action) => {
      state.location = action.payload;
    },
  },
});

export const { addLocation } = LocationSlice.actions;
export default LocationSlice.reducer;
