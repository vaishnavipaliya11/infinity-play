import axios from "axios";
import { getUserToken } from "./getUserToken";
 const addToPlaylist = async (video, _id, playListDispatch)=>{
console.log("calleddddddddddd")
    try {
        const response = await axios.post(
          `/api/user/playlists/${_id}`,
          {
            video,
          },
          {
            headers: {
              authorization: getUserToken(),
            },
          }
        );
        playListDispatch({type:"PLAYLIST_VIDEO",payload:response.data.playlist})
        console.log("response data",response.data);
      } catch (error) {
        console.log(error);
      }
}

export{addToPlaylist}