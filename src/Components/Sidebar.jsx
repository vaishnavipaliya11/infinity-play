import React from "react";
import { FaHistory } from "react-icons/fa";
import { MdPlaylistAdd, MdWatchLater, MdExplore } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";

const Sidebar = () => {
  const getActiveStyle = ({ isActive }) => ({
    color: isActive ? "#0e7490" : "",
  });
  return (
    <div className="sidebar-container">
      <nav>
        <ul className="options-list fs-lrg pd-lrg">
          <div className="options">
            <NavLink style={getActiveStyle} to="/" className="pd-med">
              Explore
            </NavLink>
            <h3>
              <MdExplore />{" "}
            </h3>
          </div>

          <div className="options">
            <NavLink style={getActiveStyle} to="/playlist" className="pd-med">
              Playlist{" "}
            </NavLink>
            <h3>
              <MdPlaylistAdd />{" "}
            </h3>
          </div>

          <div className="options">
            <NavLink style={getActiveStyle} to="/liked" className="pd-med">
              Liked{" "}
            </NavLink>
            <h3>
              {" "}
              <AiOutlineLike />{" "}
            </h3>
          </div>

          <div className="options">
            <NavLink style={getActiveStyle} to="/watch" className="pd-med">
              Watchlater{" "}
            </NavLink>
            <h3>
              {" "}
              <MdWatchLater />{" "}
            </h3>
          </div>

          <div className="options">
            <NavLink style={getActiveStyle} to="/history" className="pd-med">
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
