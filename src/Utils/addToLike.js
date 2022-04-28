import { getUserToken } from "./getUserToken"
import axios from "axios"

const addToLike = async(video,likedDispatch) =>{
    try{
        const {data} = await axios.post(
            "/api/user/likes",
            {
              video
            },
            {
              headers: {
                authorization: getUserToken(),
              },
            }
          );
          likedDispatch({type:"ADD_TO_LIKED",payload:data.likes})
    }
    catch (e) {
        console.log("Something went wrong",e);
      }
}

export{addToLike}

