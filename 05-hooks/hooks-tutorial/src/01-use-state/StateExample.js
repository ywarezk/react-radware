import { useState } from "react"
// const counter = 0;

export default function StateExample() {
	
	// [0, (newValue) => {}]
	const [counter, setCounter] = useState(0);
	
	// some initial calculated value
	const [num, setNum] = useState(() => {
		// some calculation
		return Math.random();
	})
	
	// do not call the setState inside the function
	// setCounter()
	
	const handleClick = () => {
		// setCounter(counter + 1);
		
		setCounter( (oldCounter) => {
			return oldCounter + 1;
		} )
	}
	
	return (
		<h1 onClick={handleClick}>
			Some state {counter}
		</h1>
	)
}