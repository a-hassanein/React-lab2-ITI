import {useState} from "react";

const Form = () => {

	const [info, setInfo] = useState({
		userName: "",
		title: ""
	})


	const [error, setError] = useState({
		userNameValidate: null, // valid 3, required, null
		titleValidate:null 
	})






	const handleSubmit = (e) => {
		console.log(e)
		e.preventDefault();
	}


	const changeValue = (e) => {
		console.log(e.target.userName)
		console.log(e.target.value)

		if(e.target.userName === "useruserName") {
			setInfo({
				...info,
				userName: e.target.value
			})

			setError({
				...error,
				userNameValidate: 
					e.target.value.length === 0 ? 
					"please insert your User Name"
					: e.target.value.length < 3 ? 
					"please enter a valid User Name"
					: "right"
			})

		}
		else if (e.target.userName === "usertitle"){
			setInfo({
				...info,
				title: e.target.value
			})
			setError({
				...error,
				titleValidate: 
					e.target.value.length === 0 ? 
					"please insert your title"
					: e.target.value.length < 3 ? 
					"please enter a valid title"
					: null
			})
		}


	}

 


	return (

		<form onSubmit={(e) => handleSubmit(e)}>
		  <div className="mb-3">
		    <label >User Name</label>
		    <input type="text" 
		    	className="form-control" 
		    	value= {info.userName}
		    	userName= "username"
		    	id="username"
		    	onChange={(e) => changeValue(e)}

		    	/>
		    <small className="text-danger"> {error.userNameValidate} </small>
		   
		  </div>
		  <div className="mb-3">
		    <label  className="form-label">Password</label>
		    <input type="text" 
		    className="form-control" 
		    value={info.title} 
		    userName="usertitle"
		    onChange={(e) => changeValue(e)}/>
		  </div>
		    <small className="text-danger"> {error.titleValidate} </small>

		 
		  <button type="submit" 
		  		  className="btn btn-primary">Submit</button>
		</form>

	)




}


export default Form;