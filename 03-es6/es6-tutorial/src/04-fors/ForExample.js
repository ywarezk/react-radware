/**

	for (let i=0; i<10; i++) {
		
	}
	
	for (const item of someArray) {
		
	}
	
	{ hello: 'world' }
	for (const key in someObject) {
		
	}
	
	while(someConditionIsTrue) {
		
	}
	
	do {
		
	} while(someConditionIsTrue)
	
	

 */
 
 // Array.prototype = { map: return Array, filter: , reduce  }
 
 export default function ForExample() {
	const todoList = [
		'Walk Piglet',
		'Walk Sweetness',
		'Play with dogs'
	]
	
	// [<li></li>]
	
	
	// [ <button>...</button>]
	/*
	const newArray = [];
	for (let todo of todoList) {
		newArray.push(
			<button>
			</button>
		)
	}
	*/
	 
	return (
		 
		<ul>
			{
				todoList.map((todoListStr, index) => 
					<li key={index}>
						{todoListStr}
					</li>
				)
				
				/*
				[1,2,3]
				[1,2,3,4]
				[2,3,4,1]
				[
					<li>
						Walk Piglet
					</li>,
					<li>
						Walk Piglet
					</li>,
					<li>
						Walk Piglet
					</li>
				]
				*/	
			}			
		</ul>		 
		 
	)
	 
 }