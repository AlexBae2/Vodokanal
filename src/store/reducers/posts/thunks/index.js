import { createAsyncThunk } from '@reduxjs/toolkit'
import { getAllPosts, getPosts } from '../../../../utils/api/routes/posts/posts.js'

export const fetchPosts = createAsyncThunk(
	'/fetchPost',
	async ({currentPage}, { rejectWithValue }) => {
		try{
			const response = await getPosts(currentPage)
			return response.data
		}
		catch (e){
			return rejectWithValue('Не удалось загрузить пользователей')
		}
	}
)

export const fetchAllPosts = createAsyncThunk(
	'/fetchAllPost',
	async (_, {rejectWithValue}) => {
		try{
			const response = await getAllPosts()
			return response.data
		}
		catch (e) {
			return rejectWithValue('Не удалось загрузить пользователей')
		}
	}
)