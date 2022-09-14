import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  getAllPosts,
  getPosts,
} from '../../../../utils/api/routes/posts/posts.js';
import { getAllPhotos } from '../../../../utils/api/routes/photos/photos.js';
import { getAllUsers } from '../../../../utils/api/routes/users/users.js';

export const fetchPosts = createAsyncThunk(
  '/fetchPost',
  async ({ currentPage }, { rejectWithValue }) => {
    try {
      const response = await getPosts(currentPage);
      return response.data;
    } catch (e) {
      return rejectWithValue('Не удалось загрузить посты');
    }
  }
);

export const fetchAllData = createAsyncThunk(
  '/fetchAllData',
  async (_, { rejectWithValue }) => {
    try {
      const promises = [
        await getAllPosts(),
        await getAllUsers(),
        await getAllPhotos(),
      ];
      return Promise.all(promises).then((data) => {
        const [posts, users, photos] = data;
        return { posts: posts.data, users: users.data, photos: photos.data };
      });
    } catch (e) {
      return rejectWithValue('Не удалось загрузить данные');
    }
  }
);
