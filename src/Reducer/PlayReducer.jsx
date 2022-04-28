export const playReducerFunc =(state,action)=>{

    switch (action.type) {
        case "MODAL":
            return{...state, modal:!state.modal}
        case "MODAL_CLOSE":
            return{...state,modal:action.payload}    
    
        default:
            return state;
    }
}

