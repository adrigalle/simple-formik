import './index.css';
import React from 'react'; // needed to add in this bish
import {useFormik} from 'formik'; // to make form after installing, also need to create a const useFormik thing below

function App() {

  const formik = useFormik({
    // initial values that correspont to all elements on the page
    initialValues: {
      emailField: '',
      pswField: ''      
    },
    // this is expecting
    onSubmit: values => {
      console.log('form:',values);
    }, 
    validate: values => {
      // define object
      let errors = {};
      // initializing valid email stuff
      var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      // simple validations, if missing then error will pop up
      if(!values.emailField) errors.emailError = 'Field required';
      // adding validation for username should be an email
      if(validRegex.test(values.emailField) == false) errors.emailError = "Username should be an email";
      if(!values.pswField) errors.pswError = 'Field required';

      return errors;
      // shows up immediately
    }
  });

  return (
    // first add formik.hadleSubmit, and all others need to have a specific format for value and the onchange needs a handlechange
    // validation, render errors conditionally, that if the error for that value exists, then div will pop up, otherwise null
    <div>
        <form onSubmit={formik.handleSubmit}>

          <div>Email:</div>
          <input type="text" name="emailField" onChange={formik.handleChange} value={formik.values.emailField} placeholder='email@awesome.com'/>
          {formik.errors.emailError ? <div style={{color:'red'}}>{formik.errors.emailError}</div> : null} 

          <div>Password:</div>
          <input type="text" name="pswField" onChange={formik.handleChange} value={formik.values.pswField}/><br/>
          {formik.errors.pswError ? <div style={{color:'red'}}>{formik.errors.pswError}</div> : null}   

          <button type="submitBtn">Submit</button>

      </form> 
    </div>
  );
}

export default App;

