import './App.css';
import Formtow from "./form2";
import React from "react";
import Formikform from "./formik";
import Register from "./register";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Login Form Normal</h1>
        <Formtow />
        <br></br>
        <br></br>

        <h1>Login Form Formik</h1>
        <Formikform />
        <br></br>
        <br></br>

        <h1>Register Form </h1>
        <Register/>

        {/* <h1>FormIK</h1>
        <Basic/> */}
      </div>
    </div>
  );
}

export default App;
