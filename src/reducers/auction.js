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

export const postLike = createAsyncThunk("auction/postLike", async (req) => {
  const like = await axios.post(
    `${process.env.REACT_APP_API_URL}:${process.env.REACT_APP_API_PORT}/likes`,
    req,{withCredentials: true});
  if (!like) {
    return;
  }
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
  const user = await axios.put(
    `${process.env.REACT_APP_API_URL}:${process.env.REACT_APP_API_PORT}/user/${req.bidObj.user_uuid}`,
    req.userObj,{withCredentials: true});
  if (!user) {
    return;
  }
  const auctionFind = await axios.get(`${process.env.REACT_APP_API_URL}:${process.env.REACT_APP_API_PORT}/auction/${req.bidObj.auction_uuid}`);
  if (!auctionFind) {
    return;
  }
  const userFind = await axios.get(
    `${process.env.REACT_APP_API_URL}:${process.env.REACT_APP_API_PORT}/user/${req.bidObj.user_uuid}`);
  if (!userFind) {
    return;
  }
  return { 
    auction : auctionFind.data,
    user: userFind.data
  };
});


export const auction = createSlice({
  name: "auction",
  initialState: {
    auctions: [],
    loading: true,
    error: "",
    selectedAuction: {},
    selectedCollection: {},
    myBidRight: "TxHistory"
  },
  reducers: {
    selected: (state, action) => {
      state.selectedAuction = action.payload;
    },
    selectedCollection: (state, action) => {
      state.selectedCollection = action.payload;
    },
    myBidRightChange: (state, action) => {
      state.myBidRight = action.payload;
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
    [postBid.pending]: (state) => {
    },
    [postBid.fulfilled]: (state, action) => {
      state.loading = false;
      state.selectedAuction = action.payload.auction;
      state.bidUser = action.payload.user;
      state.error = "";
    },
    [postBid.rejected]: (state, action) => {
    },
    [postLike.pending]: (state) => {
    },
    [postLike.fulfilled]: (state, action) => {
      state.auctions = action.payload;
    },
    [postLike.rejected]: (state, action) => {
    },
  },
});

export const { 
  countdownReset, 
  selected, 
  selectedCollection, 
  myBidRightChange
} = auction.actions;

export default auction.reducer;
