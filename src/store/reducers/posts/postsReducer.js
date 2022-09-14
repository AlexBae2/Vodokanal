import { createSlice } from '@reduxjs/toolkit';
import { fetchAllData, fetchPosts } from './thunks/index.js';

const initialState = {
  posts: [],
  users: [],
  photos: [],
  isLoading: true,
  countPages: 0,
  error: '',
};

export const postsSlicer = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchPosts.fulfilled.type]: (state, action) => {
      state.posts = [...state.posts, ...action.payload];
    },
    [fetchPosts.rejected.type]: (state, action) => {
      state.error = action.payload;
    },

    [fetchAllData.fulfilled.type]: (state, action) => {
      state.photos = [...state.photos, ...action.payload.photos];
      state.users = [...state.users, ...action.payload.users];
      state.countPages = action.payload.posts.length / 10;
      state.isLoading = false;
    },
    [fetchAllData.pending.type]: (state) => {
      state.isLoading = true;
    },
  },
});

// export const {} = postsSlicer.actions;

export default postsSlicer.reducer;
