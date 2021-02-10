import logo from './logo.svg';
import './App.css';
import ReadMessage from './01-redux-introduction/ReadMessage';
import WriteMessage from './01-redux-introduction/WriteMessage';
import TodoList from './todo/TodoList';

function App() {
  return (
    <div className="App">
      <ReadMessage />
	  
	  <WriteMessage />
	  
	  <TodoList />
    </div>
  );
}

export default App;
