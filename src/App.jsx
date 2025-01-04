import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SignUp from './components/SignUp'
import Login from './components/Login'

function App() {
  

  return (
    <>
      <h1 style={{textAlign:"center"}}>FORM</h1>
      <div style={{display:"flex",justifyContent:"space-between",width:"50%",margin:"auto",marginTop:"10%"}}>
      <SignUp />
      {/* <Login /> */}
      </div>
    </>
  )
}

export default App
