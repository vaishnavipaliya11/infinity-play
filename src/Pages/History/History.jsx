import React from "react";
import { VideoCard } from "../../Components/VideoCard/VideoCard";
import { useHistory } from "../../context/historyContext";
import { deleteHistory } from "../../Utils/deleteHistory";

const History = () => {
  const { historyState, historyDispatch } = useHistory();
  const { historyVideo } = historyState;

  console.log(historyVideo);
  return (
    <div>
      <h2>This is history page. </h2>

      <div>
        {historyVideo.length === 0 ? (
          <div className="liked-heading">
            <h3>You haven't watched anything yet. </h3>
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
    </div>
  );
};

export { History };
