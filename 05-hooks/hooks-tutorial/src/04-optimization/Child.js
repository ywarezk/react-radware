
/**

useMemo
React.memo
useCallback - not really for optimization although many react developer for some reason
think it is

 */

import { useState, useMemo, useRef, useCallback } from 'react';
import Grand from './Grand';

export default function Child() {
	console.log('child is rendering');
	
	const [counter, setCounter] = useState(0);
	
	// {current : () => }
	// useRef(() => {
		
	// })
	
	
	const someRandomNumber = useMemo(() => {
		let someCalculation = 1;
		for (let i = 0; i < 1000000; i++) {
			someCalculation+= Math.random();
		}
		return someCalculation;	
	}, [])
	
	/*
	const someHeavyCalculation = () => {
		let someCalculation = 1;
		for (let i = 0; i < 1000000; i++) {
			someCalculation+= Math.random();
		}
		return someCalculation;	
	}
	const someRandomNumber = someHeavyCalculation();
	*/
	
	
	const handleClick = useCallback(() => {
		setCounter(counter + 1);
	}, [])
	
	return (
		<>
			<h1 onClick={handleClick}>
				Child {someRandomNumber}
			</h1>
			<Grand cb={handleClick} />
		</>
	)
}

/**

memoization

{
	arg1=10,arg2=20, .... => 300,
	arg1=50, arg2=100 ... => 500
}

function(arg1, arg2, ...argn) {
	// some heavy calculation
	return value;
}

 */