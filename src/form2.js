import {useState} from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const Formtow = () => {

    let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');

    const [info, setInfo] = useState({
        userName: "",
        password: ""
    })

    const [error, setError] =useState({
        userNameValidate: null,
        passwordValidate: null
    })

    const changeValue = (e) => {
        console.log(e)
        if(e.target.name === "name"){
            setInfo({
                ...info,
                userName: e.target.value

            })

            const regex =/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            if(!(regex.test(e.target.value))){
                setError({
                    ...error,
                    userNameValidate: "Please enter valid email"
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

            setError({
                ...error,
                passwordValidate:
                    e.target.value.length < 8 ?
                    "Please insert password with lingth 8 charcter"
                    :null
            })
        }
    }

    const handlesubmit = (e) =>{
        e.preventDefault();
    }


    return (
        <Form onSubmit={(e) => handlesubmit(e)}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" value={info.userName}
            name="name"
            onChange={(e) => changeValue(e)}
            />
            <Form.Text className="text-muted">
            <small className="text-danger">{error.userNameValidate}</small>
            </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" value={info.password}
            name ="userpassword"
            onChange={(e) => changeValue(e)}
            />
            <Form.Text className="text-muted">
            <small className="text-danger">{error.passwordValidate}</small>
            </Form.Text>
        </Form.Group>
        {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
        </Form.Group> */}
        <Button variant="dark" type="submit">
            Submit
        </Button>
        </Form>
    );
}

export default Formtow;