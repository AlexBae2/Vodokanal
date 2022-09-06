import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/auth/authReducer.js";
import postsReducer from "./reducers/posts/postsReducer.js";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    posts: postsReducer,
  },
});
