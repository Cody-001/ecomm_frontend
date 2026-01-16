import React, { useState } from 'react'

const AdminLogin = () => {
  const [formdata, setFormdata] = useState({
    email: "",
    password: ""
  })

  const changehandler = (e) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value })
  }

  const adminlogin = async () => {
  let responseData;
  await fetch("http://localhost:3000/adminlogin", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formdata),
  })
  .then(resp => resp.json())
  .then(data => responseData = data);

  if (responseData.success) {
    localStorage.setItem("admin-token", responseData.token);
    window.location.href = "http://localhost:5173/addproduct"; // admin app URL
  } else {
    alert(responseData.error);
  }
}


  return (
    <div className='adminlogin loginSignup'>
      <div className="loginSignup-container">
        <h1>Admin Login</h1>

        <div className="loginSignup-fields">
          <input
            value={formdata.email}
            onChange={changehandler}
            name='email'
            type="email"
            placeholder='Email Address'
          />

          <input
            value={formdata.password}
            onChange={changehandler}
            name='password'
            type="password"
            placeholder='Password'
          />
        </div>

        <button onClick={adminlogin}>Continue</button>

        <div className="loginsign-agree">
          <input type="checkbox" />
          <p>By continuing, I agree to the terms of use & privacy policy</p>
        </div>
      </div>
    </div>
  )
}

export default AdminLogin
