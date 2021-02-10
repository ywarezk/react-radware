
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// action async fetch the list from the server
export const fetchTasks = createAsyncThunk(
	'todo/fetchTasks',
	async () => {
		const response = await fetch(`http://nztodo.herokuapp.com/api/tasks/?format=json`)
		// Inferred return type: Promise<MyData>
		return (await response.json());
	}
)

export const sliceTodo = createSlice({
	name: 'todo',
	initialState: {
		tasks: []
	},
	reducers: {
		
	},
	extraReducers: {
		[fetchTasks.fulfilled]: (state, action) => {
			state.tasks = action.payload
		}
	}
})

