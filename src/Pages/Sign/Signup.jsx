import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="form-container">
      <div className="validation">
        <form action="">
          <div>
            <label for="Name">Name</label>
            <input type="text" class="form-input" placeholder="Adarsh Balika" />
          </div>

          <div>
            <label for="email">Email</label>
            <input
              type="text"
              class="form-input"
              placeholder="abcd@gmail.com"
            />
          </div>

          <div>
            <label for="password">Password</label>
            <input type="text" class="form-input" placeholder="abcd"></input>
          </div>

          <div>
            <p> Already have an account?</p>

            <Link to="/login">
              <button>Login</button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
