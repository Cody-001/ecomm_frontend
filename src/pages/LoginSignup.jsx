import React, { useState } from 'react'
import Navbar from '../components/Navbar'

const LoginSignup = () => {
  const [state, setState]= useState("Login")
  const [formdata, setFormdata] = useState({
    name: "",
    password: "",
    email: ""
  })

  const changehandler = (e)=>{
      setFormdata({...formdata, [e.target.name]:e.target.value})
  }

  const login = async ()=>{
    console.log("executed login", formdata)
    let responseData;
     await fetch("http://localhost:3000/login",{
      method: "POST",
      headers:{
        Accept: "application/json",
        "Content-Type":"application/json"

      },
      body:JSON.stringify(formdata),
     }).then((resp)=>resp.json()).then((data)=>responseData=data)
     if(responseData.success){
      localStorage.setItem("auth-token", responseData.token)
      window.location.replace("/")
     }
     else{
      alert((responseData.error))
     }

  }
  const signup = async ()=>{
     console.log("executed signup", formdata)
     let responseData;
     await fetch("http://localhost:3000/signup",{
      method: "POST",
      headers:{
        Accept: "application/json",
        "Content-Type":"application/json"

      },
      body:JSON.stringify(formdata),
     }).then((resp)=>resp.json()).then((data)=>responseData=data)
     if(responseData.success){
      localStorage.setItem("auth-token", responseData.token)
      window.location.replace("/")
     }
     else{
      alert((responseData.error))
     }
    
  }
  return (
    <>
    <Navbar />
      <div className='loginSignup'>
      <div className="loginSignup-container">
        <h1>{state}</h1>
        <div className="loginSignup-fields">
         {state === "Sign Up"?<input name='name' value={formdata.name} onChange={changehandler} type="text" placeholder='Your Name' />: <></>} 
          <input value={formdata.email} onChange={changehandler} name='email' type="email" placeholder='Email Address' />
          <input value={formdata.password} onChange={changehandler} name='password' type="password" placeholder='Password' />
        </div>
        <button onClick={()=>{state==="Login"?login():signup()}}>Continue</button>
        {state == "Sign Up"?<p className='loginsignup-login'>Already have an account? <span onClick={()=>{setState("Login")}} >Login</span></p>:<p className='loginsignup-login'>Create an account <span onClick={()=>{setState("Sign Up")}}> Click here</span></p>}
        
        
        <div className="loginsign-agree">
          <input type="checkbox" name="" id="" />
        <p>By contuning i agree to the terms of use & privacy policy</p>
        </div>
        
      </div>
    </div>
    </>
    
  )
}

export default LoginSignup