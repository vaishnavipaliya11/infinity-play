import { getUserToken } from "./getUserToken"
import axios from "axios"

const addToLike = async(video,likedDispatch) =>{
    try{
        const {data}= await axios ({
            method:"POST",
            url:"/api/user/likes",
            headers:{
                authorization:getUserToken
            },

            data:{
                video:video
            }
        })

        likedDispatch({type:"ADD_TO_LIKED",payload:data.likes})
    }
    catch (e) {
        console.log("Something went wrong",e);
      }
}

export{addToLike}