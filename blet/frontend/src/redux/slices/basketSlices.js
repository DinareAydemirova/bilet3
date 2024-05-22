import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  basket: JSON.parse(localStorage.getItem("basket")) || [],
}

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {

    addBasket: (state, action) => {
      let elem = [...state.basket].find((elem) => elem._id == action.payload._id)
      if (elem) {
        state.basket.find((elem) => elem._id == action.payload._id).count++
      } else {
        state.basket = [...state.basket, { ...action.payload, count: 1 }]

      }
      localStorage.setItem("basket", JSON.stringify(state.basket))
    },

  },
})

export const { addBasket } = basketSlice.actions

export default basketSlice.reducer