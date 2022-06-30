import React from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { MdPlaylistAdd, MdExplore } from "react-icons/md";
import { AiFillHeart } from "react-icons/ai";
import { FaSignOutAlt, FaUserAlt,FaSearch } from "react-icons/fa";
import { FaInfinity } from "react-icons/fa";
import { useAuth } from "../context/authContext";
import { useData } from "../context/dataContext";

const Navbar = () => {
  const { auth, setAuth } = useAuth();
  const navigate = useNavigate();
  const { search, setSearch } = useData();
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

      <div className="search-input">
        <input
          placeholder="search videos....."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </div>

      <div className="nav-options">
       

        {auth ? (
          <Link to="">
            <div className="options">
              <li>
                <h3 onClick={logOutHandler}>
                  <FaSignOutAlt className="icon-size icon-filled" />
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
                  <FaUserAlt className="icon-size " />
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
