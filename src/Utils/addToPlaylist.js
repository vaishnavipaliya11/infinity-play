import axios from "axios";
import { getUserToken } from "./getUserToken";
import toast from "react-hot-toast";
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
    toast.success("playlist added")
    playListDispatch({
      type: "PLAYLIST_VIDEO",
      payload: response.data.playlist,
    });
  } catch (error) {
    toast.error("Something went wrong")
    console.error();
  }
};

export { addToPlaylist };
