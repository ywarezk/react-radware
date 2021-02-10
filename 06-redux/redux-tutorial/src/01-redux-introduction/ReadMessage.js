/**

to ask redux for the message
display it
 */
 
import { useSelector } from 'react-redux';
 
 
export default function ReadMessage() {
	const message = useSelector((state) => {
		return state.hello.message
	});
	
	return (
		<h1>
			The message i got from redux: {message}
		</h1>
	)
}