export const playReducerFunc =(state,action)=>{

    switch (action.type) {
        case "MODAL":
            return{...state, modal:!state.modal}
        case "MODAL_CLOSE":
            return{...state,modal:action.payload}    
        case "CREATE_PLAYLIST":
            console.log(action.payload);
            return{...state, createPlaylist:action.payload}
        default:
            return state;
    }
}

