import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getAuctions = createAsyncThunk("auction/getAuctions", async () => {
  const auction = await axios.get(
    `${process.env.REACT_APP_API_URL}:${process.env.REACT_APP_API_PORT}/auction`
  );
  if (!auction) {
    return;
  }
  return auction.data;
});

export const auction = createSlice({
  name: "auction",
  initialState: {
    auctions: [],
    loading: true,
    error: "",
    selectedAuction: {},
  },
  reducers: {
    selected: (state, action) => {
      state.selectedAuction = action.payload;
    },
    selectedCollection: (state, action) => {
      state.selectedAuction = action.payload;
    },
  },
  extraReducers: {
    [getAuctions.pending]: (state) => {
      state.loading = true;
      state.auctions = [];
      state.error = "";
    },
    [getAuctions.fulfilled]: (state, action) => {
      state.loading = false;
      state.auctions = action.payload;
      state.error = "";
    },
    [getAuctions.rejected]: (state, action) => {
      state.loading = false;
      state.auctions = [];
      state.error = action.payload;
    },
  },
});

export const { selected } = auction.actions;

export default auction.reducer;
