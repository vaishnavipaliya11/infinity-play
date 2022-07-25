import React from "react";
import { useWatchLater } from "../../context/watchContext";
import { VideoCard } from "../../Components/VideoCard/VideoCard";
import "./Watch.css";
import { deleteWatchLater } from "../../Utils/deleteWatchLater";
import { useNavigate } from "react-router-dom";

const WatchLater = () => {
  const navigate = useNavigate();
  const { watchLaterState } = useWatchLater();
  const { watchLater } = watchLaterState;
  const { watchLaterDispatch } = useWatchLater();

  return (
    <div className="page-cards-wrapper">
      {watchLater.length === 0 ? (
        <div>
          <h2>Seems you haven't added anything yet.</h2>
          <button className="remove-card-btn" onClick={() => navigate("/")}>
            Explore
          </button>
        </div>
      ) : (
        <div className="video-mapping-container">
          {watchLater?.map((video) => {
            const { _id } = video;
            return (
              <div className="video-map-container">
                <div className="video-card">
                  <VideoCard video={video} />
                  <button
                    className="remove-card-btn"
                    onClick={() => deleteWatchLater(_id, watchLaterDispatch)}
                  >
                    {" "}
                    <i class="bi bi-trash"></i>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export { WatchLater };
