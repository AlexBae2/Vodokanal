import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	isLogged: false,
	name: "",
};

export const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		authorization: (state, action) => {
			state.name = action.payload.name;
			state.isLogged = true;
		},
	},
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = authSlice.actions;

export default authSlice.reducer;
