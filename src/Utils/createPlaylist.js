import axios from "axios";
import { getUserToken } from "./getUserToken"; 
 
 const createPlaylist = async (
   userList, playListDispatch,setUserList
  
  ) => {

    console.log(userList,"user list");
    try {
      const response = await axios.post(
        "/api/user/playlists/",
        {
          playlist: userList,
        },
  
        {
          headers: {
            authorization: getUserToken(),
          },
        }
      );
  
      
      playListDispatch({
        type: "CREATE_PLAYLIST",
        payload: response.data.playlists,
      });

      setUserList({ ...userList, title: "" });
    } catch (error) {
      console.error();
    }
  };

  export{createPlaylist}