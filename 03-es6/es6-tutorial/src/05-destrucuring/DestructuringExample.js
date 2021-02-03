/**

destructuring

quickly pull value from array or object to variable

<DestructoringExample disabled onClick onMouseOver />

 */

import { useState } from "react";
import PropTypes from 'prop-types';

 
const someDictionary = {
	hello: 'world',
	meaningOfLife: 42
}

// world
/*
const hello = someDictionary['hello'];
const eithan = someDictionary['meaningOfLife'];
*/
const { hello, meaningOfLife: eithan } = someDictionary;

const arrayOfNumbers = [42, 36, 8, 3];

const [first, second, third, fourth] = arrayOfNumbers;

// {  }
export default function DestructuringExample( { 
	// i might get undefined
	isDisabled = true
} ) {
	// [stateVar, setStateVar]
	// const array = useState('initial');
	// const initialState = array[0] 
	// const setInitialState = array[1] 
	const [initialState, setInitialState] = useState('initial');
	
	return (
		<button disabled={isDisabled}>
			some value
		</button>
	)
}

DestructuringExample.propTypes = {
	isDisabled: PropTypes.bool.isRequired
}