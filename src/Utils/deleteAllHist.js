import axios from "axios"
import { getUserToken } from "./getUserToken";
export const deleteAllHistory = async (historyDispatch) =>{
console.log("called");
    try {
        const {data}= await axios({
            method:"DELETE",
            url:"/api/user/history/all",
            headers:{
                authorization:getUserToken(),
            },
        })

        
        historyDispatch({type:"DELETE_ALL", payload: data.history})

    } catch (error) {
        console.error()
    }
}
