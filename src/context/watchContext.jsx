import {createContext,useContext, useReducer,} from "react";
import {watchReducerFunc} from "../Reducer/WatchReducer"
const WatchLaterContext = createContext();

const WatchLaterProvider = ({ children }) => {
  const [watchLaterState,watchLaterDispatch] = useReducer(watchReducerFunc, {
    watchLater: [],
  });

  return (
    <WatchLaterContext.Provider value={{ watchLaterState,watchLaterDispatch }}>
      {children}
    </WatchLaterContext.Provider>
  )
};

const useWatchLater = () => useContext(WatchLaterContext);

export { useWatchLater, WatchLaterProvider };
