import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import CryptoJS from "crypto-js";
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
    const data3 = await axios.get(
      `${process.env.REACT_APP_API_URL}:${process.env.REACT_APP_API_PORT}/user/${userUuid}`,
      {
        withCredentials: true,
      }
    );
    if (!data3) {
      return;
    }
    return data3.data;
  }
);

export const fetchLogout = createAsyncThunk(
  "user/fetchLogout",
  async (data, thunkAPI) => {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}:${process.env.REACT_APP_API_PORT}/signout`,
      { withCredentials: true }
    );
    if (!res) {
      return;
    }
  }
);

export const oAuthGoogleLogin = createAsyncThunk(
  "user/oAuthGoogleLogin",
  async (data, thunkAPI) => {
    const res = await axios.post(
      `${process.env.REACT_APP_API_URL}:${process.env.REACT_APP_API_PORT}/callback`,
      {
        token: data,
      },
      { headers: { "Content-Type": "application/json" }, withCredentials: true }
    );
    if (!res) {
      return;
    }
    const data2 = await axios.get(
      `${process.env.REACT_APP_API_URL}:${process.env.REACT_APP_API_PORT}/user/${res.data.userInfo.uuid}`,
      {
        withCredentials: true,
      }
    );
    if (!data2) {
      return;
    }
    return data2.data;
  }
);

export const signup = createAsyncThunk(
  "user/signup",
  async (data, thunkAPI) => {
    const res = await axios.post(
      `${process.env.REACT_APP_API_URL}:${process.env.REACT_APP_API_PORT}/signup`,
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
    await axios.post(
      `${process.env.REACT_APP_API_URL}:${process.env.REACT_APP_API_PORT}/signin`,
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
      `${process.env.REACT_APP_API_URL}:${process.env.REACT_APP_API_PORT}/refreshtokenrequest`,
      {
        withCredentials: true,
      }
    );
    if (!data2) {
      return;
    }
    const userUuid = data2.data.data.userInfo.uuid;
    const data3 = await axios.get(
      `${process.env.REACT_APP_API_URL}:${process.env.REACT_APP_API_PORT}/user/${userUuid}`,
      {
        withCredentials: true,
      }
    );
    if (!data3) {
      return;
    }
    return data3.data;
  }
);
export const editNick = createAsyncThunk(
  "user/editNick",
  async (data, thunkAPI) => {
    const res = await axios.put(
      `${process.env.REACT_APP_API_URL}:${process.env.REACT_APP_API_PORT}/user/${data.uuid}`,
      {
        user_nick: data.user_nick,
      },
      {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      }
    );
    if (!res) {
      return;
    }
    const user = await axios.get(
      `${process.env.REACT_APP_API_URL}:${process.env.REACT_APP_API_PORT}/user/${data.uuid}`,
      { withCredentials: true }
    );
    if (!user) {
      return;
    }
    return user.data;
  }
);
export const editPassword = createAsyncThunk(
  "user/editPassword",
  async (data, thunkAPI) => {
    const res = await axios.put(
      `${process.env.REACT_APP_API_URL}:${process.env.REACT_APP_API_PORT}/user/${data.currentUser.uuid}`,
      {
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
    return res.data;
  }
);

export const currentPassword = createAsyncThunk(
  "user/currentPassword",
  async (data, thunkAPI) => {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}:${process.env.REACT_APP_API_PORT}/user/${data.currentUser.uuid}`,
      {
        withCredentials: true,
      }
    );
    if (!res) {
      return;
    }
    return res.data.user_password;
  }
);

export const user = createSlice({
  name: "user",
  initialState: {
    currentUserloading: true,
    currentUser: {},
    currentUserError: "",
    islogin: false,
    // isvalidateCheck: true,
  },
  reducers: {
    signin: (state) => {
      state.islogin = true;
    },
    signout: (state) => {
      state.islogin = false;
    },
    // isvalidate: (state, action) => {
    //   if (action.payload.user_password === action.payload.user_password2) {
    //     state.isvalidateCheck = true;
    //   } else if (
    //     action.payload.user_password !== action.payload.user_password2
    //   ) {
    //     state.isvalidateCheck = false;
    //   }
    // },
    userBid: (state, action) => {
      state.currentUser = action.payload;
    },
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
    [fetchLogout.pending]: (state) => {
      state.currentUserLoading = true;
      state.currentUser = {};
      state.currentUserError = "";
    },
    [fetchLogout.fulfilled]: (state, action) => {
      state.currentUserLoading = false;
      state.currentUser = {};
      state.currentUserError = "";
    },
    [fetchLogout.rejected]: (state, action) => {
      state.currentUserLoading = false;
      state.currentUser = {};
      state.currentUserError = action.payload;
    },
    [oAuthGoogleLogin.pending]: (state) => {
      state.currentUserLoading = true;
      state.currentUser = {};
      state.currentUserError = "";
    },
    [oAuthGoogleLogin.fulfilled]: (state, action) => {
      state.currentUserLoading = false;
      state.currentUser = action.payload;
      state.currentUserError = "";
    },
    [oAuthGoogleLogin.rejected]: (state, action) => {
      state.currentUserLoading = false;
      state.currentUser = {};
      state.currentUserError = action.payload;
    },
    [signup.pending]: (state) => {
      state.currentUserLoading = true;
      state.currentUser = {};
      state.currentUserError = "";
    },
    [signup.fulfilled]: (state, action) => {
      state.currentUserLoading = false;
      state.currentUser = action.payload;
      state.currentUserError = "";
    },
    [signup.rejected]: (state, action) => {
      state.currentUserLoading = false;
      state.currentUser = {};
      state.currentUserError = action.payload;
    },
    [editNick.pending]: (state) => {
      state.currentUserLoading = true;
      state.currentUser = {};
      state.currentUserError = "";
    },
    [editNick.fulfilled]: (state, action) => {
      state.currentUserLoading = false;
      state.currentUser = action.payload;
      state.currentUserError = "";
    },
    [editNick.rejected]: (state, action) => {
      state.currentUserLoading = false;
      state.currentUser = {};
      state.currentUserError = action.payload;
    },
    [editPassword.pending]: (state) => {
      state.currentUserLoading = true;
      state.currentUser = {};
      state.currentUserError = "";
    },
    [editPassword.fulfilled]: (state, action) => {
      state.currentUserLoading = false;
      state.currentUser = action.payload;
      state.currentUserError = "";
    },
    [editPassword.rejected]: (state, action) => {
      state.currentUserLoading = false;
      state.currentUser = {};
      state.currentUserError = action.payload;
    },
    [currentPassword.pending]: (state) => {
      state.currentUserLoading = true;
      state.currentUser = {};
      state.currentUserError = "";
    },
    [currentPassword.fulfilled]: (state, action) => {
      state.currentUserLoading = false;
      state.currentUser = {};
      state.currentUserError = "";
    },
    [currentPassword.rejected]: (state, action) => {
      state.currentUserLoading = false;
      state.currentUser = {};
      state.currentUserError = action.payload;
    },
  },
});
export const { signin, signout, isvalidate } = user.actions;
export const handleLogin = (state) => state.user.islogin;

export const { siginin, userBid } = user.actions;
export default user.reducer;
