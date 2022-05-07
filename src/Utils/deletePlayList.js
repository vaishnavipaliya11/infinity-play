import axios from "axios";
import { getUserToken } from "./getUserToken";

const deletePlayList = async (_id, playListDispatch) => {
  try {
    const { data } = await axios({
        method: "DELETE",
        url: `/api/user/playlists/${_id}`,
        headers: {
          authorization: getUserToken(),
        },
      });
      console.log("from func", data);
    playListDispatch({
        type: "DELETE_FROM_PLAYLIST",
        payload:data.playlists,
      })
   
  } catch (error) {
    console.error();
  }
};

export default deletePlayList;

