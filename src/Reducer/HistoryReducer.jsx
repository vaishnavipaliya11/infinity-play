const historyReduFunc = () => {
  switch (action.type) {
    case "ADD_TO_HISTORY":
      return { ...state, historyVideo: action.payload };

    case "DELETE_FROM_HISTORY":
      return { ...state, historyVideo: action.payload };

    default:
      return state;
  }
};
