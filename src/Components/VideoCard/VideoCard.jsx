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
import { deleteWatchLater } from "../../Utils/deleteWatchLater";

const VideoCard = ({ video }) => {
  const { watchLaterState, watchLaterDispatch } = useWatchLater();
  const { watchLater } = watchLaterState;
  const navigate = useNavigate();
  const { auth } = useAuth();
  const { historyDispatch } = useHistory();

  const { playListDispatch } = usePlay();

  const watchlaterHandler = (video) => {
    if (watchLater.find((item) => item._id === video._id)) {
      deleteWatchLater(video._id, watchLaterDispatch);
    } else if (auth) {
      addToWatchLater(video, watchLaterDispatch);
    } else {
      navigate("/login");
    }
  };
  return (
    <div>
      <div className="products-card-container">
        <div className="product-card">
          <div className="product-tumb">
            <img src={`https://i.ytimg.com/vi/${video._id}/0.jpg`} />
          </div>
          <div className="product-details">
            <span className="product-catagory">
              <Link
                to={`/singlevideo/${video._id}`}
                onClick={() =>
                  auth
                    ? addToHistory(video, historyDispatch)
                    : navigate("/login")
                }
              >
                <p className="prod-title">{video.title}</p>
              </Link>
            </span>

            <div>
              <button
                className="clear-btn"
                onClick={() => addDataToList(video, playListDispatch)}
              >
                <h2>
                  <MdPlaylistAdd />
                </h2>
              </button>

              <button
                className="clear-btn"
                onClick={() => watchlaterHandler(video)}
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
