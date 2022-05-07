import axios from "axios";
import { getUserToken } from "./getUserToken";
const addToPlaylist = async (video, _id, playListDispatch) => {
  try {
    const response = await axios.post(
      `/api/user/playlists/${_id}`,
      {
        video,
      },
      {
        headers: {
          authorization: getUserToken(),
        },
      }
    );
    playListDispatch({
      type: "PLAYLIST_VIDEO",
      payload: response.data.playlist,
    });
  } catch (error) {
    console.error();
  }
};

export { addToPlaylist };
