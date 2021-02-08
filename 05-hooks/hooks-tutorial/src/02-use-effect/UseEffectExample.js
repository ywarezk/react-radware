/**

<UseEffectExample msg="hello" />

 */

import { useEffect, useState } from "react"


// props => {msg: 'hello'}
export default function UseEffectExample( { msg } ) {
	// counter0, counter1, counter2
	const [counter, setCounter] = useState(0);
	
	useEffect(
		// my component finish render
		// componentDidMount / componentDidUpdate
		() => {
			// setCounter(counter + 1);
		}
	)
	
	useEffect(
		// componentDidMount + some of the updates
		() => {
			return () => {
					
			}
		},
		[
			/** state / props / other hooks result  */
			
			// this will run the effect when i get a different msg
			msg
		]
	)
	
	useEffect(
		// this will run the effect only once - componentDidMount
		
		() => {
			
			const intervalId = setInterval(() => {
				setCounter((oldCounter) => {
					return oldCounter + 1;
				});
			}, 1000)
			
			return () => {
				clearInterval(intervalId);
			}	
			
		},
		[  ]
	)
	
	// setInterval()
	
	return (
		<h1> 
			useEffect Example {counter}
		</h1>
	)
	
}



const someVariable = 'hello'

// closure: {}
function hello() {
	console.log(someVariable);
}


// ---0----0----0---0---0---0------->