import Button from "./01-styled-button/Button";
import Navigation from "./03-navigation/Navigation";
import HoverButton from './02-inheritance/Button';

function App() {
  return (
    <div className="App">
      <h1>
	  	styled-components
	  </h1>
	  
	  <Button />
	  
	  
	  <h2>
	  	Navigation
	  </h2>
	  
	  <Navigation isAdmin />
	  
	  <h2>
	  	button with hover effect
	  </h2>
	  
	  <HoverButton>
	  	hover over me
	  </HoverButton>
    </div>
  );
}

export default App;
