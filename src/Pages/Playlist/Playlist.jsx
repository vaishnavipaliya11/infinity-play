import React from "react";
import { useEffect } from "react";
import axios from "axios";
import { usePlay } from "../../context/playListContext";
import { getUserToken } from "../../Utils/getUserToken";
import { VideoCard } from "../../Components/VideoCard/VideoCard";
import "./Playlist.css";
import deletePlayList from "../../Utils/deletePlayList";
import { useNavigate } from "react-router-dom";

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

        console.log("response", response.data.playlists);
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
          <button  className="remove-card-btn" 
          onClick={() => navigate("/")}>Explore</button>
        </div>
      ) : (
        <div className="playlist-video-container">
          {playListState.getUserPlayList.map(({ title, videos, _id }) => {
            return (
              <div >
                <div className="playlist-cards">
                  <h1 className="list-title">{title}</h1>
                  {videos.map((video) => {
                    return (
                      <div>
                        <VideoCard video={video} />
                      </div>
                    );
                  })}

                  <button
                    className="remove-card-btn"
                    onClick={() => deletePlayList(_id, playListDispatch)}
                  >
                    {" "}
                    Remove{" "}
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

export { Playlist };
