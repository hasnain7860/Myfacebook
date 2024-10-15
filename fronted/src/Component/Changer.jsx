import React from 'react'
import Navbar from "./Navbar.jsx";
import Login from "./Login.jsx";
import { useLocation } from "react-router-dom";

const Changer = (props) => {
  const auth = false
  const location = useLocation()
  return (
    <>
        { auth==true ? 
    <>
    {
      location.pathname=="/signup" ?
      <>{props.children}</> 
      :
    <>
    <Navbar/>
    {props.children}
     </>
     
     }
     
     </>
     : 
     <>
     {
       location.pathname=="/signup" ?
       <>{props.children}</>
       :
       <Login/>
       
     }
     </>
       }
    </>
    
  )
}



export default Changer