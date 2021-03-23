import { createSlice } from "@reduxjs/toolkit";

export const login = createSlice({
  name: "login",
  initialState: {
    islogin: false,
  },
  reducers: {
    siginin: (state) => {
      state.islogin = true;
    },
  },
});

export const { siginin } = login.actions;

export const handleLogin = (state) => state.login.islogin;

export default login.reducer;
