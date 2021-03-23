import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getAuctions = createAsyncThunk("auction/getAuctions", async () => {
  const auctions = await axios.get(
    `${process.env.REACT_APP_API_URL}:${process.env.REACT_APP_API_PORT}/auction`
  );
  if (!auctions) {
    return;
  }
  return auctions.data;
});

export const postBid = createAsyncThunk("auction/postBid", async (req) => {
  const bid = await axios.post(
    `${process.env.REACT_APP_API_URL}:${process.env.REACT_APP_API_PORT}/bid`,
    req.bidObj,{withCredentials: true});
  if (!bid) {
    return;
  }
  const auction = await axios.put(`${process.env.REACT_APP_API_URL}:${process.env.REACT_APP_API_PORT}/auction/${req.bidObj.auction_uuid}`,
  req.auctionObj,{withCredentials: true});
  if (!auction) {
    return;
  }
  // console.log(auction.data);
  // const auctions = await axios.get(
  //   `${process.env.REACT_APP_API_URL}:${process.env.REACT_APP_API_PORT}/auction`
  // );
  // if (!auctions) {
  //   return;
  // }
  return auction.data;
});


export const auction = createSlice({
  name: "auction",
  initialState: {
    auctions: [],
    loading: true,
    error: "",
    selectedAuction: {},
    selectedCollection: {},
  },
  reducers: {
    selected: (state, action) => {
      state.selectedAuction = action.payload;
    },
    selectedCollection: (state, action) => {
      state.selectedCollection = action.payload;
    }
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
    [postBid.pending]: (state) => {
      state.loading = true;
      state.selectedAuction = [];
      state.error = "";
    },
    [postBid.fulfilled]: (state, action) => {
      state.loading = false;
      state.selectedAuction = action.payload;
      state.error = "";
    },
    [postBid.rejected]: (state, action) => {
      state.loading = false;
      state.selectedAuction = [];
      state.error = action.payload;
    },
  },
});

export const { countdownReset, selected, selectedCollection } = auction.actions;

export default auction.reducer;
