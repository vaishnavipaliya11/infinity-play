import { createContext, useContext, useReducer, useState } from "react";
import { playReducerFunc } from "../Reducer/PlayReducer";

const PlayListContext = createContext();

const PlaylistProvider = ({ children }) => {
  
  const [playListState, playListDispatch] = useReducer(playReducerFunc, {
    modal: false,
    createUserPlaylist: [],
    selectedPlaylist: {},
    videoData: [],
    getUserPlayList: [],
  });
  return (
    <PlayListContext.Provider value={{ playListState, playListDispatch}}>
      {children}
    </PlayListContext.Provider>
  );
};

const usePlay = () => useContext(PlayListContext);

export { usePlay, PlaylistProvider };
