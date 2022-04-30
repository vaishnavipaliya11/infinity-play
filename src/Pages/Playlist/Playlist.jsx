import React from "react";
import { useEffect } from "react";
import axios from "axios";
import { usePlay } from "../../context/playListContext";
import { getUserToken } from "../../Utils/getUserToken";
import { VideoCard } from "../../Components/VideoCard/VideoCard";

const Playlist = () => {
  const { playListState, playListDispatch } = usePlay();
  const { getUserPlayList } = playListState;

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

  console.log(playListState.getUserPlayList);

  return (
    <div>
      <h2>This is playlist page.</h2>
      {playListState.getUserPlayList.map(({ title, videos }) => {
        return (
          <div className="playlist-container">
          <h1>{title}</h1>
            {videos.map((video) => {
              
              return (
                <div>
                  <VideoCard video={video}/>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export { Playlist };
