import { createSlice } from "@reduxjs/toolkit";
import { fetchPosts } from "../../utils/api/routes/posts/thunks/index.js";

const initialState = {
	posts: [],
	isLoading: false,
	error: "",
};

export const postsSlicer = createSlice({
	name: "posts",
	initialState,
	reducers: {},
	extraReducers: {
		[fetchPosts.fulfilled.type]: (state, action) => {
			state.isLoading = false;
			state.posts = action.payload;
		},
		[fetchPosts.pending.type]: (state) => {
			state.isLoading = true;
		},
		[fetchPosts.rejected.type]: (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		},
	},
});

export const {} = postsSlicer.actions;

export default postsSlicer.reducer;
