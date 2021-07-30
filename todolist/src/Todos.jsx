import React, {useEffect,useState} from "react";
import axios from "axios";
import {CircularProgress} from "@material-ui/core";
import Todocard from "./Todocard.jsx";

const Todos = ()=>{

const [todos,setTodos] = useState();





	useEffect(()=>{
		

		axios.get("https://jsonplaceholder.typicode.com/todos").then((res)=>{

			const responseTodos=res.data;
			setTodos(responseTodos);
			
			

		});


	




	},[]);

return(

	<>

	

	{


	todos?(
		<div>
		<h1 style={{textAlign:"center"}}><u>To Do List</u></h1>
	
		{todos.map((todo)=>{

			return(
			<Todocard key={todo.id} todo={todo} />
			)

	})}

		</div>		
		
	 	):(<CircularProgress/>)
	

	}



			

		

		
											
	            
						   
	

	        </>




		
);


}

export default Todos;
