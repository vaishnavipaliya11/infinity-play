import axios from "axios";
import { getUserToken } from "./getUserToken";
import toast from "react-hot-toast";
export const deleteVideo = async (playlistId, videoId, playListDispatch) => {
  try {
    const { data } = await axios.delete(
      `/api/user/playlists/${playlistId}/${videoId}`,
      {
        headers: {
          authorization: getUserToken(),
        },
      }
    );

      toast.success("video removed !!")
    playListDispatch({
      type: "DELETE_VIDEO_FROM_PLAYLIST",
      payload: data.playlist,
    });
  } catch (error) {
    console.error(error);
  }
};
