/**
I want to create a button 
with red background
border

 */
 
import styled from 'styled-components';
// import React from 'react';

const StyledButton = styled.button`
	background-color: ${prop => prop.disabled ? 'gray' : 'red'};
	border: 3px solid blue;
`

export default function Button() {
	return (
		<StyledButton>
			some button
		</StyledButton>
	)
}