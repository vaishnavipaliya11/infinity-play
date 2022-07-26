import axios from 'axios'
import {getUserToken} from "./getUserToken"
import toast from "react-hot-toast";
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

        toast.success("added to watchlater")
        watchLaterDispatch({type:"ADD_TO_WATCH_LATER",payload:data.watchlater})
    }
    catch (e) {
        toast.error("Something went wrong")
        console.log(e?.response);
      }
}

export {addToWatchLater}