import axios from "axios";
import { getUserToken } from "./getUserToken"
import toast from "react-hot-toast";
const deleteLikedVideo = async (_id, likedDispatch) => {
  console.log("Called",_id);
    try {
      const { data } = await axios({
        method: "DELETE",
        url: `/api/user/likes/${_id}`,
        headers: {
          authorization: getUserToken(),
        },
      });
      toast.success("removed from like")
      likedDispatch({
        type: "DELETE_FROM_LIKED",
        payload: data.likes,
      });
    } catch (e) {
      console.log("Something went wrong", e);
    }
  };

  export{deleteLikedVideo}