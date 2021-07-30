import React from"react";
import {useHistory} from "react-router-dom";

const Todocard=(props)=>{

	const history=useHistory();
	const{todo}=props;
	const{id,title,completed}=todo

return(
	
	<div onClick={()=>history.push(`/todo/${id}`)} style={{backgroundColor:"grey",borderRadius:"25px",textAlign:"center"}}>
		<h5>Id: {id}</h5>
		  <h5>Title:  {title}</h5>                                                    <h5>{`Completion: ${completed}`}</h5>


	</div>


	);


}

export default Todocard;
