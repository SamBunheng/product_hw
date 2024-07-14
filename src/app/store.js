import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../redux/features/counter/CounterSlice';
import productReducer from '../redux/features/product/ProductSlide';
import  cartSlice  from '../redux/features/cart/CartSlice';
import userSlice from '../redux/features/user/userSlice';
import serviceSlice from '../redux/features/service/serviceSlice';
// import pfSlice from '../redux/features/pf/pfSlice';


export const store = configureStore({
  reducer: {
    counter: counterReducer,
    product: productReducer,
    cart: cartSlice, 
    user: userSlice,
    services: serviceSlice,
    // pf: pfSlice
 },
});
