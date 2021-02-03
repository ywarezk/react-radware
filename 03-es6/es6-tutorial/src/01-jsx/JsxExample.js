/**

jsx

{
	
}

 */
 
export default function JsxExample() {
	// React.createElement()
	
	return (
		<div>
			<h1 
			className={'hello world'} 
			style={ {color: 'red', backgroundColor: 'blue'} }
			>
				jsx example {[<span>hello again</span>, true, false, null, 'hello', 10]}
			</h1>
			
			<button disabled={false}>
				stam button
			</button>					
		</div>
		
	)
}

// {}
// 1. attribute/prop  
// 2. between opening and closing tags

// 1. if in prop/attribute place what the prop/attribute expects to get

/*
	1. React element <YourComponent /> <h1></h1>
	2. string
	3. number
	4. true / false
	5. falsey - null/undefined
	6. array
	
*/