import React from "react";
import { Link } from "react-router-dom";
import "./login.css";
const Login = () => {
  return (
  
      <div className="form-container">
        <div className="validation">
          <form action="">
            <div>
              <label for="email">email</label>
              <input
                type="text"
                class="form-input"
                placeholder="abcd@gmail.com"
              />
            </div>

            <div>
              <label for="password">password</label>
              <input type="text" class="form-input" placeholder="abcd"></input>
            </div>

            <div>
            <p> Don't have an account ?
            </p>
            
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
