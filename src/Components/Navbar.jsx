import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { MdPlaylistAdd, MdExplore } from "react-icons/md";
import { AiOutlineLike, AiFillHeart } from "react-icons/ai";
import { FaSignOutAlt ,FaUserAlt} from "react-icons/fa";

import { FaInfinity } from "react-icons/fa";

const Navbar = () => {
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

        <Link to="">
          <div className="options">
            <li>
              <h3>
                <FaSignOutAlt className="icon-size" />
              </h3>
            </li>
          </div>
        </Link>

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
      </div>
    </div>
  );
};

export { Navbar };
