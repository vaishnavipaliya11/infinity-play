import axios from "axios";
import { getUserToken } from "./getUserToken";

const deleteWatchLater = async (_id, watchLaterDispatch) => {
  // console.log("from delete func",video);
  try {
    const { data } = await axios({
      method: "DELETE",
      url: `/api/user/watchlater/${_id}`,
      headers: {
        authorization: getUserToken(),
      },
    });

    console.log("data from fun", data);

    watchLaterDispatch({
      type: "DELETE_FROM_WATCH_LATER",
      payload: data.watchlater,
    });
  } catch (e) {
    console.log("Something went wrong", e);
  }
};

export { deleteWatchLater };
