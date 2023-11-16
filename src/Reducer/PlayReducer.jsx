export const playReducerFunc = (state, action) => {
  switch (action.type) {
    case "MODAL":
      return { ...state, modal: action.payload };
    case "MODAL_CLOSE":
      return { ...state, modal: action.payload };
    case "CREATE_PLAYLIST":
      return { ...state, createUserPlaylist: action.payload };
    case "SELECTED_ID":
      return { ...state, selectedPlaylist: action.payload };
    case "GET_PLAYLIST":
      return {
        ...state,
        getUserPlayList: [...action.payload],
      };

    case "DELETE_FROM_PLAYLIST":
      return {
        ...state,
        getUserPlayList:[...action.payload],
      };
      case "DELETE_VIDEO_FROM_PLAYLIST":
        console.log(action.payload);
        return{
          ...state,
          getUserPlayList:state.getUserPlayList.map((playlist)=>{
            return playlist._id === action.payload._id ? action.payload : playlist
          })
        }
    default:
      return state;
  }
};
