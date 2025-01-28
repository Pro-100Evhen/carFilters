import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchVehicleMakes = createAsyncThunk(
   "filter/fetchVehicleMakes",
   async () => {
      const response = await axios.get(
         "https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json"
      );
      return response.data.Results;
   }
);

export const fetchVehicleModels = createAsyncThunk(
   "filter/fetchVehicleModels",
   async ({ makeId, year }) => {
      const response = await axios.get(
         `https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json`
      );
      return response.data.Results;
   }
);

const filterSlice = createSlice({
   name: "filter",
   initialState: {
      makes: [], // Тепер `makes` завжди масив
      models: [],
      make: "",
      year: "",
      isNextEnabled: false,
      loadingMakes: false,
      loadingModels: false,
      error: null,
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
   extraReducers: (builder) => {
      builder
         .addCase(fetchVehicleMakes.pending, (state) => {
            state.loadingMakes = true;
            state.error = null;
         })
         .addCase(fetchVehicleMakes.fulfilled, (state, action) => {
            state.loadingMakes = false;
            state.makes = action.payload; // Записуємо лише масив Results
         })
         .addCase(fetchVehicleMakes.rejected, (state, action) => {
            state.loadingMakes = false;
            state.error = action.error.message;
         });

      builder
         .addCase(fetchVehicleModels.pending, (state) => {
            state.loadingModels = true;
            state.error = null;
         })
         .addCase(fetchVehicleModels.fulfilled, (state, action) => {
            state.loadingModels = false;
            state.models = action.payload;
         })
         .addCase(fetchVehicleModels.rejected, (state, action) => {
            state.loadingModels = false;
            state.error = action.error.message;
         });
   },
});

export const { setMake, setYear, setNextEnabled } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
