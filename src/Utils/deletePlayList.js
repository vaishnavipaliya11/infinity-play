import axios from "axios";
import { getUserToken } from "./getUserToken";
import toast from "react-hot-toast";
const deletePlayList = async (_id, playListDispatch) => {
  try {
    const { data } = await axios({
        method: "DELETE",
        url: `/api/user/playlists/${_id}`,
        headers: {
          authorization: getUserToken(),
        },
      });
      toast.success("Playlist removed!!")
    playListDispatch({
        type: "DELETE_FROM_PLAYLIST",
        payload:data.playlists,
      })
   
  } catch (error) {
    toast.error("Something went wrong")
    console.error();
  }
};

export default deletePlayList;

