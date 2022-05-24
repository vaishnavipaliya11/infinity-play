import axios from "axios";
import { getUserToken } from "./getUserToken";

export const deleteVideo = async (playlistId, videoId, playListDispatch) => {
  console.log(playlistId);
  console.log(videoId);
  try {
    const { data } = await axios.delete(
      `/api/user/playlists/${playlistId}/${videoId}`,
      {
        headers: {
          authorization: getUserToken(),
        },
      }
    );

      console.log(data);
    playListDispatch({
      type: "DELETE_VIDEO_FROM_PLAYLIST",
      payload: data.playlist,
    });
  } catch (error) {
    console.error(error);
  }
};
