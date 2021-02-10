/**

change the message

 */
 
import { changeMessage } from './slice';
import { useDispatch } from 'react-redux'
 
export default function WriteMessage() {
	const dispatch = useDispatch();
	
	const handleClick = () => {
		// change the message in redux
		
		// action
		// { type: 'Change Hello World', payload: 'foo bar'}
		
		dispatch(changeMessage(`foo bar ${Math.random()}`));
	}
	
	return (
		<button onClick={handleClick}>
			change the message
		</button>
	)
}