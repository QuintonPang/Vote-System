import logo from './logo.svg';
import './App.css';
import Counter from "./Counter.jsx";
import {useSelector} from "react-redux";

function App() {


	const voters =[


		
		{firstName:"Quinton",
		lastName:"Pang"},

		{firstName:"Lee",
			lastName:"Zii Jia"},

		{firstName:"Song",
			lastName:"Joong Ki"}


	]



	const count=useSelector((state)=>state.counter.count);

  return (
    <div className="App">
	<h1>Vote System with Redux</h1>
	  <h2> Total votes: {count}</h2>
	  

	  { voters.map((voter)=>(


		<Counter firstName={voter.firstName} lastName={voter.lastName}/>


	  ))}
	


    </div>
  );
}

export default App;
