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

------------------------>

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
  
/*
Promise states:
1. pending
2. Fulffiled / rejected
*/
const timerPromise = new Promise((resolve, reject) => {
	 
	 // wraps your async code
	 setTimeout(
		 () => {
			//  resolve(42);
			reject(new Error('something happened'))
		 },
		 1000
	 )
	 
});
 
timerPromise.then(
	(meaningOfLife) => {
		console.log('hello world' + meaningOfLife);	
 	},
	(err) => {
		console.log(err.message);
	}
)

timerPromise.then(
	(meaningOfLife) => {
		console.log('another logic');	
 	}
)

timerPromise.catch((err) => {
	
})


function stam() {
	
	try {
		// this code can fail	
	} catch(err) {
		// some generic stuff
		throw err;		
	}
	
	
	
	// throw new Error();
}

// try {
// 	stam();	
// } catch(err) {}

/**
 * 
 
 fetch can fail
 no internet
 no server
 
 response
 response.status => 401
 response.status => 403
 response.status => 500
 
 */
class SendRequest {
	
	// Promise<json>
	get(url) {
		/*
		
		// pending
		const promiseFetch = fetch(url);
		
		// 
		const promiseFetch2 = promiseFetch
			// 401
			.then(
				(response) => {
					if (response.status === 401) {
						// redirect the user to the login page
					}
					return response;	
				}			
			)
			
		// Promise<Response> => can also fail
		const promiseFetch3 = promiseFetch2.then(
			(response) => {
				if (response.status === 403 || response.status === 500) {
					throw new Error('something happened');
				}
				return response;
			}
		)
		
		return promiseFetch3;
		
		*/
		
		return fetch(url)
			.then(
				(response) => {
					if (response.status === 401) {
						// redirect the user to the login page
					}
					return response;	
				}		
			)
			.then(
				(response) => {
					if (response.status === 403 || response.status === 500) {
						throw new Error('something happened');
					}
					return response;
				}
			)
			.catch((err) => {
				return [];
			})
			.then(
				(response) => {
					return response.json()
				}
			)
			.catch((err) => {
				// some generic login
				throw err;
			})
	}
}