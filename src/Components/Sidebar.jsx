import React from "react";
import { FaHistory } from "react-icons/fa";
import { MdPlaylistAdd, MdOutlineWatchLater, MdExplore } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  const getActiveStyle = ({ isActive }) => ({
    color: isActive ? "#0e7490" : "",
  });
  return (
    <div className="sidebar-container">
      <nav>
        <ul className="options-list mar-zero fs-med ">
          <div className="options mar-zero">
            <h3 className="mar-zero">
              <MdExplore />{" "}
            </h3>
            <NavLink style={getActiveStyle} to="/">
              Explore
            </NavLink>
          </div>

          <div className="options mar-zero">
            <h3>
              <MdPlaylistAdd />{" "}
            </h3>
            <NavLink style={getActiveStyle} to="/playlist">
              Playlist{" "}
            </NavLink>
          </div>

          <div className="options mar-zero">
            <h3>
              {" "}
              <AiOutlineLike />{" "}
            </h3>
            <NavLink style={getActiveStyle} to="/liked">
              Liked{" "}
            </NavLink>
          </div>

          <div className="options mar-zero">
            {" "}
            <h3>
              {" "}
              <MdOutlineWatchLater />{" "}
            </h3>
            <NavLink style={getActiveStyle} to="/watch">
              Watchlater{" "}
            </NavLink>
          </div>

          <div className="options mar-zero">
            <h3>
              <FaHistory />
            </h3>
            <NavLink style={getActiveStyle} to="/history">
              History{" "}
            </NavLink>
          </div>
        </ul>
      </nav>
    </div>
  );
};

export { Sidebar };
