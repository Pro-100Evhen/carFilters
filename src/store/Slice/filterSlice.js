import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
   name: "filter",
   initialState: {
      make: "",
      year: "",
      isNextEnabled: false,
   },
   reducers: {
      setMake: (state, action) => {
         state.make = action.payload;
      },
      setYear: (state, action) => {
         state.year = action.payload;
      },
      setNextEnabled: (state, action) => {
         state.isNextEnabled = action.payload;
      },
   },
});

export const { setMake, setYear, setNextEnabled } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
