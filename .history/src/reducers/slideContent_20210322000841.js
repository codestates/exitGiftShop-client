import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// todo: 알림기능 구현시 createAsyncThunk 사용

export const fetchArt = createAsyncThunk("slideContent/fetchArt", async () => {
  return axios
<<<<<<< HEAD:src/reducers/slideContentSlice.js
    .get(
      `${process.env.REACT_APP_API_URL}:${process.env.REACT_APP_API_PORT}/art`
    )
    .then((res) => {
=======
    .get(`${process.env.REACT_APP_API_URL}:${process.env.REACT_APP_API_PORT}/art`)
    .then((res) => { 
>>>>>>> e4421c260047e63a83c2f5be35931e14f4df87ce:src/reducers/slideContent.js
      return res.data;
    })
    .catch((error) => error);
});

export const slideContent = createSlice({
  name: "slideContent",
  initialState: {
    loading: true,
    arts: [],
    error: "",
  },
  reducers: {},
  extraReducers: {
    [fetchArt.pending]: (state) => {
      state.loading = true;
      state.arts = [];
      state.error = "";
    },
    [fetchArt.fulfilled]: (state, action) => {
      state.loading = false;
      state.arts = action.payload;
      state.error = "";
    },
    [fetchArt.rejected]: (state, action) => {
      state.loading = false;
      state.arts = [];
      state.error = action.payload;
    },
  },
});

export default slideContent.reducer;
