import {createAsyncThunk} from "@reduxjs/toolkit";
import {getAllPosts, getPosts,} from "../../../../utils/api/routes/posts/posts.js";
import {getAllUsers} from "../../../../utils/api/routes/users/users.js";
import {getAllPhotos} from "../../../../utils/api/routes/photos/photos.js";

export const fetchPosts = createAsyncThunk(
  "/fetchPost",
  async ({ currentPage }, { rejectWithValue }) => {
    try {
      const response = await getPosts(currentPage);
      return response.data;
    } catch (e) {
      return rejectWithValue("Не удалось загрузить посты");
    }
  }
);

export const fetchAllData = createAsyncThunk(
  "/fetchAllData",
  async (_, { rejectWithValue }) => {
    try {
      const posts = await getAllPosts();
      const users = await getAllUsers();
      const photos = await getAllPhotos();
      return { posts: posts.data, users: users.data, photos: photos.data };
    } catch (e) {
      return rejectWithValue("Не удалось загрузить данные");
    }
  }
);
