import { configureStore } from '@reduxjs/toolkit';
import { filterReducer } from './Slice/filterSlice';

const store = configureStore({
    reducer: {
        filter: filterReducer,
    },
});

export default store;
