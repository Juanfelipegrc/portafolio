import { configureStore } from "@reduxjs/toolkit";
import { animationsSlice } from "./slices";


export const store = configureStore({
    reducer: {
        animations: animationsSlice.reducer,
    }
})