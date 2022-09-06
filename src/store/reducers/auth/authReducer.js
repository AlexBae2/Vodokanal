import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLogged: false,
  login: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authorization: (state, action) => {
      state.login = action.payload.login;
      state.isLogged = true;
    },
    unAuthorization: (state) => {
      debugger;
      state.login = "";
      state.isLogged = false;
    },
  },
});

export const { authorization, unAuthorization } = authSlice.actions;

export default authSlice.reducer;
