import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import auction from "../reducers/auction";
import user from "../reducers/user";
require("dotenv").config();

const reducer = {
  auction,
  user,
};

const middleware = [...getDefaultMiddleware()];


export default configureStore({
  reducer,
  middleware,
  devTools: true,
});
