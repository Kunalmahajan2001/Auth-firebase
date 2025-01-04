import React, { useState } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../services/firebase';



const Login = () => {
    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleLogin = (e) => {
    e.preventDefault();
    
    signInWithEmailAndPassword(auth, email, password)
    .then((res)=>
    {
        console.log(res.user)
        alert("Successfully Login")
    })
    .catch((err)=>
    {
        console.log(err)
        alert("Incorrect Email & password")
    })
  };
  return (
    <div style={{border:"1px solid grey",padding:"20px",borderRadius:"10px"}}>
      <h2 style={{textAlign:"center"}}>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{padding:"10px 100px 10px 10px"}}
        /><br></br><br></br>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{padding:"10px 100px 10px 10px"}}
        /><br></br><br></br>
        <button style={{width:"100%",padding:"10px"}} type="submit">Login</button>
      </form>
      
    </div>
  )
}

export default Login
