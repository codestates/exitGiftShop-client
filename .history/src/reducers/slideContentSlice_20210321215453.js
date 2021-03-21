import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// todo: 알림기능 구현시 createAsyncThunk 사용

export const fetchArt = createAsyncThunk("slideContent/fetchArt", async () => {
  return axios
    .get(`${process.env.API_URL}:${process.env.API_PORT}/art`)
    .then((res) => {
      return res.data;
    })
    .catch((error) => error);
});

export const slideContentSlice = createSlice({
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

export default slideContentSlice.reducer;
