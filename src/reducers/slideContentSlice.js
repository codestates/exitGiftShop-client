import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// todo: 알림기능 구현시 createAsyncThunk 사용

export const userSlice = createSlice({
  name: "user",
  initialState: {
    value: "namkyu",
  },
  reducers: {},
});

export const {} = userSlice.actions;

export const selectCount = (state) => state.counter.value;

export default userSlice.reducer;
