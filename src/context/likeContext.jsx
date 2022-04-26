import {
  createContext,
  useContext,
  useReducer,
} from "react";

const LikeContext = createContext();

const LikeProvider = ({ children }) => {
  const [likeState, likeDispatch] = useReducer(likeReducerFunc, {
    likedVideo: [],
  });
  return <LikeContext.Provider>{children}</LikeContext.Provider>;
};

const useLiked = () => useContext(LikeContext);

export { useLiked, LikeProvider };
