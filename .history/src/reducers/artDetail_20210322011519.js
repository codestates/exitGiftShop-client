import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// todo: Show detailed info in accordance to clicked slideContent

export const fetchArtDetail = createAsyncThunk(
  "artDetail/fetchArtDetail",
  async () => {
    return axios
      .get(
        `${process.env.REACT_APP_API_URL}:${process.env.REACT_APP_API_PORT}/art`
      )
      .then((res) => {
        return res.data;
      })
      .catch((error) => error);
  }
);

export const artDetail = createSlice({
  name: "artDetail",
  initialState: {
    loading: true,
    title: [],
    error: "",
  },
  reducers: {},
  extraReducers: {
    [fetchArtDetail.pending]: (state) => {
      state.loading = true;
      state.title = [];
      state.error = "";
    },
    [fetchArtDetail.fulfilled]: (state, action) => {
      state.loading = false;
      state.title = action.payload;
      state.error = "";
    },
    [fetchArtDetail.rejected]: (state, action) => {
      state.loading = false;
      state.title = [];
      state.error = action.payload;
    },
  },
});

export default artDetail.reducer;
