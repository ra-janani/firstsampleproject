import { configureStore } from '@reduxjs/toolkit'
import counterReducer from "./features/counter/counterSlice";
import cartReducer from "./features/cart/cartSlice";
import userReducer from "./features/user/userSlice";
import {createLogger} from 'redux-logger';

const isDebuggingInChrome=__DEV__&& !!window.navigator.userAgent;
const logger=createLogger(
  {
    predicate:()=>isDebuggingInChrome,
    collapsed:true,
    duration:true,
    diff:true,
  }
);

export default configureStore({
  reducer: {
    counter:counterReducer,
    cart:cartReducer,
    user:userReducer,
  },
  middleware:getDefaultMiddleware=>getDefaultMiddleware().concat(logger),
}) 