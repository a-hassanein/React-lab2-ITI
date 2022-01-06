import {useState} from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const Register = () => {


    const [info, setInfo] = useState({
        name: "",
        email:"",
        userName: "",
        password: "",
        confirmPassword: ""
    })

    const [error, setError] =useState({
        nameValidate:null,
        emailValidate:null,
        userNameValidate: null,
        passwordValidate: null,
        confirmPasswordValidate: null
    })

    const changeValue = (e) => {
        console.log(e)
        if(e.target.name === "name"){
            setInfo({
                ...info,
                name: e.target.value
            })

            setError({
                ...error,
                nameValidate:
                e.target.value.length === 0 ?
                "Please insert your name"
                :e.target.value.length < 3 ?
                "Please enter valid name"
                :null
            })
            

        }else if(e.target.name === "email"){
            setInfo({
                ...info,
                email: e.target.value

            })

            const regex =/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            if(!(regex.test(e.target.value))){
                setError({
                    ...error,
                    emailValidate: "Please enter valid email"
                })
            }else{
                setError({
                    ...error,
                    emailValidate: null
                })
            }

        }else if (e.target.name === "userName"){
            setInfo({
                ...info,
                userName: e.target.value
            })

            const userregex =/^\S*$/
            if(!(userregex.test(e.target.value))){
                setError({
                    ...error,
                    userNameValidate: "Please enter valid User Name"
                })
            }else{
                setError({
                    ...error,
                    userNameValidate: null
                })
            }

        }else if (e.target.name === "userpassword"){
            setInfo({
                ...info,
                password: e.target.value
            })

            let passwordregex =new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})")
            if(!(passwordregex.test(e.target.value))){
                setError({
                    ...error,
                    passwordValidate: "Your password should contains at least one lowercase , one uppercase , at least one digit and special character"
                
                })
            }else{
                setError({
                    ...error,
                    passwordValidate: null
                })
            }

        }else if (e.target.name === "confirmpassword"){
            setInfo({
                ...info,
                confirmPassword: e.target.value
            })

            if(info.password===info.confirmPassword){
                setError({
                    ...error,
                    confirmPasswordValidate:
                        "not matched"
                })
            }else{
                setError({
                    ...error,
                    confirmPasswordValidate:null
                })
            }
            
        }
    }

    const handlesubmit = (e) =>{
        e.preventDefault();
    }


    return (
        <Form onSubmit={(e) => handlesubmit(e)}>
        
        <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Name" value={info.name}
            name="name"
            onChange={(e) => changeValue(e)}
            />
            <Form.Text className="text-muted">
            <small className="text-danger">{error.nameValidate}</small>
            </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail2">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter Email" value={info.email}
            name="email"
            onChange={(e) => changeValue(e)}
            />
            <Form.Text className="text-muted">
            <small className="text-danger">{error.emailValidate}</small>
            </Form.Text>
        </Form.Group>


        <Form.Group className="mb-3" controlId="formBasicUsername">
            <Form.Label>User Name</Form.Label>
            <Form.Control type="text" placeholder="Enter User Name" value={info.userName}
            name="userName"
            onChange={(e) => changeValue(e)}
            />
            <Form.Text className="text-muted">
            <small className="text-danger">{error.userNameValidate}</small>
            </Form.Text>
        </Form.Group>


        <Form.Group className="mb-3" controlId="formBasicPassword2">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" value={info.password}
            name ="userpassword"
            onChange={(e) => changeValue(e)}
            />
            <Form.Text className="text-muted">
            <small className="text-danger">{error.passwordValidate}</small>
            </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicconfirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control type="password" placeholder="Confirm Password" value={info.confirmPassword}
            name ="confirmpassword"
            onChange={(e) => changeValue(e)}
            />
            <Form.Text className="text-muted">
            <small className="text-danger">{error.confirmPasswordValidate}</small>
            </Form.Text>
        </Form.Group>


        {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
        </Form.Group> */}
        <Button variant="dark" type="submit">
            Register
        </Button>
        </Form>
    );
}

export default Register;