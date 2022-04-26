import {
  createContext,
  useContext,
  useReducer,
} from "react";


const LikeContext = createContext();

const LikeProvider = ({ children }) => {
  const [likedState, likedDispatch] = useReducer(likeReducerFunc, {
    likedVideo: [],
  });
  return <LikeContext.Provider>{children}</LikeContext.Provider>;
};

const useLiked = () => useContext(LikeContext);

export { useLiked, LikeProvider };
