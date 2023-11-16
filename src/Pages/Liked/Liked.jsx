import React from "react";
import { useLiked } from "../../context/likeContext";
import { VideoCard } from "../../Components/VideoCard/VideoCard";
import { deleteLikedVideo } from "../../Utils/deleteLike";

import "./Liked.css";
import { useNavigate } from "react-router-dom";
const Liked = () => {
  const { likedState, likedDispatch } = useLiked();
  const { likedVideo } = likedState;
  const navigate = useNavigate();
  return (
    <div className="page-cards-wrapper">
      {likedVideo.length === 0 ? (
        <div className="liked-heading">
          <h2>Seems you haven't liked anything yet.</h2>
          <button className="primary-btn mar-zero" onClick={() => navigate("/")}>
            Explore
          </button>
        </div>
      ) : (
        <div className="video-mapping-container">
          {likedVideo.map((video) => {
            const { _id } = video;
            return (
              <div className="video-map-container">
                <div className="video-card">
                  <VideoCard key={video._id} video={video} />

                  <button
                    className="remove-card-btn"
                    onClick={() => deleteLikedVideo(_id, likedDispatch)}
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

export { Liked };
