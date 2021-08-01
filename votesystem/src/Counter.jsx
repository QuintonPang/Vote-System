import React,{useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {increment,decrement} from "./redux/ducks/counter.js";
import "./counter.css";

const Counter =(props) =>{

	const [vote,setVote]=useState(0);
	const {firstName, lastName} =props;


	const dispatch=useDispatch();

	const handleIncrement=()=>{


		dispatch(increment());
		setVote(vote+1);


	}


	const handleDecrement=()=>{

		dispatch(decrement());
		setVote(vote-1);

	}

	return(


		<div class="handler">

		<br/>

		<h1>{firstName} {lastName} : {vote}</h1>
		
			
			<button onClick={handleIncrement}>Increment Vote</button>


		<br/>
		<br/>

			<button onClick={handleDecrement}>Decrement Vote</button>
		
		


		</div>

	)

	
}




export default Counter;
