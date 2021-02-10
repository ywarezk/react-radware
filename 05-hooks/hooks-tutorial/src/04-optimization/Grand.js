import { memo, useCallback, useEffect } from 'react';


function Grand( { cb } ) {
	console.log('grand is rendering');
	
	// useCallback(cb, [])
	
	useEffect(() => {
		
	}, [ cb ])
	
	return (
		<h1>
			Grand
		</h1>
	)
}

export default memo(Grand);