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
<<<<<<< HEAD
    selectedCollection: {},
=======
>>>>>>> 073ea8f7ea8d8efc98df06290f3c3b08fc0a578d
  },
  reducers: {
    selected: (state, action) => {
      state.selectedAuction = action.payload;
    },
<<<<<<< HEAD
    selectedCollection: (state, action) => {
      state.selectedCollection = action.payload;
    },
=======
>>>>>>> 073ea8f7ea8d8efc98df06290f3c3b08fc0a578d
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

<<<<<<< HEAD
export const { selected, selectedCollection } = auction.actions;
=======
export const { selected } = auction.actions;
>>>>>>> 073ea8f7ea8d8efc98df06290f3c3b08fc0a578d

export default auction.reducer;
