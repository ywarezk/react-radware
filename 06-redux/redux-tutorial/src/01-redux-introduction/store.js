import { combineReducers, createStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import helloReducer from './slice';
import { sliceTodo } from '../todo/todo.slice';

/*
export const store = createStore(
	(state) => state,
	{
		hello: {
			message: 'hello world'
		}
	} 
);
*/

console.log(helloReducer);
export const store = configureStore({
	reducer: combineReducers({
		hello: helloReducer,
		todo: sliceTodo.reducer
	}),
	// preloadedState: {
	// 	hello: {
	// 		message: 'hello world'
	// 	}
	// }
})