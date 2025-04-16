import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice.js';  // Import the counter reducer

const Store = configureStore({
  reducer: {
    counter: counterReducer,  // Add the counter reducer to the store
  },
});

export default Store;