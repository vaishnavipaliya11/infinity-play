import {createContext,useContext, useReducer,} from "react";

const WatchLaterContext = createContext();

const WatchProvider = ({ children }) => {
  const [watchLater, setWatchLater] = useReducer(watchReducerFunc, {
    watchLater: [],
  });

  return (
    <WatchLaterContext.Provider value={{ watchLater, setWatchLater }}>
      {children}
    </WatchLaterContext.Provider>
  );
};

const useWatchLater = () => useContext(WatchLaterContext);

export { useWatchLater, WatchLaterProvider };
