import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../redux/features/counter/CounterSlice';
import productReducer from '../redux/features/product/ProductSlide';
import  cartSlice  from '../redux/features/cart/CartSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    product: productReducer,
    cart: cartSlice
  },
});
