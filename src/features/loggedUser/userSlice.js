import { createSlice } from "@reduxjs/toolkit";
import { json } from "react-router";

let userFromStorage = localStorage.getItem("user");
if (userFromStorage) {
  try {
    userFromStorage = JSON.parse(userFromStorage);
  } catch (e) {
    console.error("Failed to parse user from localStorage:", e);
    userFromStorage = {};
  }
} else {
  userFromStorage = {};
}

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: userFromStorage,
  },
  reducers: {
    addUser: (state, action) => {
      state.user = action.payload;
      localStorage.setItem("user", JSON.stringify(state.user.providerData[0]));
    },
    logOut: (state, action) => {
      state.user = {};
      localStorage.setItem("user", JSON.stringify(state.user));
    },
  },
});

export const { addUser, logOut } = userSlice.actions;
export default userSlice.reducer;
