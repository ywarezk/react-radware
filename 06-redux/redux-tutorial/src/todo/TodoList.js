/**

when the component loads
i want to fetch the todo list from a server
i want to populate redux with the list
i want to display that list

 */

import { useEffect } from "react"
import { fetchTasks } from './todo.slice';
import { useDispatch } from 'react-redux';

 
export default function TodoList() {
	const dispatch = useDispatch();
	
	useEffect(() => {
		
		// fetch to redux list items
		dispatch(fetchTasks());
			
	}, [])
	
	return (
		<ul><li></li></ul>
	)
}