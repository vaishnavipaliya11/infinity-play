import axios from "axios";
import { getUserToken } from "./getUserToken";

const deleteHistory = async (_id, historyDispatch) => {
  try {
    const { data } = await axios({
      method: "DELETE",
      url: `/api/user/history/${_id}`,
      headers: {
        authorization: getUserToken(),
      },
    });

    historyDispatch({
      type: "DELETE_FROM_HISTORY",
      payload: data.history,
    });
  } catch (e) {
    console.log("Something went wrong", e);
  }
};

export { deleteHistory };
