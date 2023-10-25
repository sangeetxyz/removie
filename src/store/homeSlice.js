import { createSlice } from "@reduxjs/toolkit";

export const homeSlice = createSlice({
  name: "home",
  initialState: {
    configuration: {},
  },
  reducers: {
    setConfiguration: (state, action) => {
      state.configuration = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setConfiguration } = homeSlice.actions;

export default homeSlice.reducer;
