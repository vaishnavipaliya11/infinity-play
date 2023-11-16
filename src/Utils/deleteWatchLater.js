import axios from "axios";
import { getUserToken } from "./getUserToken";
import toast from "react-hot-toast";
const deleteWatchLater = async (_id, watchLaterDispatch) => {
  try {
    const { data } = await axios({
      method: "DELETE",
      url: `/api/user/watchlater/${_id}`,
      headers: {
        authorization: getUserToken(),
      },
    });
    toast.success("Removed from watchlater")
    watchLaterDispatch({
      type: "DELETE_FROM_WATCH_LATER",
      payload: data.watchlater,
    });
  } catch (e) {
    toast.error("Something went wrong")
    console.log("Something went wrong", e);
  }
};

export { deleteWatchLater };
