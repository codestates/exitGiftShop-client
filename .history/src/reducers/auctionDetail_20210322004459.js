import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// todo: Show detailed info in accordance to clicked slideContent

export const fetchAuctionDetail = createAsyncThunk(
  "auctionDetail/fetchArt",
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

export const auctionDetail = createSlice({
  name: "auctionDetail",
  initialState: {
    loading: true,
    arts: [],
    error: "",
  },
  reducers: {},
  extraReducers: {
    [fetchAuctionDetail.pending]: (state) => {
      state.loading = true;
      state.arts = [];
      state.error = "";
    },
    [fetchAuctionDetail.fulfilled]: (state, action) => {
      state.loading = false;
      state.arts = action.payload;
      state.error = "";
    },
    [fetchAuctionDetail.rejected]: (state, action) => {
      state.loading = false;
      state.arts = [];
      state.error = action.payload;
    },
  },
});

export default auctionDetail.reducer;
