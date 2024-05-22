import { configureStore } from '@reduxjs/toolkit'
import basketReducer from './slices/basketSlices'
import wishlistReducer from "./slices/wishlistSlice"

export const store = configureStore({
  reducer: {
    basket:basketReducer,
    wishlist: wishlistReducer
  },
})