import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import auction from "../reducers/auction";
import user from "../reducers/user";
import login from "../reducers/login";
require("dotenv").config();

const reducer = {
  auction,
  user,
  login,
};

const middleware = [...getDefaultMiddleware()];

export default configureStore({
  reducer,
  middleware,
  devTools: true,
});
