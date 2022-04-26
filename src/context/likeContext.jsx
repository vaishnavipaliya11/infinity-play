import {
  createContext,
  useContext,
  useReducer,
} from "react";
import { likeReducerFunc } from "../Reducer/LikeReducer";

const LikeContext = createContext();

const LikeProvider = ({ children }) => {
  const [likedState, likedDispatch] = useReducer(likeReducerFunc, {
    likedVideo: [],
  });
  return <LikeContext.Provider value={{likedState, likedDispatch}}>
  {children}
  </LikeContext.Provider>;
};

const useLiked = () => useContext(LikeContext);

export { useLiked, LikeProvider };
