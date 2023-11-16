import React, { useEffect } from "react";
import axios from "axios";
import { usePlay } from "../../context/playListContext";
import { getUserToken } from "../../Utils/getUserToken";
import { VideoCard } from "../../Components/VideoCard/VideoCard";
import "./Playlist.css";
import deletePlayList from "../../Utils/deletePlayList";
import { useNavigate } from "react-router-dom";
import { deleteVideo } from "../../Utils/deleteVideo";

const Playlist = () => {
  const { playListState, playListDispatch } = usePlay();
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("/api/user/playlists", {
          headers: {
            authorization: getUserToken(),
          },
        });

        playListDispatch({
          type: "GET_PLAYLIST",
          payload: response.data.playlists,
        });
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <div className="page-cards-wrapper">
      {playListState.getUserPlayList.length === 0 ? (
        <div>
          <h2>Seems you haven't added anything to playlist.</h2>
          <button className="primary-btn mar-zero" onClick={() => navigate("/")}>
            Explore
          </button>
        </div>
      ) : (
        <div className="playlist-video-container">
          {playListState.getUserPlayList.length !== 0 &&
            playListState.getUserPlayList.map(({ title, videos, _id }) => {
              const playlistId = _id;
              return (
                <div className="video-mapping-container">
                <div className="list-title">{title}</div>
                  
                  {videos.map((video) => {
                    const videoId = video._id;
                    return (
                      
                      <div className="video-map-container">
                        <div className="video-card">
                          <VideoCard video={video} />
                          <button
                            className="remove-card-btn"
                            onClick={() =>
                              deleteVideo(playlistId,videoId, playListDispatch)
                            }
                          >
                            {" "}
                            <i class="bi bi-trash"></i>
                          </button>
                        </div>
                      </div>
                    );
                  })}

                  <div>
                  <button onClick={()=> deletePlayList(playlistId,playListDispatch)}>Delete all</button>
                  </div>
                </div>
              );
            })}
        </div>
      )}
    </div>
  );
};

export { Playlist };
