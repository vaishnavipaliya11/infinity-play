import axios from 'axios'
import {getUserToken} from "./getUserToken"
const addToWatchLater= async (video,watchLaterDispatch) =>{
    


    try{
        const {data}= await axios ({
            method:"POST",
            url:"/api/user/watchlater",
            headers:{
                authorization:getUserToken(),
            },

            data:{
                video:video
            }
        })

        console.log("data from fun", data);

        watchLaterDispatch({type:"ADD_TO_WATCH_LATER",payload:data.watchlater})
    }
    catch (e) {
        console.log("Something went wrong",e);
      }
}

export {addToWatchLater}