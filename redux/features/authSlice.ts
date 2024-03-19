import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import Cookies from "js-cookie";

export interface AuthState {
  _id: string | null;
  name: string | null;
  token: string | null;
}

const initialState: AuthState = {
  _id: null,
  name: null,
  token: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<AuthState>) => {
      if (action.payload.token && action.payload.name && action.payload._id) {
        Cookies.set("token", action.payload.token, {
          expires: new Date("9999-12-31"),
        });
        localStorage.setItem(
          "user",
          JSON.stringify({
            _id: action.payload._id,
            name: action.payload.name,
            token: action.payload.token,
          })
        );

        state._id = action.payload._id;
        state.name = action.payload.name;
        state.token = action.payload.token;
      }
    },
    maintainUserDataStoredinRedux: (state) => {
      const user = JSON.parse(localStorage.getItem("user") || "{}");
      if (user.name && user.token && user._id) {
        state._id = user._id;
        state.name = user.name;
        state.token = user.token;
      }
    },

    logout: (state) => {
      Cookies.remove("token");
      localStorage.removeItem("user");
      state._id = null;
      state.name = null;
      state.token = null;
    },
  },
});

export const selectAuth = (state: RootState) => state.auth;

export const { setUser, logout, maintainUserDataStoredinRedux } =
  authSlice.actions;

export default authSlice.reducer;
