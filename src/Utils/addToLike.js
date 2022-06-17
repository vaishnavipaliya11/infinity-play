import { getUserToken } from "./getUserToken";
import axios from "axios";
import toast from "react-hot-toast";
const addToLike = async (video, likedDispatch) => {
  try {
    const { data } = await axios.post(
      "/api/user/likes",
      {
        video,
      },
      {
        headers: {
          authorization: getUserToken(),
        },
      }
    );
      toast.success("liked video")
    likedDispatch({ type: "ADD_TO_LIKED", payload: data.likes });
  } catch (e) {
    console.log("Something went wrong", e);
  }
};

export { addToLike };
