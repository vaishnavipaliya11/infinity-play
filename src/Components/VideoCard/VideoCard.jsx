import React from "react";
import { MdPlaylistAdd, MdWatchLater } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { useWatchLater } from "../../context/watchContext";
import { useAuth } from "../../context/authContext";
import { addToWatchLater } from "../../Utils/addToWatchLater";
import { useHistory } from "../../context/historyContext";
import { addToHistory } from "../../Utils/addToHistory";
import { usePlay } from "../../context/playListContext";
import { Modal, getVideos } from "../Modal";
import { addDataToList } from "../../Utils/addDataToList";
import "./VideoCard.css";

const VideoCard = ({ video }) => {
  const { watchLaterDispatch } = useWatchLater();
  const navigate = useNavigate();
  const { auth } = useAuth();
  const { historyDispatch } = useHistory();

  const { playListDispatch } = usePlay();

  return (
    <div>
      <div className="products-card-container">
        <div className="product-card">
          <div className="product-tumb">
            <img src={`https://i.ytimg.com/vi/${video._id}/0.jpg`} />
          </div>
          <div className="product-details">
            <span className="product-catagory">
              <Link to={`/singlevideo/${video._id}`}
              onClick={() =>
                auth
                  ? addToHistory(video, historyDispatch)
                  : navigate("/login")
              }>
                <p
                  className="prod-title"
                  
                >
                  {video.title}
                </p>
              </Link>
            </span>

            <div>
              <button
                className="clear-btn"
                onClick={() => {
                  auth
                    ? addDataToList(video, playListDispatch)
                    : navigate("/login");
                }}
              >
                <h2>
                  <MdPlaylistAdd />
                </h2>
              </button>

              <button
                className="clear-btn"
                onClick={() =>
                  auth
                    ? addToWatchLater(video, watchLaterDispatch)
                    : navigate("/login")
                }
              >
                <h3>
                  <MdWatchLater />
                </h3>
              </button>

             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { VideoCard };
