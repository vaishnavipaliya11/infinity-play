import React from "react";
import { useLiked } from "../../context/likeContext";
import { VideoCard } from "../../Components/VideoCard/VideoCard";
import { deleteLikedVideo } from "../../Utils/deleteLike";

import "./Liked.css";
const Liked = () => {
  const { likedState, likedDispatch } = useLiked();
  const { likedVideo } = likedState;
  return (
    <div className="liked-container">
      {likedVideo.length === 0 ? (
        <div className="liked-heading">
          <h3>You Don't have Liked the videos </h3>
        </div>
      ) : (
        <div className="liked-container">
          {likedVideo.map((video) => {
            const { _id } = video;
            console.log("liked page", video);
            return (
              <div className="video-map-container">
                <VideoCard key={video._id} video={video} />

                <button
                  className="video-delete-btn"
                  onClick={() => deleteLikedVideo(_id, likedDispatch)}
                >
                  {" "}
                  Remove{" "}
                </button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export { Liked };
