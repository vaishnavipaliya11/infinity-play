import React from "react";
import {
  MdPlaylistAdd,
  MdWatchLater,
  MdOutlineWatchLater,
} from "react-icons/md";
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

  const { playListState, playListDispatch } = usePlay();
  const { createUserPlaylist } = playListState;

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
            <img
              src={`https://i.ytimg.com/vi/${video._id}/hq720.jpg`}
              loading="lazy"
            />
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
                <div style={{ display: "flex", "align-items": "center" }}>
                  <img className="video-logo" src={video?.icon}></img>
                  <span className="prod-title">{video?.title}</span>

                </div>
              </Link>
            </span>

            <div className="common-flex"> 
              <button
                className="clear-btn"
                checked={createUserPlaylist}
                onClick={() => addDataToList(video, playListDispatch)}
              >
                <h2>
                  <MdPlaylistAdd className="icon-filled" />
                </h2>
              </button>

              {watchLater.find((item) => item._id === video._id) ? (
                <button
                  className="clear-btn"
                  onClick={() => watchlaterHandler(video)}
                >
                  <h2>
                    <MdWatchLater className="icon-filled" />
                  </h2>
                </button>
              ) : (
                <button
                  className="clear-btn"
                  onClick={() => watchlaterHandler(video)}
                >
                  <h2>
                    <MdOutlineWatchLater className="icon-filled" />
                  </h2>
                </button>
              )}
            </div>
          </div>
          <div className="video-views">
            {/* <p>                  <span className="prod-title">{video.title}</span> */}

              {" "}
              {/* <span>views {video?.Views}</span> <span>{video?.Uploaded}</span>{" "} */}
            {/* </p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export { VideoCard };
