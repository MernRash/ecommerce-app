import React, { useState,useEffect } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./login.css";
import SignUP from "./Signup";
import { Navigate, useNavigate } from 'react-router';
import axios from 'axios';
import { connect } from 'react-redux'
import UserProfile from "./userProfile";

 function Login(props) {
  const [isNewUser, setIsNewUser] = useState(true);

  const user = localStorage.getItem("user");
  let userLoggedIn = true;

  if (user == null) {
    userLoggedIn = false;
  }

  useEffect(()=>{
      const oldUser = localStorage.getItem("userSignedUP");
      if(oldUser != null){
          setIsNewUser(false)
      }
  },[]);

  /* Login */

  var [emailValue, setEmail] = useState("");
  var [passValue, setPass] = useState("");
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  let token = "";

  const clickHandler = (e) => {
    e.preventDefault();

    const email = emailValue;
    const password = passValue;

    if( password.length < 6 || email.length < 6 ){
      setError("too Short!!!");
      return;
  }
  setError("");
    const body = {
      email, password
    }
    // const tempUrl = "http://localhost:8000/api/v1/auth/login"
    const herokuUrl = "https://blog-back-end-01.herokuapp.com/api/v1/auth/login"
    axios.post( herokuUrl, body)
    .then(( res ) => {
          alert(res.data.message);
          token = res.data.data.token
          console.log(res.data.data.token)
          localStorage.setItem("token", token)
          localStorage.setItem("user", "Signed")
          props.userSignedIn();
          navigate("/", {replace:true})
    })
    .catch(res=> console.log(res))

}


  return (
    <div className="log-in-container">
      {userLoggedIn ? (
        <UserProfile />
      ) : (
        <>
          {isNewUser ? (
            <SignUP isNewUser={() => setIsNewUser(!isNewUser)} />
          ) : (
            <form>
              <h2>Login</h2>
              <div className="input-container">
                <TextField
                  label="Email"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter Email"
                  fullWidth
                  required
                />
                <TextField
                  label="Password"
                  placeholder="Enter password"
                  onChange={(e) => setPass(e.target.value)} 
                  type="password"
                  fullWidth
                  required
                />
              </div>
              <div className="btn-container">
                <Button className="btn" variant="contained" onClick={clickHandler}>
                  Login
                </Button>
                <span onClick={() => setIsNewUser(!isNewUser)}>
                  Don't have an account? SignUp
                </span>
              </div>
            </form>
          )}
        </>
      )}
    </div>
  );
}

const mapStateToProps = (state) =>{
    console.log(state);
    return {
      state
    }
  } 
  
  const mapDispatchToState = (dispatch)=>{
    return{
      userSignedIn : ()=>{
        const authSignIn = localStorage.getItem("user");
  
        dispatch({type:"login",data:authSignIn})
      }
    }
  }
  

export default connect(mapStateToProps,mapDispatchToState)(Login);