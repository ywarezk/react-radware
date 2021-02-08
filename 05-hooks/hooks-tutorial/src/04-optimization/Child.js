
import { useState, useMemo, useRef } from 'react';
import Grand from './Grand';

export default function Child() {
	console.log('child is rendering');
	
	const [counter, setCounter] = useState(0);
	
	// {current : () => }
	// useRef(() => {
		
	// })
	
	
	const heavyCalculation = useMemo(() => {
		let someCalculation = 1;
		for (let i = 0; i < 1000000; i++) {
			someCalculation+=i;
		}
		return someCalculation;	
	}, [])
	
	/*
	const someHeavyCalculation = () => {
		let someCalculation = 1;
		for (let i = 0; i < 1000000; i++) {
			someCalculation+=i;
		}
		return someCalculation;	
	}
	someHeavyCalculation();
	*/
	
	
	const handleClick = () => {
		setCounter(counter + 1);
	}
	
	return (
		<>
			<h1 onClick={handleClick}>
				Child
			</h1>
			<Grand />
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