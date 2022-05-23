import React from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { MdPlaylistAdd, MdExplore } from "react-icons/md";
import { AiFillHeart } from "react-icons/ai";
import { FaSignOutAlt, FaUserAlt } from "react-icons/fa";

import { FaInfinity } from "react-icons/fa";
import { useAuth } from "../context/authContext";

const Navbar = () => {
  const { auth, setAuth } = useAuth();
  const navigate = useNavigate();
  const logOutHandler = () => {
    setAuth(localStorage.removeItem("token"));
    navigate("/login");
  };

  return (
    <div className="nav-container">
      <header className="nav-heading">
        <nav>
          <h2>
            {" "}
            <FaInfinity />
            Infinity video
          </h2>
        </nav>
      </header>

      <div className="nav-options">
        <Link to="/">
          <div className="options">
            <li>
              {" "}
              <h3>
                <MdExplore className="icon-size" />
              </h3>
            </li>
          </div>
        </Link>

        <Link to="/playlist">
          <div className="options">
            <li>
              {" "}
              <h3>
                <MdPlaylistAdd className="icon-size" />
              </h3>
            </li>
          </div>
        </Link>

        <Link to="/liked">
          <div className="options">
            <li>
              <h3>
                <AiFillHeart className="icon-size" />
              </h3>
            </li>
          </div>
        </Link>

        {auth ? (
          <Link to="">
            <div className="options">
              <li>
                <h3 onClick={logOutHandler}>
                  <FaSignOutAlt className="icon-size" />
                </h3>
              </li>
            </div>
          </Link>
        ) : (
          <Link to="/login">
            <div className="options">
              <li>
                {" "}
                <h3>
                  <FaUserAlt className="icon-size" />
                </h3>
              </li>
            </div>
          </Link>
        )}
      </div>
    </div>
  );
};

export { Navbar };
