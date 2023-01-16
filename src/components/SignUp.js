import React from "react";
import { Formik,Form } from 'formik';
import { Textfield } from "./Textfield";
import *as Yup from 'yup'
import { useState } from "react";
import axios from "axios";
export const SignUp=() =>{

   
    const validate = Yup.object({
        firstname:Yup.string()
        .max(15, 'Must be in 15 char or less')
        .required('Required'),

        lastname:Yup.string()
        .max(15, 'Must be in 15 char or less')
        .required('Required'),


        email:Yup.string()
        .max( 'Email inValid')
        .required('Required'),

        mobile:Yup.string()
        .max(10, 'Must be in 15 char or less')
        .required('Required'),

        password:Yup.string()
        .max(8, 'Password must be in 6 Length')
        .required('Required'),

        confirmpass: Yup.string()
         .oneOf([Yup.ref('password')],'Password must match')
         .required('Required')
  
    })

   

        // eslint-disable-next-line no-unused-vars
        const [id,setId]=useState('');
        const [fname,setFName]=useState('');
        const [Lname,setLName]=useState('');
        const [mobile,setmobile]=useState('');
        const [email,setemail]=useState('');
        const [password,setpassword]=useState('');
        const [confompassword,setconfompassword]=useState('');

        async function save(event){
        
           event.preventDefault();
        
                    try{
                       await axios.post("http://localhost:8085/api/v1/employee/save",
                       {
                          employeeFname: fname,
                          employeeLname: Lname,
                          mobile: mobile,
                          email:email,
                          password:password,
                          Conformpass:confompassword
                    
                       });
                       console.log(fname,Lname,mobile,email,password,confompassword);
                       alert("Employee Registation Successfully..")
                       setId("");
                       setFName("");
                       setLName("");
                       setmobile("");
                       setemail("");
                       setpassword("");
                       setconfompassword("");

                    } catch (err) {
                       alert("Failed to Register...")  
        
                  }
                }
    
        
    //1
    return(
        <Formik
         initialValues={{
            firstname: '',
            lastname: '',
            email: '',
            mobile: '',
            password: '',
            confirmpass: ''
         }}

         validationSchema={validate}

         onSubmit={
            value=>{
                console.log(value);
            }
         }
        >
            {formik =>(
                <div>
                   <h1 className = "my-4 font-weight-bold-display-4">Sign Up</h1>
                 {console.log(formik)}
                    <Form>
                        <Textfield lable="First Name" name="firstname" type="text"
                              value={fname}
                              onChange={(event)=> {
                              setFName(event.target.value);
                         }}
                        />
                        <Textfield lable="Last Name" name="lastname" type="text"
                            value={Lname}
                            onChange={(event)=> {
                            setLName(event.target.value);
                        }}
                        
                        />
                        <Textfield lable="Email" name="email" type="text"
                        
                                 value={email}
                                 onChange={(event)=> {
                                 setemail(event.target.value);
                         }}
                        />
                        <Textfield lable="Mobile" name="mobile" type="text"
                            
                            value={mobile}
                            onChange={(event)=> {
                   
                            setmobile(event.target.value);
                        }}
                        
                        
                        />
                        <Textfield lable="Password" name="password" type="text"
                       
                             value={password}
                             onChange={(event)=> {
               
                             setpassword(event.target.value);
                        }}
                        
                        />
                        <Textfield lable="ConfirmPassword" name="confirmpass" type="text"
                             value={confompassword}
                             onChange={(event)=> {
          
                             setconfompassword(event.target.value);
                        }}
                        />

                        <button className="btn btn-dark mt-3" type="submit" onClick={save}>Register</button>
                        <button className="btn btn-danger mt-3 ml-3" type="reset">Reset</button>
                    </Form>
                </div>
             
            
            
              
           ) }
        </Formik>
    )  
 }


 export default SignUp;