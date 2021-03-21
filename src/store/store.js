import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import counterReducer from "../reducers/counterSlice";
import userReducer from "../reducers/userSlice";
import slideContent from "../reducers/slideContent";
require("dotenv").config();
// reducer 목록
const reducer = {

  counter: counterReducer,
  userContent: userReducer,
  slideContent: slideContentSliceReducer,
};


// 추가 middleware 목록
const middleware = [...getDefaultMiddleware()];

// 초기 state 목록
const preloadedState = {};

export default configureStore({
  reducer,
  middleware,
  devTools: true,
  preloadedState,
});
