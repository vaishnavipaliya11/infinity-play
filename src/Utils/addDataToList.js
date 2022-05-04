const addDataToList = (video,playListDispatch)=>{
    playListDispatch({type:"SELECTED_ID",payload:video})
    playListDispatch({type:"MODAL",payload:true})
}

export {addDataToList}