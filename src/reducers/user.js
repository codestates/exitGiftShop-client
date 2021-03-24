import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUser = createAsyncThunk(
  "user/fetchUser",
  async (data, thunkAPI) => {
    
    const res = await axios.post(
      `${process.env.REACT_APP_API_URL}:${process.env.REACT_APP_API_PORT}/signin`,
      {
        user_email: data.user_email,
        user_password: data.user_password,
      },
      {
        withCredentials: true,
      }
    );
    if (!res) {
      return;
    }
    const data2 = await axios.get(
      `${process.env.REACT_APP_API_URL}:${process.env.REACT_APP_API_PORT}/refreshtokenrequest`,
      {
        withCredentials: true,
      }
    );
    if (!data2) {
      return;
    }
    const userUuid = data2.data.data.userInfo.uuid;
    const data3 = await axios.get(`${process.env.REACT_APP_API_URL}:${process.env.REACT_APP_API_PORT}/user/${userUuid}`, {
      withCredentials: true,
    });
    if (!data3) {
      return;
    }
    return data3.data;
  }
);

export const getUserLikes = createAsyncThunk("auction/getLikes", async (uuid) => {
  const likes = await axios.get(
    `${process.env.REACT_APP_API_URL}:${process.env.REACT_APP_API_PORT}/user/likes/${uuid}`);
  if (!likes) {
    return;
  }
  return likes.data;
});
export const getUserBids = createAsyncThunk("auction/getBids", async (uuid) => {
  const bids = await axios.get(
    `${process.env.REACT_APP_API_URL}:${process.env.REACT_APP_API_PORT}/user/bid/${uuid}`);
  if (!bids) {
    return;
  }
  return bids.data;
});

export const user = createSlice({
  name: "user",
  initialState: {
    currentUserloading: true,
    currentUser: {},
    currentUserError: "",
    islogin: false,
    getLikes: [],
    getBids: [],
  },
  reducers: {
    siginin: (state) => {
      state.islogin = true;
    },
    currentUserUp: (state, action) => {
      state.currentUser = action.payload;
    }
  },
  extraReducers: {
    [fetchUser.pending]: (state) => {
      state.currentUserLoading = true;
      state.currentUser = {};
      state.currentUserError = "";
    },
    [fetchUser.fulfilled]: (state, action) => {
      state.currentUserLoading = false;
      state.currentUser = action.payload;
      state.currentUserError = "";
      state.islogin = true;
    },
    [fetchUser.rejected]: (state, action) => {
      state.currentUserLoading = false;
      state.currentUser = {};
      state.currentUserError = action.payload;
    },
    [getUserLikes.fulfilled]: (state, action) => {
      state.getLikes = action.payload;
    },
    [getUserBids.fulfilled]: (state, action) => {
      state.getBids = action.payload;
    },
  },
});
export const { siginin,currentUserUp } = user.actions;
export default user.reducer;
