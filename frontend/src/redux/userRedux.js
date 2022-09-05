import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    isFetching: false,
    error: false,
  },
  reducers: {
    loginStart: (state) => {
      return {
        ...state,
        isFetching: true,
      };
    },
    loginSuccess: (state, action) => {
      return {
        ...state,
        isFetching: true,
        currentUser: action.payload,
      };
    },
    loginFailure: (state) => {
      return {
        ...state,
        isFetching: true,
        error: true,
      };
    },
    registerStart: (state) => {
      return {
        ...state,
        isFetching: true,
      };
    },
    registerSuccess: (state, action) => {
      return {
        ...state,
        isFetching: true,
        currentUser: action.payload,
      };
    },
    registerFailure: (state) => {
      return {
        ...state,
        isFetching: true,
        error: true,
      };
    },
  },
});

export const {
  loginStart,
  loginSuccess,
  loginFailure,
  registerStart,
  registerSuccess,
  registerFailure,
} = userSlice.actions;
export default userSlice.reducer;
