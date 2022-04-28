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

        console.log(data);
        historyDispatch({type:"ADD_TO_HISTORY", payload: data.history})

    } catch (error) {
        console.log(error);
    }
}

export{addToHistory}