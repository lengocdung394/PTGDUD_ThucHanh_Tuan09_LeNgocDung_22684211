import { createSlice } from '@reduxjs/toolkit';

// Create a slice for the counter
const counterSlice = createSlice({
  name: 'counter',
  initialState: { count: 0 }, // initial state
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
  },
});

// Export the actions so we can dispatch them
export const { increment, decrement } = counterSlice.actions;

// Export the reducer to be used in the store
export default counterSlice.reducer;