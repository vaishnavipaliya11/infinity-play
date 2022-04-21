import React from "react";
import "./login.css";
const Login = () => {
  return (
    <div>
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

            <button>Create an account</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export { Login };
