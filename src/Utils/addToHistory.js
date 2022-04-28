import axios from "axios"

const addToHistory = async (video, historyDispatch) =>{

    try {
        const {data}= await axios({
            method:"POST",
            url:"",
            headers:{
                authorization:getUserToken(),
            },
            data:{
                video:video
            }
        })

        console.log(data);
        // historyDispatch({type:"ADD_TO_HISTORY", payload: data.historyvideo})

    } catch (error) {
        console.log(error);
    }
}

export{addToHistory}