import React from "react";
import { useNavigate } from "react-router-dom";
import { VideoCard } from "../../Components/VideoCard/VideoCard";
import { useAuth } from "../../context/authContext";
import { useHistory } from "../../context/historyContext";
import { deleteHistory } from "../../Utils/deleteHistory";

const History = () => {
  const { historyState, historyDispatch } = useHistory();
  const { historyVideo } = historyState;
  const navigate = useNavigate();
  const { auth } = useAuth();

  return (
    <div className="page-cards-wrapper">
      {auth ? (
        <div>
          {historyVideo.length === 0 ? (
            <div className="heading-container">
              <h2 className="letter">Seems you haven't seen anything yet.</h2>
              <button className="remove-card-btn" onClick={() => navigate("/")}>
                Explore
              </button>
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
      ) : (
        <div>
          <h3>User History is not available without login</h3>
          <button onClick={() => navigate("/login")}>Login</button>
        </div>
      )}
    </div>
  );
};

export { History };
