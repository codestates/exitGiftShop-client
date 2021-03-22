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
    auctions: [],
    error: "",
  },
  reducers: {},
  extraReducers: {
    [fetchArtDetail.pending]: (state) => {
      state.loading = true;
      state.auctions = [];
      state.error = "";
    },
    [fetchArtDetail.fulfilled]: (state, action) => {
      state.loading = false;
      state.auctions = action.payload;
      state.error = "";
    },
    [fetchArtDetail.rejected]: (state, action) => {
      state.loading = false;
      state.auctions = [];
      state.error = action.payload;
    },
  },
});

export default artDetail.reducer;
