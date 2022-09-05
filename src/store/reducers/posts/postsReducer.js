import { createSlice } from '@reduxjs/toolkit'
import { fetchAllPosts, fetchPosts } from './thunks/index.js'

const initialState = {
	posts: [],
	isLoading: true,
	countPages: 0,
	error: '',
}

export const postsSlicer = createSlice({
	name: 'posts',
	initialState,
	reducers: {},
	extraReducers: {
		[fetchPosts.fulfilled.type]: (state, action) => {
			state.isLoading = false
			state.posts = [...state.posts,...action.payload]
		},
		[fetchPosts.pending.type]: (state) => {
			state.isLoading = true
		},
		[fetchPosts.rejected.type]: (state, action) => {
			state.isLoading = false
			state.error = action.payload
		},
		[fetchAllPosts.fulfilled.type]: (state, action) => {
			state.countPages = action.payload.length / 10
		},
		[fetchAllPosts.rejected.type]: (state, action) => {
			state.error = action.payload
		},
	},
})

export const {} = postsSlicer.actions

export default postsSlicer.reducer
