import React from "react";
import { useNavigate } from "react-router-dom";
import { VideoCard } from "../../Components/VideoCard/VideoCard";
import { useHistory } from "../../context/historyContext";
import { deleteHistory } from "../../Utils/deleteHistory";

const History = () => {
  const { historyState, historyDispatch } = useHistory();
  const { historyVideo } = historyState;
  const navigate= useNavigate()

  return (
  

      <div className="page-cards-wrapper">
        {historyVideo.length === 0 ? (
          <div>
          <h2>Seems you haven't seen anything yet.</h2>
          <button  className="remove-card-btn" 
          onClick={() => navigate("/")}>Explore</button>
        </div>
        ) : (
          <div className="liked-container">
            {historyVideo.map((video) => {
              const { _id } = video;
              return (
                <div className="video-map-container">
                  <VideoCard key={video._id} video={video} />

                  <button
                    className="video-delete-btn"
                    onClick={() => deleteHistory(_id, historyDispatch)}
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

export { History };
