import axios from "axios";
import { getUserToken } from "./getUserToken"

const deleteLikedVideo = async (_id, likedDispatch) => {
    try {
      const { data } = await axios({
        method: "DELETE",
        url: `/api/user/likes/${_id}`,
        headers: {
          authorization: getUserToken(),
        },
      });
  
      console.log("data from fun", data);
  
      likedDispatch({
        type: "DELETE_FROM_LIKED",
        payload: data.likes,
      });
    } catch (e) {
      console.log("Something went wrong", e);
    }
  };

  export{deleteLikedVideo}