import { createSlice } from "@reduxjs/toolkit";

export const initialThemeState = {
  // charcoal
  primaryColor: "#101820",
  // yellow
  secondaryColor: "#FEE715",
};

const themeSlice = createSlice({
  name: "theme",
  initialState: initialThemeState,
  reducers: {
    setPrimaryColor: (state, action) => {
      state.primaryColor = action.payload;
    },
    setSecondaryColor: (state, action) => {
      state.secondaryColor = action.payload;
    },
  },
});

export const { setPrimaryColor, setSecondaryColor } = themeSlice.actions;

export default themeSlice.reducer;
