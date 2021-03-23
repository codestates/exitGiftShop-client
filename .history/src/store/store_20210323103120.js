import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import auction from "../reducers/auction";
import user from "../reducers/user";
<<<<<<< HEAD
require("dotenv").config();

const reducer = {
  auction,
  user,
};

const middleware = [...getDefaultMiddleware()];

const preloadedState = {
  isLogin: false,
  user: null,
};
=======
import login from "../reducers/login";
require("dotenv").config();

const reducer = {
  auction,
  user,
  login,
};

const middleware = [...getDefaultMiddleware()];
>>>>>>> 073ea8f7ea8d8efc98df06290f3c3b08fc0a578d

export default configureStore({
  reducer,
  middleware,
  devTools: true,
<<<<<<< HEAD
  preloadedState,
=======
>>>>>>> 073ea8f7ea8d8efc98df06290f3c3b08fc0a578d
});
