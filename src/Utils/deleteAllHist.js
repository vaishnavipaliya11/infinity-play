import axios from "axios"
import toast from "react-hot-toast";
import { getUserToken } from "./getUserToken";
export const deleteAllHistory = async (historyDispatch) =>{
    try {
        const {data}= await axios({
            method:"DELETE",
            url:"/api/user/history/all",
            headers:{
                authorization:getUserToken(),
            },
        })

        toast.success("Deleted all videos")
        historyDispatch({type:"DELETE_ALL", payload: data.history})

    } catch (error) {
        toast.error("Something went wrong")
        console.error()
    }
}
