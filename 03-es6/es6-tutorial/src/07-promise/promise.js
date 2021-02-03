/**

Promise

// deal with async code

 */
 
// const hello = 'hello';
// console.log('hello')

/**

what kind of async code do i have?



 */
 
console.log('hello');

// ----O--|--->
setTimeout(
	() => {
		console.log('hello world');	
	},
	1000
)

const hello = 'world'
// ...

// ----O----O----O----O----O---->
// 
setInterval(
	() => {
		console.log('hello world');
	}
	,2000
)

// Promise
// helps us with async code not with all async code
// gives us a single api for dealing with async

/**

setTimeout
// -------0--|------------>

// ajax request
// -------0--|-------------->

// setInterval not for promise
// websocket not for promise
// events triggered more than once? if yes not for promise


--------X--------------->

 */
 
 
 // fetch('...') => Promise
 
 /**
  * 
  
  class Promise {
	  
	  constructor(cb) {
		  const resolve = () => {}
		  const reject = () => {}
		  
		  cb(resolve, reject)
	  }
  }
  
  
  */
const timerPromise = new Promise((resolve, reject) => {
	 
	 // wraps your async code
	 setTimeout(
		 () => {
			 resolve(42);
		 },
		 1000
	 )
	 
});
 
timerPromise.then(
	(meaningOfLife) => {
		console.log('hello world' + meaningOfLife);	
 	}
)

timerPromise.then(
	(meaningOfLife) => {
		console.log('another logic');	
 	}
)

timerPromise.then(
	(meaningOfLife) => {
		console.log('logic 2');	
 	}
)