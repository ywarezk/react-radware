import { useRef, useState } from "react"


/**
 * 
 
 class SomeComponent extends Component {
	 handleClick() {
		 this.someVariable = 'remember this'
	 }
	 
	 render() {
		 return <h1>some component</h1>
	 }
 }
 
 */

export default function UseRefExample() {
	// { current: 42 }
	// { current: HeadingElement }
	// 1. manipulate and access dom object
	
	const [counter, setCounter] = useState(0);
	
	const refObject = useRef(42);
	
	// 2. instance variables - memory saved variables
	const pigletRef = useRef('piglet');
	
	const handleClick = () => {
		pigletRef.current = 'sweetness';
	}
	
	
	
	return (
		<h1 onClick={handleClick} ref={refObject}>useRefExample</h1>
	)
}