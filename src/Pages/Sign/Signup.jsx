import React from "react";
import { Link , useNavigate} from "react-router-dom";
import { useAuth } from "../../context/authContext";
import { useState } from "react";
import axios from 'axios';

const Signup = () => {
  
  const  navigate = useNavigate()
  const { auth, setAuth } = useAuth();
  const [erorMsg, setErrorMsg]= useState(false)
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    Email: "",
    Password: "",
  });

  const handelUserInput = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });

    setErrorMsg(false);
    
  };

  const signUpHandler = async (e) => {
    e.preventDefault()
    
    try {
      const response = await axios.post("/api/auth/signup", {
        firstName: userData.firstName,
        lastName: userData.lastName,
        email: userData.Email,
        password: userData.Password,
      });

      localStorage.setItem("token", response.data.encodedToken);

      setAuth(true);
      navigate("/login");
    } catch (error) {
      console.log(error);
    }

    if (
      !userData.firstName ||!userData.lastName ||
      !userData.Email || !userData.Password
    ) {
      setErrorMsg(true);
      return;
    }
  };

  return (
    <div className="form-container">
      <div className="validation">
        <form action="">
          <div>
            <label for="Name">First Name</label>
            <input
              type="text"
              className="form-input"
              placeholder="Enter your Name "
              name="firstName"
              onChange={handelUserInput}
              value={userData.firstName}
            />
          </div>

          

          <div>
            <label for="Name">Last Name</label>
            <input
              type="text"
              className="form-input"
              name="lastName"
              placeholder="Balika"
              onChange={handelUserInput}
              value={userData.lastName}
            />
          </div>

          <div>
            <label for="email">Email</label>
            <input
              type="text"
              className="form-input"
              name="Email"
              placeholder="abcd@gmail.com"
              onChange={handelUserInput}
              value={userData.Email}
            />
          </div>

          <div>
            <label for="password">Password</label>
            <input
              type="password"
              className="form-input"
              placeholder="abcd"
              name="Password"
              onChange={handelUserInput}
              value={userData.Password}
            ></input>
          </div>

          <div style={{color:"red"}}>
          <p>{erorMsg && "Enter the feilds"}</p>
          </div>

          <div>
          <Link to="/login">
          <p > Already have an account?</p>
          </Link>
      
            <button onClick={signUpHandler}>Sign up</button>
            
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
