import React from 'react'
import { FaHistory } from "react-icons/fa";
import { MdPlaylistAdd, MdWatchLater, MdExplore } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar-container">
        <ul className="options-list fs-lrg pd-lrg">
          <Link to="/">
            <div className="options">
              <li className="pd-med">Explore</li>
              <h3>
                <MdExplore />{" "}
              </h3>
            </div>
          </Link>
          <Link to="/playlist">
            <div className="options">
              <li className="pd-med">Playlist </li>
              <h3>
                <MdPlaylistAdd />{" "}
              </h3>
            </div>
          </Link>
          <Link to="/liked">
            <div className="options">
              <li className="pd-med">Liked</li>
              <h3>
                {" "}
                <AiOutlineLike />{" "}
              </h3>
            </div>
          </Link>

          <Link to="/watch">
            <div className="options">
              <li className="pd-med">Watchlater</li>
              <h3>
                {" "}
                <MdWatchLater />{" "}
              </h3>
            </div>
          </Link>
          <Link to="/history">
            <div className="options">
              <li className="pd-med">History</li>
              <h3>
                <FaHistory />
              </h3>
            </div>
          </Link>
        </ul>
      </div>
  )
}

export  {Sidebar}