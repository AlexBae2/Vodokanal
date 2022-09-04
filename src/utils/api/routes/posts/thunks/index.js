import { createAsyncThunk } from "@reduxjs/toolkit";
import { getPosts } from "../posts.js";

export const fetchPosts = createAsyncThunk(
	"/fetchPost",
	async (_, { dispatch, rejectWithValue }) => {
		const response = await getPosts();
		return response.data;
	}
);
