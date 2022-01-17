import { configureStore } from "@reduxjs/toolkit";
import { inputsSlice } from "./inputs-slice";
import { tableSlice } from "./table-slice";

export const store = configureStore({
  reducer: { inputsslice: inputsSlice.reducer, tableslice: tableSlice.reducer },
});
