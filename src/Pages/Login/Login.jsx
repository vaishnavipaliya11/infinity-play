import React from "react";
import { Link,  useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from 'axios'
import "./login.css";
import { useAuth } from "../../context/authContext";
const Login = () => {

    const [userDetails, setUserDetails]= useState({email:"",password:""})

    const {auth, setAuth}= useAuth()

    const navigate = useNavigate()

    const onChangehandler =(e)=>{
        const {name,value}= e.target
        setUserDetails({...userDetails, [name]:value})
    }

    const loginHanddler = async (e) =>  {
        
        e.preventDefault()
        try {
          const response = await axios.post(`/api/auth/login`, {
            email:userDetails.email,
            password:userDetails.password
          });
          localStorage.setItem("token", response.data.encodedToken);
          setAuth(true)
          navigate("/")
        console.log( response);
        } catch (error) {
          console.log(error);
        }

   };

   const testHandler =async(e)=>{
     console.log("called");
     e.preventDefault()
    try {
      const { data } = await axios.post("api/auth/login", {
        email: "adarshbalika@gmail.com",
        password: "adarshBalika123",
      });
      localStorage.setItem("token", data.encodedToken);
      setAuth(true);
      navigate("/");
    } catch (error) {
      alert(error);
    }
   }
      
      
  return (
  
      <div className="form-container">
        <div className="validation">
          <form action="">
            <div>
              <label for="email">email</label>
              <input
              name="email"
                type="text"
                class="form-input"
                placeholder="abcd@gmail.com"
                onChange={(e) =>
                   onChangehandler(e)
                  }
              />
            </div>

            <div>
              <label for="password">password</label>
              <input   name="password" type="text" class="form-input" placeholder="abcd"
              onChange={(e) =>
                onChangehandler(e)
               } />
            </div>

            <div>
            <p> Don't have an account ?
            </p>

            <button onClick={(e)=>testHandler(e)}>Test Credentitals</button>

            <button onClick={(e)=> loginHanddler(e)}>Login</button>
            
            <Link to="/sign">
            <button>Create an account</button>
            </Link>
            
            </div>
          </form>
        </div>
      </div>
    
  );
};

export { Login };
