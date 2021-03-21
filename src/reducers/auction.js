import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getAuction = createAsyncThunk("auction/getAuction", async () => {
  return axios
    .get(`${process.env.REACT_APP_API_URL}:${process.env.REACT_APP_API_PORT}/auction`)
    .then((res) => { 
      return res.data;
    })
    .catch((error) => error);
});

export const auction = createSlice({
  name: "auction",
  initialState: {
    auctions: [],
    loading: true,
    error: "",
    selectedAuction: {}
  },
  reducers: {
    selected: state => state.selectedAuction
  },
  extraReducers: {
    [getAuction.pending]: (state) => {
      state.loading = true;
      state.auctions = [];
      state.error = "";
    },
    [getAuction.fulfilled]: (state, action) => {
      state.loading = false;
      state.auctions = action.payload;
      state.error = "";
    },
    [getAuction.rejected]: (state, action) => {
      state.loading = false;
      state.auctions = [];
      state.error = action.payload;
    }
  }
});

export default auction.reducer;
