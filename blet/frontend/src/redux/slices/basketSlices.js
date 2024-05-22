import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  basket: JSON.parse(localStorage.getItem("basket")) || [],
  count: 0,
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addBasket: (state, action) => {
      let elem = [...state.basket].find(
        (elem) => elem._id == action.payload._id
      );
      if (elem) {
        elem.count++;
      } else {
        state.basket = [...state.basket, { ...action.payload, count: 1 }];
      }
      localStorage.setItem("basket", JSON.stringify(state.basket));
    },

    getCount: (state, action) => {
      let sum = 0;
      [...state.basket].forEach((elem) => {
        sum += elem.count;
      });
      state.count = sum;
    },
    increaseCount: (state, action) => {
      let elem = [...state.basket].find(
        (elem) => elem._id == action.payload._id
      );
      elem.count++;
      localStorage.setItem("basket", JSON.stringify(state.basket));
    },
    decreaseCount: (state, action) => {
      let elem = [...state.basket].find(
        (elem) => elem._id == action.payload._id
      );
      elem.count--;

      if (elem.count <= 0) {
        state.basket = state.basket.filter(
          (elem) => elem._id !== action.payload._id
        );
      }
      localStorage.setItem("basket", JSON.stringify(state.basket));
    },

    removeFromBasket: (state, action) => {
      state.basket = state.basket.filter(
        (elem) => elem._id !== action.payload._id
      );
      localStorage.setItem("basket", JSON.stringify(state.basket));
    },
    removeAll: (state, action) => {
      state.basket = [];
      localStorage.setItem("basket", JSON.stringify(state.basket));
    },
  },
});

export const {
  decreaseCount,
  increaseCount,
  removeAll,
  addBasket,
  getCount,
  removeFromBasket,
} = basketSlice.actions;

export default basketSlice.reducer;
