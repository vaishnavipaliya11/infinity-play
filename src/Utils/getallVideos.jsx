import axios from "axios"

export const getAllVideos = async(setData) =>{
    try {
        const response= await axios.get("/api/videos")
        setData(response.data.videos)
    } catch (error) {
        console.log(error);
    }
}