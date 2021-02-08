// import StateExample from "./01-use-state/StateExample";
// import UseEffectExample from "./02-use-effect/UseEffectExample";
import Child from "./04-optimization/Child";

function App() {
	console.log('app is rendering');
	
  return (
    <div className="App">
      <h1>React Hooks</h1>
{/* 	  
	  <StateExample />
	  
		  
	<UseEffectExample /> */}
		  
	  
	  <Child />
	  
    </div>
  );
}

export default App;
