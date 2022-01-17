import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  inputText: "",
  startDate: "",
  endDate: "",
};

export const inputsSlice = createSlice({
  name: "inputsslice",
  initialState,
  reducers: {
    setInputText(state, action) {
      state.inputText = action.payload;
    },
    setStartDate(state, action) {
      state.startDate = action.payload;
    },
    setEndDate(state, action) {
      state.endDate = action.payload;
    },
  },
});

export const inputsActions = inputsSlice.actions;
