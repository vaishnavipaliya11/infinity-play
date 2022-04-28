import { createContext,useContext,useReducer } from "react";
import {historyReduFunc} from "../Reducer/HistoryReducer"
const HistoryContext = createContext();

const HistoryProvider = ({ children }) => {
  const [historyState, historyDispatch] = useReducer(historyReduFunc, {
    historyVideo: [],
  });
  return (
    <HistoryProvider value={{ historyState, historyDispatch }}>
      {children}
    </HistoryProvider>
  );
};

const useHistory = () => useContext(HistoryContext);

export { useHistory, HistoryProvider };
