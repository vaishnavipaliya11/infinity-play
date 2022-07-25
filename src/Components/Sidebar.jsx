import React from "react";
import { FaHistory } from "react-icons/fa";
import { MdPlaylistAdd, MdOutlineWatchLater, MdExplore } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";
import "./Sidebar.css"

const Sidebar = () => {
  const getActiveStyle = ({ isActive }) => ({
    color: isActive ? "#0e7490" : "",
  });
  return (
    <div className="sidebar-container">
      <nav>
        <ul className="options-list fs-lrg ">
          <div className="options">
            <NavLink style={getActiveStyle} to="/" >
              Explore 
            </NavLink>
            <h3>
              <MdExplore />{" "}
            </h3>
          </div>

          <div className="options">
            <NavLink style={getActiveStyle} to="/playlist">
              Playlist{" "}
            </NavLink>
            <h3>
              <MdPlaylistAdd />{" "}
            </h3>
          </div>

          <div className="options">
            <NavLink style={getActiveStyle} to="/liked">
              Liked{" "}
            </NavLink>
            <h3>
              {" "}
              <AiOutlineLike />{" "}
            </h3>
          </div>

          <div className="options">
            <NavLink style={getActiveStyle} to="/watch">
              Watchlater{" "}
            </NavLink>
            <h3>
              {" "}
              <MdOutlineWatchLater />{" "}
            </h3>
          </div>

          <div className="options">
            <NavLink style={getActiveStyle} to="/history">
              History{" "}
            </NavLink>
            <h3>
              <FaHistory />
            </h3>
          </div>
        </ul>
      </nav>
    </div>
  );
};

export { Sidebar };
