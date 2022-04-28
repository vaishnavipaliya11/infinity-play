import React from "react";
import { MdPlaylistAdd, MdWatchLater } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { useWatchLater } from "../../context/watchContext";
import { useAuth } from "../../context/authContext";
import { addToWatchLater } from "../../Utils/addToWatchLater";

const VideoCard = ({ video }) => {
  const { watchLaterDispatch } = useWatchLater();
  const navigate = useNavigate();
  const { auth } = useAuth();

  return (
    <div>
      <div className="products-card-container">
        <div className="product-card">
          <div className="product-tumb">
            <img src={`https://i.ytimg.com/vi/${video._id}/0.jpg`} />
          </div>
          <div className="product-details">
            <span className="product-catagory">
              <Link to={`/singlevideo/${video._id}`}>
                <p className="prod-title">{video.title}</p>
              </Link>
            </span>

            <div>
              <button className="clear-btn">
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
