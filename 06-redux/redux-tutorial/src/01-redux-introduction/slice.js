import { createSlice } from '@reduxjs/toolkit';

// createSlice - shortcut for creating reducer + actions


// { actions: {}, reducer}
export const helloSlice = createSlice({
	name: 'hello',
	initialState: {
		message: 'hello world'
	},
	reducers: {
		changeMessage: (state, action) => {
			// {...state}
			state.message = action.payload;			
		}
	}
})

export const { changeMessage } = helloSlice.actions

export default helloSlice.reducer;