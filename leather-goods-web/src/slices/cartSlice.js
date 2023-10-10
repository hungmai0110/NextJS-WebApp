import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
  },
  reducers: {
    initCart: (state, action) => {
      state.cartItems = action.payload;
    },
    addToCart: (state, action) => {
      const cartItems = [...state.cartItems];
      const product = action.payload;

      const index = cartItems.findIndex((p) => p.id === product.id);

      if (index !== -1) {
        cartItems[index].quantity += 1;
      } else {
        cartItems.push({ ...product, quantity: 1 });
      }

      localStorage.setItem("cartItems", JSON.stringify(cartItems));
      state.cartItems = cartItems;
    },
    incrementProduct: (state, action) => {
      const cartItems = [...state.cartItems];
      const productId = action.payload;

      const updatedCartItems = cartItems.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      );

      localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
      state.cartItems = updatedCartItems;
    },
    decrementProduct: (state, action) => {
      const cartItems = [...state.cartItems];
      const productId = action.payload;

      const updatedCartItems = cartItems.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
      );

      localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
      state.cartItems = updatedCartItems;
    },
  },
});

export const { addToCart, incrementProduct, decrementProduct, initCart } =
  cartSlice.actions;
export const selectCartItems = (state) => state.cart.cartItems;
export default cartSlice.reducer;
