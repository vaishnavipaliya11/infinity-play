import { createContext,useContext,useReducer } from "react";
import {historyReduFunc} from "../Reducer/HistoryReducer"
const HistoryContext = createContext();

const HistoryProvider = ({ children }) => {
  const [historyState, historyDispatch] = useReducer(historyReduFunc, {
    historyVideo: [],
  });
  return (
    <HistoryContext.Provider value={{ historyState, historyDispatch }}>
      {children}
    </HistoryContext.Provider>
  );
};

const useHistory = () => useContext(HistoryContext);

export { useHistory, HistoryProvider };
