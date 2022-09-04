import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/authReducer.js";
import postsReducer from "./reducers/postsReducer.js";

export const store = configureStore({
	reducer: {
		auth: authReducer,
		posts: postsReducer,
	},
});
