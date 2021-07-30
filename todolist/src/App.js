import logo from './logo.svg';
import './App.css';
import Todos from "./Todos.jsx";
import Todo from "./Todo.jsx";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";


function App(){


  return (
    <div className="App-header">

	<Router>

		<Switch>


			<Route exact path="/">
	  			<Todos/>
	  		</Route>
			
	  		<Route path="/todo/:id">
	  			<Todo/>

			</Route>
	  		


	  	</Switch>

	</Router>

 </div>
  );
}

export default App;
