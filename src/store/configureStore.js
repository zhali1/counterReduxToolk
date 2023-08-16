import { createSlice } from "@reduxjs/toolkit";

const clicksSlice = createSlice({
  name: "clicks",
  initialState: {
    clicks: 0,
  },
  reducers: {
    increment: (state, action) => {
      state.clicks = state.clicks += 1;
    },
    nullCLick: (state, action) => {
      state.clicks = 0;
    },
  },
});
export const { increment, nullCLick } = clicksSlice.actions;
export default clicksSlice.reducer;
