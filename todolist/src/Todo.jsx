import React,{useEffect,useState} from "react";
import {useParams,useHistory} from "react-router-dom";
import axios from"axios";
import {CircularProgress} from "@material-ui/core";


const Todo =()=>{

	 const {id}=useParams();
   	const history = useHistory();

	const [tododetails,setTododetails] = useState();





	        useEffect(()=>{


			 axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`).then((res)=>{

						                        const responseTododetails=res.data;
						                        setTododetails(responseTododetails);



						                });







		},[]);

	const {id:todoid,title,completed}=tododetails||{}

	
		


return( 

	<React.Fragment>

	{tododetails?(

		<div style={{textAlign:"center"}}>
	

	<h1 style={{color:"red"}}><strong><u> To do number {id}</u></strong></h1>

		

	<h2>Id: {todoid}</h2>
	<h2>Title: {title}</h2>
	<h2>{`Completion: ${completed}`}</h2>
	</div>
	):(

		<CircularProgress/>

	)}

	
	<button style={{position:"absolute",bottom:"125px"}} onClick={()=>{

			history.push("/");
		


	}}>Back</button>

	</React.Fragment>
);


}


export default Todo;
