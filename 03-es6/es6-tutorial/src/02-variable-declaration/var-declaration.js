/**

how to declare variables in js

var/let/const variableName = someValue

 */
 
var hello = 'world';
let foo;
foo = true;
const lurem = 42;

/*
			scope			number of assignments

var        functional  				  infinite  

let   		 {}       				  infinite

const		 {}							 1


*/


// lurem = 'hello';

if (true) {
	let message = 'stam';
}

console.log(message);


function helloWorld() {
	var stam = 10;
	
	if (true) {
		var stam = 'hello world';
	}
	console.log(stam);
}