import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
    isAddCartSuccess: { isShow: false, id: "" },
    isDeleteProductSuccess: { isShow: false, confirm: false, id: "" },
  },
  reducers: {
    initCart: (state, action) => {
      state.cartItems = action.payload;
    },
    addToCart: (state, action) => {
      const cartItems = [...state.cartItems];
      const product = action.payload;

      const index = cartItems.findIndex((p) => p.id === product.id);
      if (!product.quantity) {
        if (index !== -1) {
          cartItems[index].quantity += 1;
        } else {
          cartItems.push({ ...product, quantity: 1 });
        }
      } else {
        if (index !== -1) {
          cartItems[index].quantity += product.quantity;
        } else {
          cartItems.push({ ...product, quantity: product.quantity });
        }
      }

      localStorage.setItem("cartItems", JSON.stringify(cartItems));
      state.cartItems = cartItems;
    },
    addCartSuccess: (state, action) => {
      state.isAddCartSuccess = action.payload;
    },
    deleteProductSuccess: (state, action) => {
      state.isDeleteProductSuccess = action.payload;
    },
    removeToCart: (state, action) => {
      const cartItems = [...state.cartItems];
      const productId = action.payload;

      const updatedCartItems = cartItems.filter((item) => {
        return item.id !== productId;
      });

      localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
      state.cartItems = updatedCartItems;
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
        item.id === productId
          ? item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : null
          : item
      );

      const filteredCartItems = updatedCartItems.filter(
        (item) => item !== null
      );

      localStorage.setItem("cartItems", JSON.stringify(filteredCartItems));
      state.cartItems = filteredCartItems;
    },
  },
});

export const {
  addCartSuccess,
  deleteProductSuccess,
  addToCart,
  removeToCart,
  incrementProduct,
  decrementProduct,
  initCart,
} = cartSlice.actions;
export const selectCartItems = (state) => state.cart.cartItems;
export default cartSlice.reducer;
