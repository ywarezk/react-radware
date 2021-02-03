/**

const someObject = {
	'hello': 'world',
	foo: true
}

// {hello, foo, anotherKey, anotherKey2}
const anotherObject = {
	...someObject,
	anotherKey: 'stam',
	anotherKey2: 'dfgdf',
}

const myNumbers = [1,2,3,4];

const addMoreNumbers = [...myNumber, 10, 12]


<MyButton onClick={() => {}} disabled>
</MyButton>

 */
 
 
// {onClick: () => {}, randomNumber}
// props => { key:  }
// <MyButton randomNumber={10} disabled={true} onClick={() => {}} />
// {randomNumber: 10, disabled: true, onClick: () => {}}
// [ {randomNumber: 10, disabled: true, onClick: () => {}} ]
export default function MyButton( { randomNumber, ...restOfObject } ) {
	
	
	
	return (
		<button {...restOfObject} >
			my button
		</button>
	)
}

// [arg1, arg2, arg3,]
// arguments
function someValue(...myArgs) {
	
}

someValue({hello: 'world'}, 10, true)