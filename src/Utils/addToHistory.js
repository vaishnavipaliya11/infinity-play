import axios from "axios"
import { getUserToken } from "./getUserToken";
const addToHistory = async (video, historyDispatch) =>{

    try {
        const {data}= await axios({
            method:"POST",
            url:"/api/user/history",
            headers:{
                authorization:getUserToken(),
            },
            data:{
                video:video
            }
        })

        
        historyDispatch({type:"ADD_TO_HISTORY", payload: data.history})

    } catch (error) {
        console.error()
    }
}

export{addToHistory}