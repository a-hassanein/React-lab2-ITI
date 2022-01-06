import React from 'react';
import { Formik } from 'formik';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import {useState} from "react";
import * as EmailValidator from "email-validator"


const Formikform = () => {

    return (
        <Formik
            initialValues={{email: "",password: ""}}
            onSubmit={(values ,{ setSubmitting }) => {
                console.log("Submitting")
            }}
            validate ={values =>{
                let errors ={};

                if(!values.email){
                    errors.email = "Required"

                }else if(!EmailValidator.validate(values.email)){
                    errors.email ="Invalid Email Address"
                }
                
                const passwordregex =new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})")
                if(!values.password){
                    errors.password = "Required"
                }else if(values.password.length < 8){
                    errors.password ="Password must be 8 character"
                }else if(!passwordregex.test(values.password)){
                    errors.password="Invalid password. Must contain at least one lowercase , one uppercase , at least one digit and special character"
                }

                return errors;
            }}
        >
            {props =>{
                    const {
                        values ,
                        touched ,
                        errors ,
                        isSubmitting,
                        handleChange,
                        handleBlur,
                        handleSubmit
                    } = props;
                    return(
                        <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail3">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" value={values.email}
                            name="email"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            />
                            <Form.Text className="text-muted">
                            <small className="text-danger">{errors.email}</small>
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword3">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" value={values.password}
                            name ="password"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            />
                            <Form.Text className="text-muted">
                            <small className="text-danger">{errors.password}</small>
                            </Form.Text>
                        </Form.Group>

                        <Button variant="dark" type="submit" disabled={isSubmitting}>
                            Submit
                        </Button>
                        </Form>
                    )
                }
            }


        </Formik>
        
    );
}

export default Formikform;