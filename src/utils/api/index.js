import axios from 'axios'
import { DOMAIN } from '../constants/env.js'

export const instance = axios.create({
	baseURL: `${DOMAIN}`,
	headers: {
		'Content-Type': 'application/json',
	},
	withCredentials: true,
})
