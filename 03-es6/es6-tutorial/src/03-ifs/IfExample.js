/**
 * 
 
 if
 
 const hello = if (condition) {
	 
 } else if(condition2) {
	 
 } else {
	 
 }
 
 
 const hello = switch(variable) {
	case 'hello':
	 	do something
		break;
	case '':
		do something
		break;
	default:
		do something
 }
 
 // single line if
 if (condition) {
	 return value1;
 } else {
	 return value2
 }
 const hello = condition ? value1 : value2
 
 if (condition) {
	 return value1
 } else {
	 return null
 }
 
 const someVar = condition ? value1 : null
 
 // value1 / false
 const someVar = condition && value1;
 
 if (!condition) {
	 return value1
 } else {
	 return null;
 }
 
 // value1 / true
 const someVar = condition || value1
 
 
 */


export default function IfExample() {
	
	
	return (
		<>
			<button disabled={ Math.random() > 0.5 ? true : false } >
				enable / disable
			</button>
			
			{
				Math.random() > 0.5 && (
					<h1>
						the number is higher
					</h1>
				)
			}
			
			{
				function() {
					if (Math.random() > 0.5) {
						return <h1>higher</h1>
					} else {
						return <h1>lower</h1>
					}
				}()
			}
			
		</>
	)
}