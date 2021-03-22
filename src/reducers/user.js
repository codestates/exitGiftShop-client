import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUser = createAsyncThunk(
  "user/fetchUser",
  async (data, thunkAPI) => {
    const res = await axios.post(
      `https://localhost:4000/signin`,
      {
        user_email: data.user_email,
        user_password: data.user_password,
      },
      {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      }
    );
    if (!res) {
      return;
    }

    const data2 = await axios.get(
      "https://localhost:4000/refreshtokenrequest",
      {
        withCredentials: true,
      }
    );
    if (!data2) {
      return;
    }
    console.log(data2.data.data.userInfo.uuid);
    const userUuid = data2.data.data.userInfo.uuid;
    const data3 = await axios.get(`https://localhost:4000/user/${userUuid}`, {
      withCredentials: true,
    });
    if (!data3) {
      return;
    }
    console.log(data3.data);
    return data3.data;
  }
);

export const user = createSlice({
  name: "user",
  initialState: {
    currentUserloading: true,
    currentUser: {},
    currentUserError: "",
  },
  reducers: {},
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
    },
    [fetchUser.rejected]: (state, action) => {
      state.currentUserLoading = false;
      state.currentUser = {};
      state.currentUserError = action.payload;
    },
  },
});

export default user.reducer;
